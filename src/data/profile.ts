/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Replace the placeholder persona, links, and copy with your own.
 *  Search for "PLACEHOLDER" to find anything that must be swapped.
 * ─────────────────────────────────────────────────────────────
 */

export type TopFilm = {
  title: string;
  year: string;
  rating?: string;
  poster?: string;
  link: string;
};

export const profile = {
  name: "Mahzuz Hazman",
  firstName: "Mahzuz",
  role: "Software Engineer",
  location: "Bandung, Indonesia",
  timezone: "Asia/Jakarta",
  timezoneShort: "WIB",
  email: "mhzhzmn@gmail.com", // PLACEHOLDER
  siteUrl: "https://mhzhzmn.github.io", // PLACEHOLDER
  profileImage: "/profile.png", // ganti dengan foto profilmu di public/profile.png
  profileImageAlt: "Foto profil Mahzuz Hazman",
  spotifyPlaylistUrl: "https://open.spotify.com/playlist/2vYTGA9oKjuxxxzBxCgOHT?si=8f5298a34e6e45e5", // PLACEHOLDER: isi dengan link playlist/album Spotify, contoh https://open.spotify.com/playlist/xxx
  letterboxdUsername: "ncjuicer", // PLACEHOLDER: isi dengan username Letterboxd kamu

  topFilms: [
    {
      title: "Good Will Hunting",
      year: "1997",
      rating: "★★★★★",
      poster: "https://a.ltrbxd.com/resized/film-poster/5/1/6/2/1/51621-good-will-hunting-0-600-0-900-crop.jpg?v=acb4766abd",
      link: "https://letterboxd.com/film/good-will-hunting/",
    },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year: "2004",
      rating: "★★★★★",
      poster: "https://a.ltrbxd.com/resized/sm/upload/ay/bp/kl/1y/uBfQ7IGpi0jXSP3GPCzp9Pzm10v-0-600-0-900-crop.jpg?v=116621c401",
      link: "https://letterboxd.com/film/eternal-sunshine-of-the-spotless-mind/",
    },
    {
      title: "Dune: Part Two",
      year: "2024",
      rating: "★★★★★",
      poster: "https://a.ltrbxd.com/resized/film-poster/6/1/7/4/4/3/617443-dune-part-two-0-1000-0-1500-crop.jpg?v=cc533700f8",
      link: "https://letterboxd.com/film/dune-part-two/",
    },
    {
      title: "Whiplash",
      year: "2014",
      rating: "★★★★★",
      poster: "https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-1000-0-1500-crop.jpg?v=d13ea36528",
      link: "https://letterboxd.com/film/whiplash-2014/",
    },
  ] satisfies TopFilm[],

  availability: "Open to new work",
  availabilityNote: "Freelance & full-time · 2 slots",
  headlineTop: "Mahzuz",
  headlineAccent: "Hazman",

  intro:
    "I'm a software engineer in Bandung building fast, accessible interfaces that don't take themselves too seriously. Currently focused on design systems and the small details people feel but never notice.",

  summary: [
    "I sit in the space between engineering and design — close enough to the code to care about bundle sizes, close enough to the canvas to care about the last four pixels. For the past six years I've helped product teams turn fuzzy ideas into interfaces that feel obvious.",
    "These days I lead frontend at a small product studio, maintain a design system used by four squads, and spend my evenings making pixel art and questionable side projects.",
  ],

  quote: "Good interfaces feel obvious. Getting there is anything but.",

  resumeUrl: "", // Optional: add /resume.pdf to public/ and set this to "/resume.pdf"

  stats: [
    { value: "6+", label: "years shipping for the web" },
    { value: "30+", label: "products & experiments launched" },
    { value: "4", label: "design systems kept alive" },
  ],

  facts: [
    {
      label: "Currently",
      value: "IT Intern at PT. Shimada Karya Indonesia, Sumedang",
    },
    {
      label: "Focus",
      value: "Design systems, accessibility, interface motion",
    },
    {
      label: "Learning",
      value: "Golang, REST APIs, and Next.js",
    },
    {
      label: "Off the clock",
      value: "Music, coffee, and the occasional game of JRPG",
    },
  ],

  skillGroups: [
    {
      label: "Languages",
      items: ["PHP", "Python", "JavaScript", "HTML / CSS", "SQL", "Go (learning)"],
    },
    {
      label: "Frameworks",
      items: ["Laravel", "Astro", "React", "Next.js", "Tailwind CSS"],
    },
    {
      label: "Tooling",
      items: ["Vite", "Storybook", "Figma", "Git", "Playwright"],
    },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/MahzuzH" }, // PLACEHOLDER
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mahzuz-hazman" }, // PLACEHOLDER
  ],
};

export const marqueeItems = [
  "TypeScript",
  "Astro",
  "React",
  "Design systems",
  "Accessibility",
  "Interface motion",
  "Tailwind CSS",
  "Figma",
  "Node.js",
  "Pixel-perfect",
  "Good coffee",
];

