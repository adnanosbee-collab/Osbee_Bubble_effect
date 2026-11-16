# OSBEE SOLUTIONS — Premium Dark Mode Effect

A premium dark mode experience designed for the OSBEE SOLUTIONS website, featuring a deep midnight colour palette, refined gradients, elegant surfaces, and smooth visual transitions.

## Overview

The dark mode effect transforms the website into a modern, premium interface while maintaining readability, visual hierarchy, and consistency throughout the website.

The design uses:

- Deep midnight and navy backgrounds.
- Subtle blue and violet accent colours.
- Refined gradient surfaces and cards.
- Improved text contrast and readability.
- Soft borders and layered visual depth.
- A polished header with a subtle blur effect.
- Consistent dark styling across website sections and components.

## Key Features

### 1. Theme Switching

Users can switch between light mode and dark mode using the website's theme toggle.

### 2. Theme Persistence

The selected theme is saved in the browser's local storage using:

`osbee-theme`

This allows the website to remember the user's selected theme when they revisit the site.

### 3. Premium Dark UI

The dark interface uses a carefully selected colour palette to create a sophisticated appearance without relying on a flat black background.

### 4. Gradient Surfaces

Cards and interface elements use subtle gradients, borders, and background variations to create depth and separation.

### 5. Consistent Components

The dark theme is designed to work across the website, including:

- Navigation header
- Homepage sections
- About page
- Contact page
- Contact form
- Footer
- Cards and interactive elements

### 6. Beneath Reveal Cursor Effect

The website also includes a custom white liquid-style Beneath Reveal cursor effect.

Its visual characteristics include:

- Organic, morphing liquid shape.
- Fine grain texture.
- Small detached droplets.
- Fluid movement following the pointer.
- Splash interaction on click.
- Automatic fading after pointer inactivity.

The cursor reveal is a separate visual effect from the dark mode theme.

## Theme Implementation

The theme is implemented using:

| File | Purpose |
|---|---|
| `components/layout/Header.tsx` | Theme toggle and theme selection |
| `app/globals.css` | Global styles and dark theme appearance |
| `app/layout.tsx` | Global application layout |
| `components/ui/BeneathReveal.tsx` | Liquid Beneath Reveal cursor effect |

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS custom properties and selectors
- Browser Local Storage

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

`http://localhost:3000`

## Customization

To customize the dark mode appearance, edit:

`app/globals.css`

To customize theme switching and persistence, edit:

`components/layout/Header.tsx`

To customize the liquid cursor effect, edit:

`components/ui/BeneathReveal.tsx`

## Project Repository

[OSBEE SOLUTIONS — GitHub](https://github.com/adnanosbee-collab/Osbee_Bubble_effect)

---

**Designed and developed for OSBEE SOLUTIONS PRIVATE LIMITED.**
