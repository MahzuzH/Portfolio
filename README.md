# Pixel Portfolio

A single-page personal portfolio with a warm editorial layout and subtle pixel-art details. Built with Astro and Tailwind CSS, fully static, no image assets.

The current content is a **placeholder persona** ("Raka Adhitama"). Everything is stored in one file so you can swap in your own details quickly.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview the production build
```

## Make it yours

### 1. Content

Edit **`src/data/profile.ts`**. It controls:

- Name, role, location, email, availability
- Hero headline, intro, stats, quick facts
- Skills, social links, marquee items
- Work experience, education, certifications
- Projects, URLs, cover colours and cover patterns

Search for `PLACEHOLDER` in that file to find every link that needs replacing.

### 2. Links and SEO

- `src/data/profile.ts` → email, social URLs, project URLs
- `astro.config.mjs` → `site` (your production domain)
- `public/robots.txt` → sitemap URL once you have a domain
- `src/layouts/Layout.astro` → default title/description if you want different SEO copy

### 3. Résumé (optional)

The Experience section shows "Ask for my full résumé" while `profile.resumeUrl` is empty.

To enable the download button:

1. Add your PDF as `public/resume.pdf`
2. Set `resumeUrl: "/resume.pdf"` in `src/data/profile.ts`

### 4. Project covers

Covers are generated entirely with CSS — no images needed. Each project in `src/data/profile.ts` accepts:

```ts
cover: "dither" | "checker" | "rings" | "grid" | "stripes";
coverBg: "#FFD8C9";
coverInk: "#15140E";
```

Swap the two colours to recolour a cover. Use the `mark` field for the short project monogram.

## Design notes

- **Display type:** Pixelify Sans
- **Body type:** Space Grotesk
- **Mono labels:** JetBrains Mono
- **Palette:** warm paper, ink, vermilion accent, pastel covers
- **Pixel language:** square corners, 1.5px rules, hard offset shadows, dot grids, dithered covers, stepped hover transitions
- Fonts are self-hosted via Fontsource, so the site has no runtime dependency on Google Fonts.

## Structure

```text
src/
├─ data/profile.ts          # all editable content
├─ layouts/Layout.astro     # head, fonts, SEO, scripts
├─ components/              # nav, hero, sections, covers, footer
├─ pages/index.astro        # single-page assembly
├─ pages/404.astro
├─ scripts/main.ts          # menu, scroll spy, reveal, copy, clock
└─ styles/global.css        # design system + responsive styles
```

## Accessibility & performance

- Semantic landmarks and heading order
- Skip link, visible focus states, keyboard-friendly menu
- `prefers-reduced-motion` support
- Decorative visuals hidden from assistive tech
- Static HTML/CSS/JS, no client framework, no external images
- Email is shown as text, not an image, and the copy button announces success

## Deploy

Works on any static host.

**Vercel / Netlify / Cloudflare Pages**

- Build command: `npm run build`
- Output directory: `dist`

Set the final domain in `astro.config.mjs` before deploying so canonical and Open Graph URLs are correct.

## Possible next steps

- Add a real OG image (1200×630) and reference it in `Layout.astro`
- Add project screenshots inside the CSS covers if you want more realism
- Add a sitemap integration (`@astrojs/sitemap`)
- Add a small analytics script if desired
- Replace the generic favicon with a custom monogram if you change the name
