# Implementation Plan — "you & me" Love Story Website (React + Tailwind)

## Context

`.cluade/specs/01_design.md` describes a static, one-page, hand-drawn "love letter" site. The design is on the canvas https://claude.ai/artifact/Ky6f7ANTpHUWUKmQc2YdtB, with exports `Desktop · Home (1440).png`, `Tablet · Home (834).png` and `Mobile · Home (390).png`. The repo `D:\you&me\doddle-art` contains only the spec, so this is a greenfield build. Mann asked for **React + Tailwind** and a **custom heart cursor**.

What the canvas source gives us:
- **`project/Main.dc.html`** is a fluid page that already works at every width:
  - breakpoints at 1100 / 900 / 560;
  - the `.hb` wobbly border, `.tape`, `.btn` states and the `.lined` notebook;
  - an SVG `<symbol>` sprite with 17 doodles (`d-flower, d-daisy, d-star, d-heart, d-sprig, d-sun, d-swirl, d-sparkle, d-burst, d-cloud, d-tulip, d-leaf, d-dots, d-arrow, d-underline, d-squiggle, d-circle`).
- **`Tablet.dc.html` and `Mobile.dc.html`** are fixed-width artboards. They are only a reference for content order, shorter copy and doodle density per width.
- **The three scene illustrations** are inline SVGs: `MugsScene`, `WindowScene`, `Envelope`.
- **The hero couple** is an uploaded raster, `/_blob/01ca081e5aed159a22a7a48b9887b260`, 1672×941. Its alt text is already written.
- **`Foundations.dc.html` and `Components.dc.html`** hold the tokens, the type scale, the paper recipe and the specs for buttons, nav, menu, chips and cards.

**Approach:** rebuild `Main.dc.html` as React components styled with Tailwind:
- design tokens go into the Tailwind theme;
- hand-drawn shapes (wobbly radii, tape clip-paths, grain) become small reusable utilities;
- behaviour comes from a few hooks: the menu, scroll-spy, the "Yes, always" burst and the heart cursor.

## Tech stack

