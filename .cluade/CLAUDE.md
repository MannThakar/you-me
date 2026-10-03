# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"you & me": a single-page, static, hand-drawn love-letter website (React 19 + Tailwind CSS v4 + Vite, TypeScript). There is no backend, no router and no state library. The product spec lives at `.cluade/specs/01_design.md` (the folder name is spelled `.cluade`, not `.claude`) and the implementation plan at `.cluade/plans/01_design_plan.md`. Read the spec before making visual or copy decisions: it defines the palette, type roles, breakpoints and behaviors.

## Commands

```sh
npm run dev           # Vite dev server, http://localhost:5173
npm run build         # tsc -b + vite build; prebuild FAILS while any [PLACEHOLDER] remains in src/content.ts
npm run build:draft   # same build, skipping the placeholder check
npm run preview       # serve dist/
npm test              # vitest run (jsdom)
npm test -- src/test/menu.test.tsx     # one test file
npm test -- -t "closes on Escape"      # tests matching a name
npm run lint          # ESLint
npm run format        # Prettier (with tailwind class sorting)
npm run images        # regenerate hero images + og-image from assets-src/hero-couple.png (sharp)
```

The npm scripts call `node node_modules/<pkg>/...` directly instead of the `.bin` shims, because the `&` in the parent folder name (`D:\you&me`) breaks npm's command shims on Windows. Keep that pattern when you add scripts, and don't "simplify" them back to bare `vite`/`tsc`.

## Architecture

- **Content is separate from layout.** All personal copy and links live in `src/content.ts`. Components import `content` and never hard-code the author's words. Conventions:
  - `[SQUARE BRACKET CAPS]` text marks a placeholder. `scripts/check-placeholders.mjs` scans non-comment lines of `content.ts` for it before `npm run build`.
  - A `Copy` value is `{ text, short? }`. Render it through the helper in `src/components/ui/Bits.tsx`, which shows `short` below the `sm` breakpoint and `text` above it.
  - A link set to `''` must be hidden, never rendered as a broken link.
- **Page composition:** `src/App.tsx` renders the sections in order (one file each in `src/components/sections/`). NavBar and Footer link to sections by hash ids (`#top`, `#how`, `#about`, `#stories`, `#quote`, `#start`). `useScrollSpy` highlights the nav item for the section in view. If you add, rename or reorder a section, keep its `id` and the `navLinks` arrays in `NavBar.tsx`/`Footer.tsx` in sync. Note: `Memories.tsx` (`#stories`) exists but is currently not rendered in `App.tsx`.
- **Doodles use an SVG sprite.** `DoodleSprite` is mounted once at the top of `App` and defines `<symbol id="d-<name>">`. `<Doodle name=…>` / `<MarginDoodle>` (`src/components/ui/Doodle.tsx`) reference it with `<use>`, and colour comes from `currentColor` via Tailwind text classes. A new doodle needs a symbol in `DoodleSprite.tsx` plus its name in the `DoodleName` union. Doodles are always `aria-hidden`, and margin doodles are `pointer-events-none` and `no-print`. The larger scenes (mugs, window, envelope) are separate components in `src/components/illustrations/`.
- **Design system is Tailwind v4 CSS-first.** There is no `tailwind.config`; everything is in `src/index.css`:
  - `@theme` tokens: colors (`paper`, `ink`, `rosehip`, `twilight`, tints…), fonts `display`/`hand`/`body`, fluid `text-*` sizes, `shadow-sticker*`, and animations.
  - Custom breakpoints: `sm` = 561px, `md` = 901px, `lg` = 1101px, not Tailwind's defaults.
  - Hand-drawn `@utility` classes: `rounded-hand`, `rounded-btn`, `border-hand`, `clip-tape`, `bg-lined`, `tilt`…
  - Global reduced-motion, fine-pointer heart cursor and print rules.

  Prefer these tokens and utilities over arbitrary values. Fonts are self-hosted through `@fontsource` imports in `src/main.tsx`.
- **Motion and interaction:** heart effects (`HeartBurst`, `HeartTrail`, `useHeartBurst`) and other animations must respect `useReducedMotion()` (`src/hooks/useMediaQuery.ts`). `useMenu` owns the mobile sticky-note menu: aria-expanded, Escape to close, focus return, and the `menu-open` class on `<html>`.
- **Static, relocatable build:** `vite.config.ts` uses `base: './'` so `dist/` works from any sub-folder on a static host. After deploying, put the absolute URL of `og-image.jpg` into the `og:image`/`twitter:image` tags in `index.html`.

## Tests

Vitest with jsdom, globals enabled, and `@testing-library/jest-dom` set up in `src/test/setup.ts`. CSS is not processed (`css: false`), so tests can't rely on Tailwind visibility classes; the menu tests check visibility through the `hidden` state and attributes. Tests live in `src/test/`.

## Style

Prettier: no semicolons, single quotes, 100-column lines, tailwind class sorting (reads `src/index.css`). TypeScript is strict with `noUnusedLocals`/`noUnusedParameters` and `verbatimModuleSyntax`, so use `import type` for type-only imports.
