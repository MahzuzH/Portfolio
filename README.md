# Mahzuz Hazman — Portfolio

Personal site for **Mahzuz Hazman**, full-stack developer in Subang, Indonesia. Built with Astro 7 and Tailwind CSS 4 as a fully static single page: warm editorial layout with pixel-art details.

Live: [mhzhzmn.web.id](https://mhzhzmn.web.id)

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 7 (static output, no client framework) |
| Styling | Tailwind CSS 4 + design tokens in `global.css` |
| Fonts | Fontsource: Pixelify Sans, Space Grotesk, JetBrains Mono (self-hosted, Latin only) |
| Scripts | TypeScript, plain DOM (`src/scripts/`) |
| Tests | `node:test` — no extra dependency |
| Deploy | GitHub Pages via GitHub Actions |

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview the production build
npm test          # unit tests (node:test, no extra dependency)
npx astro check   # type check
```

## Content

Everything editable lives in **`src/data/profile.ts`** — this is the live personal site, not a template.

**`profile`** — name, role, location, timezone, email, phone, profile image, résumé path, Spotify playlist, Letterboxd username, top films and top games, intro, summary, quote, achievements, stats, facts, skill groups and social links.

**`sections`** — ordered nav list with index numbers, labels, titles and lede copy. `Nav.astro` and every section read from it, so numbering can't drift.

**`experience`** → **`activities`** → **`education`** / **`certifications`** → **`projects`** — each exported as a typed array. Drop in a new object; adding or removing items needs no component changes.

**`marqueeItems`** — the scrolling skill strip.

Project cards fall back to a generated CSS cover (`dither`, `checker`, `rings`, `grid` or `stripes`, plus `coverBg`/`coverInk`) until screenshots are supplied.

Empty strings are safe everywhere: an empty `resumeUrl` shows "Ask for my full résumé", an empty project `repo` hides the source link, and an empty `companyUrl` renders the company as plain text.

### Assets

- `public/profile.webp` — 400×400 portrait (WebP keeps it small)
- `public/mahzuz-hazman-resume.pdf` — linked from the hero and contact section
- `public/project/<project>/…webp` — project screenshots for the carousel; set them on a project via `shots` and `shotsAlt`
- `src/assets/media/` — film posters and game covers, imported in `profile.ts` and optimized by Astro

## Design notes

- **Display type:** Pixelify Sans
- **Body type:** Space Grotesk
- **Mono labels:** JetBrains Mono
- **Palette:** warm paper, ink, vermilion accent, pastel covers. Dark mode swaps the tokens in `global.css`.
- **Pixel language:** square corners, 1.5px rules, hard offset shadows, dot grids, dithered covers, stepped hover transitions.
- Fonts are self-hosted via Fontsource (Latin subsets only), so the site has no runtime dependency on Google Fonts.

## Structure

```text
src/
├─ data/profile.ts          # all site content + section list
├─ layouts/Layout.astro     # head, fonts, SEO, theme init, scripts
├─ components/              # nav, hero, each section, covers, carousel, footer
├─ pages/index.astro        # single-page assembly
├─ pages/404.astro
├─ scripts/main.ts          # menu, tabs, scroll spy, reveal, copy, clock, theme
├─ scripts/spotify.ts       # playlist URL parsing (+ spotify.test.ts)
├─ styles/global.css        # design system + responsive styles
└─ assets/media/            # poster and cover images
public/                     # portrait, résumé, project shots, favicon, robots.txt
```

## Accessibility & performance

- Semantic landmarks and heading order
- Skip link, visible focus states, keyboard-friendly menu and media tabs
- `prefers-reduced-motion` support
- Decorative visuals hidden from assistive tech
- Static HTML/CSS/JS, no client framework, small WebP photo, poster thumbnails
- Email is shown as text, not an image, and the copy button announces success

## Deploy

Push to `main` — `.github/workflows/deploy.yml` runs `astro check`, `npm test`, then builds and publishes to GitHub Pages. Works on any static host too: build command `npm run build`, output directory `dist`.

The canonical, Open Graph and JSON-LD URLs all read `site` from `astro.config.mjs` (`https://mhzhzmn.web.id`). Change it there and nowhere else.