- **Vite + React 19 + TypeScript.** It builds to static files, so FR-1 still holds and any static host works. Hosting is out of scope.
- **Tailwind CSS v4** via `@tailwindcss/vite`, configured CSS-first with `@theme` in `src/index.css`. There is no `tailwind.config.js`.
- **Fonts:** `@fontsource/gluten`, `@fontsource/caveat` and `@fontsource/nunito` are self-hosted, so nothing loads from Google at runtime. They use `font-display: swap` plus metric-matched fallback faces.
- **No other runtime dependencies.** No router (it's one page) and no animation library (CSS keyframes are enough).
- **Dev tooling:** ESLint (Vite template), Prettier with `prettier-plugin-tailwindcss` for class order, and Vitest + Testing Library for the hooks and the menu.

## File layout

```
index.html                      <title>, meta/OG tags, favicon
public/og-image.jpg             1200×630 share image
public/cursors/heart.svg, heart-pointer.svg   (see Step 7)
src/main.tsx, App.tsx
src/index.css                   @import "tailwindcss"; @theme tokens; @utility hand-drawn helpers; base, print, reduced-motion, cursor
src/content.ts                  ALL copy, names, dates, links in one typed object (FR-6)
src/assets/hero-couple.webp/.jpg
src/components/
  ui/   Button.tsx, TextLink.tsx, PaperCard.tsx, Tape.tsx, Pin.tsx, Chip.tsx, NumberBadge.tsx, Sticker.tsx, IconButton.tsx, Doodle.tsx, DoodleSprite.tsx, TornEdge.tsx
  illustrations/  MugsScene.tsx, WindowScene.tsx, Envelope.tsx
  sections/  NavBar.tsx, MobileMenu.tsx, Hero.tsx, DearYou.tsx, Chapters.tsx, Memories.tsx, Quote.tsx, Closing.tsx, Footer.tsx
src/hooks/  useMenu.ts, useScrollSpy.ts, useReducedMotion.ts
src/components/HeartBurst.tsx
scripts/check-placeholders.mjs
```

## Steps

### 1. Scaffold
1. Run `npm create vite@latest . -- --template react-ts`, then add `tailwindcss` and `@tailwindcss/vite`, the fontsource packages, and Prettier, Vitest and Testing Library.
2. In `vite.config.ts`, set `plugins: [react(), tailwindcss()]` and `base: './'` so the build works from any subpath.

### 2. Pull assets out of the canvas
- **Hero image:** download the blob (Artifact `read`, path `01ca081e5aed159a22a7a48b9887b260`) to `src/assets/hero-couple.*`. Make WebP and JPG versions, plus the OG crop.
- **Scenes:** turn the `<svg>` in each scene file (`MugsScene/WindowScene/Envelope.dc.html`) into a TSX component.
  - Convert attributes to camelCase (`stroke-width` → `strokeWidth`).
  - Make filter and clip ids unique with `useId()`.
  - Add `role="img"` and an `aria-label` that uses the description from the spec.
- **Doodles:** move the 17 `<symbol>`s from `Main.dc.html:45-64` into `DoodleSprite.tsx`, rendered once in `App`. `<Doodle name="heart" className="text-rosehip size-10 -rotate-12" />` then renders `<svg aria-hidden focusable="false"><use href="#d-heart"/></svg>`. Its colour comes from `currentColor`, so Tailwind `text-*` classes set it.

### 3. Tokens and utilities in `src/index.css`
- **`@theme`** holds:
  - colours: `--color-paper #FBF7EF`, `--color-paper-white`, `--color-cream`, `--color-ink`, `--color-ink-soft`, `--color-rosehip`, `--color-rosehip-deep`, `--color-leaf`, `--color-sky`, `--color-twilight`, `--color-sunny`, `--color-tangerine`, `--color-lilac`, and the five `--color-tint-*`;
  - fonts: `--font-display: Gluten…`, `--font-hand: Caveat…`, `--font-body: Nunito…`;
  - breakpoints to match the design: `--breakpoint-sm: 35.0625rem` (561), `--breakpoint-md: 56.3125rem` (901), `--breakpoint-lg: 68.8125rem` (1101). Tailwind is mobile-first, so the layout is written for phones first and each prefix steps up a width.
  - shadows: `--shadow-sticker: 3px 4px 0 var(--color-ink)`, `--shadow-sticker-lg: 5px 7px 0 …`, `--shadow-paper: 5px 6px 0 rgb(42 34 51/.14)`.
  - fluid type sizes using `clamp()` between the 390 and 1440 values: `--text-display` 50→96, `--text-h2` 36→60, `--text-h3` 22→26, `--text-hand` 24→30, `--text-quote` 38→68, and body 18/21.
- **`@utility`** helpers for things Tailwind can't express nicely:
  - `rounded-hand` (`255px 18px 225px 18px/18px 225px 18px 255px`);
  - `rounded-btn`;
  - `rounded-blob` (the circle sticker);
  - `clip-tape` (the polygon);
  - `bg-lined` (blue ruled lines plus the pink margin);
  - `underline-wavy-rose`.
- **`@layer base`** holds:
  - `color-scheme: light` and the paper body background (edge case 8);
  - the grain as `body::before` with an `feTurbulence` data-URI at 14% opacity, multiply blend and `pointer-events-none`;
  - `:focus-visible` as a 3px dashed sky outline with a 4px offset;
  - `scroll-margin-top` on `section[id]`;
  - smooth scroll only when the visitor allows motion;
  - fallback font faces (`size-adjust` on local Arial / Comic Sans MS);
  - `@media print` rules.

### 4. UI primitives (`src/components/ui`)
Port each primitive from `Main.dc.html:15-37` and `Components.dc.html`. Each one is a typed component with a small variant map; no CVA library is needed.
- **`Button`**
  - Variants: `primary` (rosehip-deep), `sunny`, and size `sm`.
  - Renders as an `<a href>` or a `<button>`.
  - States: hover `-translate-x-px -translate-y-0.5 -rotate-[1.2deg] shadow-sticker-lg`; active `translate-x-0.5 translate-y-[3px] shadow-[1px_1px_0]`; plus the focus outline (FR-7).
  - Minimum height is 48px for every size; the canvas's `sm` is 46, so it goes up for §6.
  - Hover tilt is turned off with `motion-reduce:`.
- **`PaperCard`**
  - Props: `tint`, `fastener` (`tape | pin | washi | star`), `tilt` (degrees) and `offset`.
  - Tilt and offset go into CSS variables, so `max-sm:` can halve the tilt and drop the offset from one place.
  - `Chapters` gives neighbouring cards different tint and fastener values (§4.4).
- **Smaller pieces:** `Tape` (yellow, pink and blue variants), `Pin`, `Chip`, `NumberBadge`, `Sticker` ("made with love & tea"), `IconButton` (48×48 with a required `label` prop), and `TornEdge` / wavy footer edge (SVG paths from Main and Foundations).

### 5. Sections (`src/components/sections`), in the spec §4 order
All copy comes from `src/content.ts`, so the author edits one file (FR-6). Section ids: `top`, `about`, `how`, `stories`, `quote`, `start`.
- **`NavBar`:**
  - Sticky and taped with a `-rotate-[0.5deg]`.
  - The logo links to `#top`.
  - Links are `hidden md:flex`.
  - The CTA is `max-sm:hidden`.
  - The menu button is `md:hidden` and toggles a hand-drawn ☰/×.
- **`MobileMenu`:** a yellow sticky note with a pin, 52px Gluten rows, and the CTA shown `sm:hidden` inside it (AC 6).
- **`Hero`:**
  - On desktop the grid is `md:grid-cols-[.9fr_1.15fr]`.
  - On mobile, `grid-template-areas` give the order label, headline, image, intro, buttons, which follows the mobile artboard without duplicating markup.
  - The image is a `<picture>` with WebP and JPG and an explicit `width`/`height`, so the layout doesn't jump.
  - The frame and caption stay if the image fails.
- **`DearYou`, `Chapters` (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`), `Memories` (twilight band between two `TornEdge`s), `Quote`, `Closing`, `Footer`:**
  - The footer grid is 1 column on phones with 2-column link groups, `sm:grid-cols-[1.4fr_1fr_1fr]` on tablets (the tablet artboard shows 3 columns), and `md:grid-cols-[1.6fr_1fr_1fr_1fr]` on desktop.
  - Footer and "our things" links whose URL is empty in `content.ts` are not rendered; an empty column is dropped too (FR-5).
  - External links get `target="_blank" rel="noopener"`; email uses `mailto:`.
- **Shorter mobile copy:** content fields with an optional `more` part render `<span className="max-sm:hidden">`. The cut points come from `Mobile.dc.html`.
- **Doodle density:** `hidden lg:block` / `hidden sm:block` on doodles gives 5–7, 3–5 and 1–3 doodles per view, following the artboards.

### 6. Behaviour hooks
- **`useMenu` (FR-3):**
  - Holds the open state and sets `aria-expanded` / `aria-controls`.
  - Escape closes it, via `onKeyDown` on the menu and button, not a global listener.
  - A `pointerdown` outside (a document listener that only runs while open) also closes it.
  - Choosing a link closes the menu and lets the native `#hash` scroll happen.
  - While open, `overflow:hidden` on `<html>` locks scroll.
  - Focus returns to the button on close, and the menu closes automatically when `matchMedia('(min-width: 901px)')` matches.
- **`useScrollSpy(ids)`:** an `IntersectionObserver` returns the active id. The matching NavBar link gets `aria-current="true"` and the `aria-[current=true]:underline-wavy-rose` underline, so the state is never shown by colour alone.
- **`HeartBurst` + `Closing` (FR-4):**
  - Each click adds a burst key to state and renders 12 `<Doodle>` hearts and sparkles.
  - The angle and distance of each piece go into CSS variables used by an `@keyframes burst` (defined via `--animate-burst` in `@theme`), and each piece is removed on `onAnimationEnd`.
  - A handwritten "thank you — I love you" note appears in an `aria-live="polite"` region.
  - It repeats on every click.
  - `useReducedMotion` switches it to a still cluster of hearts with no animation.
- **Navigation:** in-page links are plain `<a href="#how">`, so back-button history and deep links (`/#stories`) work natively (FR-2, edge case 6).

### 7. Custom heart cursor
- **Assets:** two 32×32 SVGs in `public/cursors/` (32px is the largest size Windows draws reliably).
  - `heart.svg` is the default cursor: a rosehip heart with a 2px ink outline and a small white shine, drawn from the `d-heart` symbol path. Its hotspot is the heart's top-centre notch (16 4).
  - `heart-pointer.svg` is for links and buttons: a filled rosehip-deep heart tilted −15°, slightly bigger inside the box, with the hotspot at the tip (6 6) so clicking feels precise.
- **CSS** in `@layer base`, applied only on devices with a mouse:
  ```css
  @media (pointer: fine) {
    html { cursor: url(/cursors/heart.svg) 16 4, auto; }
    a, button, [role="button"], label, summary { cursor: url(/cursors/heart-pointer.svg) 6 6, pointer; }
    input, textarea { cursor: text; }
  }
  ```
  - Touch devices keep their normal behaviour, since `pointer: coarse` doesn't match.
  - The `auto` / `pointer` fallbacks cover browsers that reject SVG cursors.
  - Text fields keep the I-beam so selecting text still works.
- **Extra flourish:** on pointer-fine devices only, with motion allowed, a tiny trail of 3 fading hearts follows the cursor, rendered by a `HeartTrail` component.
  - It uses `pointermove` throttled with `requestAnimationFrame`, a pool of 6 absolutely positioned elements (no React re-render per move), `pointer-events:none` and `aria-hidden`.
  - It is turned off with reduced motion and hidden in print.
- **Accessibility:** the cursor is purely decorative; the 3px dashed focus outline stays the keyboard indicator, and the cursor is never the only signal.

### 8. States and accessibility
- **Print:** hide the grain, nav, menu, icon buttons, doodles, burst and cursor trail. Turn the twilight band into paper with ink text, and remove tilts.
- **Reduced motion:** no smooth scroll, no hover tilt (the shadow change stays), a static burst and no trail.
- **Contrast:** white text only on rosehip-deep or twilight; `text-rosehip` only at 24px or larger.
- **Order:** DOM order matches visual order, and the grid-area hero keeps a logical tab order.

### 9. Personalisation (FR-6)
- `src/content.ts` holds every name, date, P.S., city and URL. Placeholders stay as `[THE DAY WE MET]` and so on until the author fills them.
- `scripts/check-placeholders.mjs` scans `src/content.ts` and `dist/` for `/\[[A-Z ]+\]/`.
- It is wired as `"prebuild"`, so `npm run build` fails until every placeholder is replaced. During development, `npm run build:draft` skips the check.

## Verification
1. **Run it:**
   - `npm run dev`, then open the page in Chrome with the claude-in-chrome tools.
   - `npm run build:draft && npm run preview` to check the static build.
2. **Unit tests** (`npm test`, Vitest):
   - `useMenu` opens, closes on Escape and on an outside click, and closes on a link click;
   - `HeartBurst` mounts and unmounts its pieces and shows the static variant under reduced motion;
   - empty footer links are not rendered.
3. **Visual match:** at 1440, 834 and 390, screenshot and compare each section with the three PNGs (AC 2). Spot-check 320, 560/561, 900/901, 1100/1101 and 2560, and confirm `scrollWidth === innerWidth` (AC 3).
4. **Navigation:** every anchor lands with its heading visible and the back button works (AC 4). Opening `/#stories` directly lands on that section.
5. **Menu:**
   - below 900, test open, link, Escape, outside tap and scroll lock (AC 5);
   - below 560, the CTA appears inside the menu (AC 6).
6. **"Yes, always":** click twice, then emulate reduced motion (AC 8).
7. **Cursor:**
   - on desktop, the heart appears over the page and the pointer-heart over links and buttons, with an accurate click hotspot;
   - text fields show the I-beam;
   - in device-emulation (touch) mode, no custom cursor or trail appears;
   - the trail stops under reduced motion.
8. **Keyboard:** tab through the whole page and check the dashed sky focus and button states (AC 9, 11).
9. **Accessibility tooling:** run Lighthouse or axe, zoom to 200%, block images (AC 12) and check print preview.
10. **Publishing checks:** `npm run build` fails while placeholders remain (AC 10). After deploying, check the OG tags with a share-preview debugger (AC 13).

## Defaults carried from spec §13
- A single personal gift.
- "Yes, always" shows a burst plus a note.
- The album link points out to an external site.
- The link is public, with no password.
- Both labels stay: "A love note" and "Open my letter".
- The hero uses the canvas illustration until the author supplies their own.
- TypeScript is assumed for the React code.
