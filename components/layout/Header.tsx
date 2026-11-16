"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("osbee-theme");
    const dark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;

    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("osbee-theme", nextDark ? "dark" : "light");
  };

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition duration-300 hover:border-[#326ba7] hover:bg-blue-50 hover:text-[#326ba7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#326ba7]"
    >
      {themeReady && isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gray-100/80 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-gray-900/5" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#326ba7]"
          onClick={() => setMenuOpen(false)}
          aria-label="OSBEE SOLUTIONS home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#326ba7] text-xl font-bold text-white transition duration-300 group-hover:-rotate-3 group-hover:shadow-lg group-hover:shadow-blue-900/20">
            O
          </div>

          <div>
            <div className="text-lg font-extrabold tracking-[0.12em] text-[#202124]">
              OSBEE
            </div>
            <div className="text-[9px] font-semibold tracking-[0.2em] text-gray-500">
              SOLUTIONS PRIVATE LIMITED
            </div>
          </div>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link relative py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#326ba7] ${
                  isActive
                    ? "text-[#326ba7]"
                    : "text-gray-600 hover:text-[#326ba7]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {themeButton}

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg bg-[#326ba7] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#245486] hover:shadow-lg hover:shadow-blue-900/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#326ba7]"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {themeButton}

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-800 transition duration-200 hover:border-[#326ba7] hover:bg-blue-50 hover:text-[#326ba7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#326ba7]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`mobile-menu-panel md:hidden ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-white px-6 py-4"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg border-l-2 px-4 py-3.5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-[#326ba7] ${
                    isActive
                      ? "border-[#326ba7] bg-blue-50 text-[#326ba7]"
                      : "border-transparent text-gray-700 hover:border-blue-200 hover:bg-gray-50 hover:text-[#326ba7]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#326ba7] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#245486] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#326ba7]"
            >
              Let&apos;s Talk
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
