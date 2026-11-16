"use client";

import { useEffect } from "react";

type TrailPoint = {
  x: number;
  y: number;
  time: number;
};

export default function BeneathReveal() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    const cursor = document.createElement("div");
    cursor.className = "beneath-reveal-lens";
    cursor.setAttribute("aria-hidden", "true");

    cursor.innerHTML = `
      <svg class="beneath-mask-defs"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <defs>
          <filter id="osbee-beneath-goo"
            x="-35%" y="-35%" width="170%" height="170%"
            color-interpolation-filters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 19 -7
              " result="goo" />
          </filter>

          <mask id="osbee-beneath-mask"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            <g filter="url(#osbee-beneath-goo)" fill="white">
              <path id="beneath-flow-path" d="" />
              <circle id="beneath-core" cx="-300" cy="-300" r="88" />
              <ellipse id="beneath-tail-one" cx="-400" cy="-300" rx="42" ry="23" />
              <circle id="beneath-drop-one" cx="-500" cy="-300" r="10" />
              <circle id="beneath-drop-two" cx="-520" cy="-300" r="6" />
            </g>
          </mask>
        </defs>
      </svg>
      <div class="beneath-reveal-overlay"></div>
      <div class="beneath-reveal-edge"></div>
    `;

    document.body.appendChild(cursor);

    const core = cursor.querySelector("#beneath-core") as SVGCircleElement;
    const tail = cursor.querySelector("#beneath-tail-one") as SVGEllipseElement;
    const dropOne = cursor.querySelector("#beneath-drop-one") as SVGCircleElement;
    const dropTwo = cursor.querySelector("#beneath-drop-two") as SVGCircleElement;
    const flowPath = cursor.querySelector("#beneath-flow-path") as SVGPathElement;

    let isDark = root.classList.contains("dark");
    let visible = false;
    let moving = false;
    let targetX = -300;
    let targetY = -300;
    let currentX = targetX;
    let currentY = targetY;
    let velocityX = 0;
    let velocityY = 0;
    let previousX = targetX;
    let previousY = targetY;
    let previousTime = 0;
    let inactivityTimer: number | undefined;
    let fadeTimer: number | undefined;
    let frame = 0;

    const trail: TrailPoint[] = [];

    const setCircle = (
      element: SVGCircleElement,
      x: number,
      y: number,
      radius: number
    ) => {
      element.setAttribute("cx", x.toFixed(1));
      element.setAttribute("cy", y.toFixed(1));
      element.setAttribute("r", radius.toFixed(1));
    };

    const setEllipse = (
      element: SVGEllipseElement,
      x: number,
      y: number,
      rx: number,
      ry: number,
      angle: number
    ) => {
      element.setAttribute("cx", x.toFixed(1));
      element.setAttribute("cy", y.toFixed(1));
      element.setAttribute("rx", rx.toFixed(1));
      element.setAttribute("ry", ry.toFixed(1));
      element.setAttribute("transform", `rotate(${angle} ${x} ${y})`);
    };

    // Smooth a closed outline using quadratic curves instead of sharp polygon corners.
    const smoothClosedPath = (points: { x: number; y: number }[]) => {
      if (points.length < 4) return "";

      const midpoint = (a: { x: number; y: number }, b: { x: number; y: number }) => ({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
      });

      const firstMid = midpoint(points[points.length - 1], points[0]);
      let d = `M ${firstMid.x.toFixed(1)} ${firstMid.y.toFixed(1)}`;

      for (let i = 0; i < points.length; i++) {
        const nextMid = midpoint(points[i], points[(i + 1) % points.length]);
        d += ` Q ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)} ${nextMid.x.toFixed(1)} ${nextMid.y.toFixed(1)}`;
      }

      return d + " Z";
    };

    const buildWaterTrail = (now: number) => {
      const lifetime = 1250;

      while (trail.length && now - trail[0].time > lifetime) {
        trail.shift();
      }

      if (trail.length < 3) {
        flowPath.setAttribute("d", "");
        return;
      }

      const left: { x: number; y: number }[] = [];
      const right: { x: number; y: number }[] = [];

      for (let i = 0; i < trail.length; i++) {
        const previous = trail[Math.max(0, i - 1)];
        const next = trail[Math.min(trail.length - 1, i + 1)];
        const point = trail[i];

        const dx = next.x - previous.x;
        const dy = next.y - previous.y;
        const length = Math.hypot(dx, dy) || 1;
        const nx = -dy / length;
        const ny = dx / length;

        const progress = i / Math.max(1, trail.length - 1);
        const age = Math.max(0, 1 - (now - point.time) / lifetime);
        const taper = Math.sin((progress * 0.84 + 0.16) * Math.PI / 2);
        const broadWidth = 21 + 49 * taper;
        const ripple = Math.sin(i * 0.68 + now * 0.0045) * 4.2 * age;
        const halfWidth = broadWidth * Math.min(1, age * 2) + ripple;

        left.push({
          x: point.x + nx * halfWidth,
          y: point.y + ny * halfWidth,
        });
        right.push({
          x: point.x - nx * halfWidth,
          y: point.y - ny * halfWidth,
        });
      }

      flowPath.setAttribute("d", smoothClosedPath([...left, ...right.reverse()]));
    };

    const hide = () => {
      visible = false;
      moving = false;
      trail.length = 0;
      flowPath.setAttribute("d", "");
      cursor.classList.remove("is-visible", "is-moving", "is-settled", "is-fading");

      if (inactivityTimer !== undefined) {
        window.clearTimeout(inactivityTimer);
        inactivityTimer = undefined;
      }
      if (fadeTimer !== undefined) {
        window.clearTimeout(fadeTimer);
        fadeTimer = undefined;
      }
    };

    const updateTheme = () => {
      isDark = root.classList.contains("dark");

      if (!isDark) {
        hide();
        document.querySelectorAll(".liquid-splash").forEach((node) => node.remove());
      }
    };

    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const move = (event: PointerEvent) => {
      if (!isDark) return;

      targetX = event.clientX;
      targetY = event.clientY;

      if (!visible) {
        currentX = targetX;
        currentY = targetY;
        previousX = targetX;
        previousY = targetY;
        visible = true;
        cursor.classList.add("is-visible");
      }

      cursor.classList.remove("is-fading", "is-settled");
      moving = true;
      cursor.classList.add("is-moving");

      if (fadeTimer !== undefined) {
        window.clearTimeout(fadeTimer);
        fadeTimer = undefined;
      }
      if (inactivityTimer !== undefined) {
        window.clearTimeout(inactivityTimer);
      }

      inactivityTimer = window.setTimeout(() => {
        moving = false;
        cursor.classList.remove("is-moving");
        cursor.classList.add("is-settled");
        inactivityTimer = undefined;

        // Fade out quickly after the pointer becomes idle.
        cursor.classList.add("is-fading");
        fadeTimer = window.setTimeout(() => {
          hide();
        }, 250);
      }, 250);
    };

    const splash = (event: PointerEvent) => {
      if (!isDark || event.button !== 0) return;

      const mark = document.createElement("span");
      mark.className = "liquid-splash";
      mark.setAttribute("aria-hidden", "true");
      mark.style.left = `${event.clientX}px`;
      mark.style.top = `${event.clientY}px`;
      mark.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";

      document.body.appendChild(mark);
      window.setTimeout(() => mark.remove(), 850);
    };

    const animate = (time: number) => {
      const follow = moving ? 0.2 : 0.13;
      currentX += (targetX - currentX) * follow;
      currentY += (targetY - currentY) * follow;

      const deltaTime = previousTime ? Math.max(time - previousTime, 1) : 16;
      const instantVX = (currentX - previousX) / deltaTime;
      const instantVY = (currentY - previousY) / deltaTime;

      velocityX += (instantVX - velocityX) * 0.2;
      velocityY += (instantVY - velocityY) * 0.2;

      const speed = Math.min(Math.hypot(velocityX, velocityY) / 1.1, 1);
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);
      const directionX = Math.cos(angle * Math.PI / 180);
      const directionY = Math.sin(angle * Math.PI / 180);

      if (visible) {
        const last = trail[trail.length - 1];
        if (!last || Math.hypot(currentX - last.x, currentY - last.y) > 2) {
          trail.push({ x: currentX, y: currentY, time });
        }
        buildWaterTrail(time);
      }

      // A genuinely round liquid head, with only slight movement deformation.
      const roundness = moving ? 1 + speed * 0.045 : 1;
      setCircle(core, currentX, currentY, 88 * roundness);

      setEllipse(
        tail,
        currentX - directionX * 62,
        currentY - directionY * 62,
        42 + speed * 12,
        23,
        angle
      );

      setCircle(
        dropOne,
        currentX - directionX * 108 - directionY * 9,
        currentY - directionY * 108 + directionX * 9,
        10 + speed * 2
      );

      setCircle(
        dropTwo,
        currentX - directionX * 140 + directionY * 8,
        currentY - directionY * 140 - directionX * 8,
        6 + speed
      );

      cursor.style.setProperty("--flow-energy", speed.toFixed(3));
      cursor.style.setProperty("--flow-angle", `${angle}deg`);

      previousX = currentX;
      previousY = currentY;
      previousTime = time;
      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", splash);
    window.addEventListener("blur", hide);
    document.addEventListener("mouseleave", hide);

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", splash);
      window.removeEventListener("blur", hide);
      document.removeEventListener("mouseleave", hide);
      themeObserver.disconnect();
      window.cancelAnimationFrame(frame);

      if (inactivityTimer !== undefined) window.clearTimeout(inactivityTimer);
      if (fadeTimer !== undefined) window.clearTimeout(fadeTimer);

      cursor.remove();
      document.querySelectorAll(".liquid-splash").forEach((node) => node.remove());
    };
  }, []);

  return null;
}