export type Job = {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    period: "2026, March — Present",
    role: "IT Intern",
    company: "PT. Shimada Karya Indonesia",
    companyUrl: "https://example.com", // PLACEHOLDER
    location: "Sumedang · On-site",
    current: true,
    summary:
      "Leading frontend craft and the design system behind four product teams.",
    bullets: [
      "Rebuilt the design system with a three-person team; adoption grew from 20% to 85% of product surfaces.",
      "Cut median LCP by 38% by replacing render-blocking bundles and introducing performance budgets.",
      "Mentored three engineers and started a weekly UI review that shipped 40+ polished components.",
    ],
    tags: ["Laravel"],
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    company: "Bumi Digital",
    companyUrl: "https://example.com", // PLACEHOLDER
    location: "Jakarta",
    summary:
      "Built data-heavy dashboards for a fintech platform used by 2,000+ analysts.",
    bullets: [
      "Shipped a real-time analytics dashboard that became the second most-used surface in the product.",
      "Led a migration from Create React App to Vite, taking cold builds from six minutes to under forty seconds.",
      "Drove an accessibility pass across core flows, bringing key screens to WCAG 2.1 AA.",
    ],
    tags: ["Vue", "TypeScript", "Tailwind CSS", "Vitest"],
  },
  {
    period: "2019 — 2021",
    role: "UI Engineer",
    company: "Kecil Studio",
    companyUrl: "https://example.com", // PLACEHOLDER
    location: "Bandung · Hybrid",
    summary:
      "Shipped marketing sites and product interfaces for a dozen early-stage clients.",
    bullets: [
      "Designed and built 12+ responsive sites, often solo from Figma file to production deploy.",
      "Created a reusable CMS template system that cut new site setup from two weeks to three days.",
      "Introduced the studio's first shared component library and visual QA checklist.",
    ],
    tags: ["JavaScript", "SCSS", "Webflow", "GSAP"],
  },
];

export const education = [
  {
    period: "2020-2026",
    degree: "Bachelor of Informatics",
    school: "Institut Teknologi Nasional Bandung",
    note: "GPA 3.68 / 4.00",
    detail:
      "Thesis on reducing cognitive load in dashboard navigation. Focused on human–computer interaction and web systems.",
    tags: ["HCI", "Data structures", "Web systems"],
  },
  {
    period: "2017 — 2020",
    degree: "High School Diploma",
    school: "SMAN 1 Subang",
    note: "IPA (Science) track",
    detail:
      "Became the head of website at Brainware of Smansa (BIOS), teaching peers about web design and development",
    tags: ["Website", "Web Development"],
  },
];

export const certifications = [
  { year: "2024", name: "Web Accessibility", issuer: "Google" },
  { year: "2022", name: "Advanced React", issuer: "Frontend Masters" },
  { year: "2021", name: "Design Systems", issuer: "Interaction Design Foundation" },
];

export type CoverStyle = "dither" | "checker" | "rings" | "grid" | "stripes";

export type Project = {
  title: string;
  mark: string;
  label: string;
  year: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  repo: string;
  featured?: boolean;
  cover: CoverStyle;
  coverBg: string;
  coverInk: string;
  badge: string;
};

export const projects: Project[] = [
  {
    title: "Pixelsmith",
    mark: "PX",
    label: "Pixel editor",
    year: "2025",
    tagline: "A pixel-art editor that fits in a browser tab.",
    description:
      "A keyboard-first canvas editor with layers, palettes, and export to PNG or spritesheet. Built to learn the Canvas API and shipped to 1.2k GitHub stars.",
    tags: ["TypeScript", "Canvas", "Vite"],
    href: "https://example.com/pixelsmith", // PLACEHOLDER
    repo: "https://github.com/your-handle/pixelsmith", // PLACEHOLDER
    featured: true,
    cover: "dither",
    coverBg: "#FFD8C9",
    coverInk: "#15140E",
    badge: "Open source · 1.2k ★",
  },
  {
    title: "Warung",
    mark: "WR",
    label: "POS system",
    year: "2024",
    tagline: "Point-of-sale for small coffee shops.",
    description:
      "Offline-first POS with inventory, receipts, and daily reports. Designed for a 10-inch tablet and one very busy barista.",
    tags: ["Astro", "Supabase", "Tailwind"],
    href: "https://example.com/warung", // PLACEHOLDER
    repo: "https://github.com/your-handle/warung", // PLACEHOLDER
    cover: "checker",
    coverBg: "#F5E9B8",
    coverInk: "#15140E",
    badge: "Client work · 3 cafés",
  },
  {
    title: "Tide",
    mark: "TD",
    label: "Focus timer",
    year: "2024",
    tagline: "A focus timer with generative soundscapes.",
    description:
      "A tiny Pomodoro app that composes ambient loops as you work. No accounts, no streaks, no guilt.",
    tags: ["React", "Web Audio", "Zustand"],
    href: "https://example.com/tide", // PLACEHOLDER
    repo: "https://github.com/your-handle/tide", // PLACEHOLDER
    cover: "rings",
    coverBg: "#D8E8C8",
    coverInk: "#15140E",
    badge: "Side project",
  },
  {
    title: "Atlas API",
    mark: "AT",
    label: "API directory",
    year: "2023",
    tagline: "A directory of Indonesian public APIs.",
    description:
      "Searchable, community-maintained index of 120+ public APIs with docs, status, and examples.",
    tags: ["Next.js", "MDX", "Vercel"],
    href: "https://example.com/atlas", // PLACEHOLDER
    repo: "https://github.com/your-handle/atlas", // PLACEHOLDER
    cover: "grid",
    coverBg: "#C9DEEC",
    coverInk: "#15140E",
    badge: "Community · 120+ APIs",
  },
  {
    title: "Portfolio v3",
    mark: "V3",
    label: "Personal site",
    year: "2026",
    tagline: "This very site, down to the last pixel.",
    description:
      "A static portfolio built with Astro and Tailwind. Custom pixel type system, CSS-only covers, and no image assets.",
    tags: ["Astro", "Tailwind", "TypeScript"],
    href: "#top",
    repo: "https://github.com/your-handle/portfolio", // PLACEHOLDER
    cover: "stripes",
    coverBg: "#DDD2F0",
    coverInk: "#15140E",
    badge: "You are here",
  },
];
