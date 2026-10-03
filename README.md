# you & me

A one-page, hand-drawn love-letter website (React + Tailwind CSS v4 + Vite).
Spec: `.cluade/specs/01_design.md` · Plan: `.cluade/plans/01_design_plan.md`.

## Make it yours

Everything personal lives in **`src/content.ts`**:

- Replace every `[PLACEHOLDER]` (names, dates, the P.S., your city).
- Fill in the links you want to show (playlist, album, socials, email). Any link left as `''` is hidden.
- To use your own hero picture, replace `assets-src/hero-couple.png` and run `npm run images`.

## Commands

| Command               | What it does                                                       |
| --------------------- | ------------------------------------------------------------------ |
| `npm run dev`         | Local preview at http://localhost:5173                             |
| `npm run build`       | Publish-ready build in `dist/` — refuses while placeholders remain |
| `npm run build:draft` | Build anyway (for testing)                                         |
| `npm run preview`     | Serve the built `dist/` folder                                     |
| `npm test`            | Menu, "Yes, always" and footer-link tests                          |
| `npm run lint`        | ESLint                                                             |

The `dist/` folder is plain static files and works on any static host
(Netlify, GitHub Pages, Cloudflare Pages…), including from a sub-folder.
After hosting, put the full URL of `og-image.jpg` into the `og:image` and
`twitter:image` tags in `index.html` so link previews show the picture.

> The npm scripts call Node directly (not `node_modules/.bin`) because the `&`
> in this folder's name breaks npm's command shims on Windows.

## Where things are

- `src/index.css`: design tokens (`@theme`), hand-drawn utilities (`rounded-hand`, `clip-tape`, `bg-lined`, `tilt`…), paper grain, heart cursor, print and reduced-motion rules
- `src/components/ui`: buttons, paper cards, tape, pins, chips, doodle sprite
- `src/components/sections`: one file per page section
- `src/components/illustrations`: the mugs, moonlit window and envelope drawings
- `src/hooks`: menu, scroll-spy, heart burst, media queries
