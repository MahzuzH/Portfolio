# Mahzuz Hazman Portfolio

Personal site for Mahzuz Hazman, software engineer in Subang, Indonesia. Built with Astro 7 and Tailwind CSS 4 as a static single page. The layout uses hard borders, offset shadows, grid textures, and lime, pink, and violet accents.

Live: [mhzhzmn.web.id](https://mhzhzmn.web.id)

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 7 (static output, no client framework) |
| Styling | Tailwind CSS 4 + design tokens in `src/styles/global.css` |
| Fonts | Fontsource: Archivo Black for display, Space Mono for labels and metadata. Body copy uses the system sans stack. |
| Scripts | TypeScript, plain DOM in `src/scripts/main.ts` |
| Tests | `node:test` runner configured. No test files yet. |
| Deploy | GitHub Pages via GitHub Actions |

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview the production build
npm test          # node:test runner (currently no test files)
npx astro check   # type check
```

## Content

Everything editable lives in `src/data/profile.ts`. This is the live personal site, not a template.

- `profile`: name, role, location, contact details, profile image, résumé path, intro, summary, quote, stats, facts, skills, and social links.
- `sections`: section copy and index numbers. Current components use their own headings.
- `experience`, `activities`, `education`, `certifications`, and `projects`: typed arrays. Add or remove an object without changing a component.
- `marqueeItems`: extra skill list, currently unused by the site.

Project thumbnails are built in `ProjectThumb.astro` with CSS mockups. The `shots` field is available, but the current thumbnail component does not render screenshots.

## Assets

- `public/profile.webp`: 899×899 portrait, preloaded in `Layout.astro`.
- `public/mahzuz-hazman-resume.pdf`: linked from the hero and experience section.
- `public/project/sefya/`: screenshots, currently not referenced by a page.
- `src/assets/media/`: film posters and game covers, currently unused.
- `public/favicon.svg` and `public/robots.txt`: site icon and crawler rules.

## Design notes

- Display type: Archivo Black
- Body type: system sans stack
- Mono labels and metadata: Space Mono
- Palette: warm paper, black ink, lime, pink, and violet. The site has no dark mode.
- Surface language: 3px black borders, offset shadows, grid textures, square corners, and a pixelated portrait.
- Fonts are self-hosted via Fontsource, so the site has no runtime dependency on Google Fonts.

## Structure

```text
src/
├─ data/profile.ts          # site content and section copy
├─ layouts/Layout.astro     # head, SEO, skip link, shared scripts
├─ components/              # nav, hero, sections, thumbnails, footer
├─ pages/index.astro        # single-page assembly
├─ pages/404.astro
├─ pages/blog.astro
├─ scripts/main.ts          # menu, carousel, scroll reveal
├─ styles/global.css        # design tokens, components, responsive styles
└─ assets/media/            # unused poster and cover images
public/                     # portrait, résumé, favicon, robots.txt
```

## Accessibility and performance

- Semantic landmarks and heading order.
- Skip link, visible focus states, keyboard-friendly menu and project carousel.
- `prefers-reduced-motion` support.
- Decorative project thumbnails hidden from assistive technology.
- Static HTML/CSS/JS, no client framework, compressed WebP portrait, and a preloaded hero image.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` runs `astro check`, `npm test`, then builds and publishes to GitHub Pages. The same build works on any static host: run `npm run build` and serve `dist`.

The canonical, Open Graph, and JSON-LD URLs read `site` from `astro.config.mjs` (`https://mhzhzmn.web.id`). Change it there and nowhere else.
