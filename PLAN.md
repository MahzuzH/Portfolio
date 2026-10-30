# Portfolio Build Plan

**Concept:** A personal portfolio with a warm, editorial layout and subtle pixel-art accents — not a full retro game, just enough character to be memorable.

**Stack:** Astro 7 + Tailwind CSS 4 + self-hosted fonts  
**Format:** Single-page scroll with anchored sections, fully static, deployable anywhere

---

## 1. Goals

- Present a clear professional story in under a minute: who you are, what you do, proof of work, and how to reach you.
- Stand out through craft rather than noise: pixel typography, hard shadows, dither patterns, stepped details.
- Stay fast, accessible, responsive, and easy to maintain from a single content file.
- No stock photos or heavy animation libraries. All artwork is generated with CSS/SVG.

## 2. Art direction

**Palette**
- Warm paper `#F3EFE4`, panel `#FBF8EF`
- Ink `#15140E`, muted text `#6F6B5C`
- Vermilion accent `#FF4D1C`
- Soft pastel project covers (peach, butter, sage, sky, lavender)

**Typography**
- Display: **Pixelify Sans** — pixel character in headings, used large and sparingly
- Body: **Space Grotesk** — clean, geometric, readable
- Labels/meta: **JetBrains Mono** — uppercase, tracked out, terminal feel

**Pixel language (subtle, not costume)**
- Square corners, 1.5px ink rules, 4–8px hard offset shadows
- Dot-grid backgrounds, dither dots, checker patches
- Pixel "R" monogram and plus-shaped sparkles
- Step-like hover transitions, blinking block cursor, blinking status dot
- Fine grain overlay at ~3% opacity

**Motion:** quick, functional transitions; scroll reveals; marquee; reduced-motion support throughout.

## 3. Information architecture

1. **Sticky nav** — logo, section links, scroll progress, mobile menu
2. **Hero** — availability, name/role, headline, intro, CTAs, stats, code-window portrait
3. **Tech marquee** — scrolling skills ticker
4. **About** — bio, philosophy quote, quick facts card, toolbox
5. **Experience** — three roles in an editorial timeline
6. **Education** — degree cards + certifications
7. **Projects** — one featured project + four supporting projects with generated covers
8. **Contact** — dark CTA section, email, copy-to-clipboard, socials, local time
9. **Footer** — credits, back-to-top
10. **404** — on-brand not-found page

## 4. Interactions

- Scroll-spy nav highlighting and top progress bar
- Mobile menu with focus/escape handling and body scroll lock
- IntersectionObserver reveal animations with stagger
- Copy email button with success state and live-region announcement
- Live Jakarta clock in the contact card
- Hover states on project covers and buttons
- Motion disabled via `prefers-reduced-motion`

## 5. File map

```text
src/
├─ data/profile.ts          # single source of truth for all content
├─ layouts/Layout.astro     # head, fonts, SEO, global scripts
├─ components/
│  ├─ Nav.astro
│  ├─ LogoMark.astro
│  ├─ Hero.astro
│  ├─ CodeWindow.astro
│  ├─ Marquee.astro
│  ├─ SectionHeader.astro
│  ├─ About.astro
│  ├─ Experience.astro
│  ├─ Education.astro
│  ├─ Projects.astro
│  ├─ ProjectCover.astro
│  ├─ Contact.astro
│  └─ Footer.astro
├─ pages/index.astro
├─ pages/404.astro
├─ styles/global.css
└─ scripts/main.ts
```

## 6. Milestones

- [x] Direction, content model, and visual system
- [x] Scaffold Astro + Tailwind and self-hosted fonts
- [x] Build global tokens, typography, pixel utilities
- [x] Build nav, hero, and code-window visual
- [x] Build about, experience, education, projects, contact, footer
- [x] Add interactions and accessibility pass
- [x] Build, test, and document customization

## 7. Acceptance criteria

- Sticky nav + smooth anchor navigation works on desktop and mobile
- All six requested sections present and responsive at 360px, 768px, 1280px
- Content fully editable from `src/data/profile.ts`
- Keyboard navigable, visible focus states, semantic headings, reduced motion respected
- Production build passes with no errors
- Placeholder links clearly marked for replacement

## 8. After handoff

- Replace persona, bio, links, and project data in `src/data/profile.ts`
- Add a real `resume.pdf` in `public/` and point `profile.resumeUrl` at it
- Swap placeholder social URLs and email
- Optional: custom domain, OG image, analytics, real screenshots for project covers
- Deploy to Vercel, Netlify, or Cloudflare Pages
