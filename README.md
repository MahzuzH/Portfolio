# Portfolio

A single-page personal portfolio with a warm editorial layout and subtle pixel-art details. Built with Astro and Tailwind CSS, fully static.

All content lives in **`src/data/profile.ts`**: name, links, experience, education, projects, films. Section numbers, labels, titles and nav come from the `sections` object in the same file, so they cannot drift apart.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview the production build
npm test          # unit tests (node:test, no extra dependency)
npx astro check   # type check
```

## Make it yours

### 1. Content

Edit **`src/data/profile.ts`**. Empty strings are safe: an empty `resumeUrl` shows "Ask for my full résumé", an empty project `repo` hides the source link, an empty `companyUrl` shows the company as plain text.

- `profile.profileImage` — put a 400×400 image in `public/` (WebP keeps it small).
- `profile.spotifyPlaylistUrl` — any Spotify playlist or embed link.
- `profile.letterboxdUsername` and `profile.topFilms` — film cards. Use the `-0-600-0-900` Letterboxd poster size for thumbnails.

### 2. Links and SEO

- `astro.config.mjs` → `site` (your production domain; canonical, Open Graph and JSON-LD all read it)
- `src/layouts/Layout.astro` → default title/description if you want different SEO copy

### 3. Résumé (optional)

Add your PDF as `public/resume.pdf` and set `resumeUrl: "/resume.pdf"`.

### 4. Project covers

Covers are generated with CSS, no images needed. Each project accepts:

```ts
cover: "dither" | "checker" | "rings" | "grid" | "stripes";
coverBg: "#FFD8C9";
coverInk: "#15140E";
```

## Design notes

- **Display type:** Pixelify Sans
- **Body type:** Space Grotesk
- **Mono labels:** JetBrains Mono
- **Palette:** warm paper, ink, vermilion accent, pastel covers. Dark mode swaps the tokens in `global.css`.
- **Pixel language:** square corners, 1.5px rules, hard offset shadows, dot grids, dithered covers, stepped hover transitions
- Fonts are self-hosted via Fontsource (Latin subsets only), so the site has no runtime dependency on Google Fonts.

## Structure

```text
src/
├─ data/profile.ts          # all editable content + section list
├─ layouts/Layout.astro     # head, fonts, SEO, theme init, scripts
├─ components/              # nav, hero, sections, covers, footer
├─ pages/index.astro        # single-page assembly
├─ pages/404.astro
├─ scripts/main.ts          # menu, tabs, scroll spy, reveal, copy, clock, theme
├─ scripts/spotify.ts       # playlist URL parsing (+ spotify.test.ts)
└─ styles/global.css        # design system + responsive styles
```

## Accessibility & performance

- Semantic landmarks and heading order
- Skip link, visible focus states, keyboard-friendly menu and media tabs
- `prefers-reduced-motion` support
- Decorative visuals hidden from assistive tech
- Static HTML/CSS/JS, no client framework, small WebP photo, poster thumbnails
- Email is shown as text, not an image, and the copy button announces success

## Deploy

Deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main` (runs `astro check`, `npm test`, then the build). Works on any static host too: build command `npm run build`, output directory `dist`.

Set the final domain in `astro.config.mjs` before deploying so canonical and Open Graph URLs are correct.