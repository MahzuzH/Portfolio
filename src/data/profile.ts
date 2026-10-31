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
  role: "Software Engineer",
  location: "Bandung, Indonesia",
  timezone: "Asia/Jakarta",
  timezoneShort: "WIB",
  email: "mhzhzmn@gmail.com",
  profileImage: "/profile.webp",
  profileImageAlt: "Foto profil Mahzuz Hazman",
  spotifyPlaylistUrl: "https://open.spotify.com/playlist/2vYTGA9oKjuxxxzBxCgOHT?si=8f5298a34e6e45e5",
  letterboxdUsername: "ncjuicer",

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
      poster: "https://a.ltrbxd.com/resized/film-poster/6/1/7/4/4/3/617443-dune-part-two-0-600-0-900-crop.jpg?v=cc533700f8",
      link: "https://letterboxd.com/film/dune-part-two/",
    },
    {
      title: "Whiplash",
      year: "2014",
      rating: "★★★★★",
      poster: "https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-600-0-900-crop.jpg?v=d13ea36528",
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
    "I sit in the space between engineering and design — close enough to the code to care about bundle sizes, close enough to the canvas to care about the last four pixels. I like turning fuzzy ideas into interfaces that feel obvious.",
    "I'm currently an IT intern at PT. Shimada Karya Indonesia, learning Go, REST APIs and Next.js, and spending my evenings on pixel art and questionable side projects.",
  ],

  quote: "Good interfaces feel obvious. Getting there is anything but.",

  resumeUrl: "", // Optional: add /resume.pdf to public/ and set this to "/resume.pdf"

  stats: [
    { value: "2026", label: "IT intern at PT. Shimada Karya Indonesia" },
    { value: "3.68", label: "GPA at ITENAS Bandung" },
    { value: "10+", label: "side projects built and broken" },
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

/** Ordered nav + section numbering. `Nav.astro` and each section read this, so numbers cannot drift. */
export const sections = {
  about: {
    index: "01",
    label: "About",
    title: "A developer who sweats the last four pixels.",
    lede: "Part engineer, part design nerd. I care about how interfaces work, how they feel, and how quickly they get out of the way.",
  },
  experience: {
    index: "02",
    label: "Experience",
    title: "Where I've been.",
    lede: "Internship and coursework so far — following the work from a fuzzy brief to a shipped interface.",
  },
  education: {
    index: "03",
    label: "Education",
    title: "Always still learning.",
    lede: "A formal foundation in computer science, plus a design education I keep adding to — one course and side quest at a time.",
  },
  projects: {
    index: "04",
    label: "Projects",
    title: "Selected work.",
    lede: "A few things I've built recently — some for clients, some for the joy of making a small idea real.",
  },
  media: {
    index: "05",
    label: "Media",
    title: "Now Playing & Favorites",
    lede: "Musik yang lagi diputar dan empat film yang paling saya suka.",
  },
  contact: {
    index: "06",
    label: "Contact",
    title: "Let's make something worth clicking.",
    lede: "I'm open to freelance projects and select full-time roles. If you've got a tricky interface or a strange idea, the inbox is open.",
  },
};

export const githubUrl =
  profile.socials.find((social) => social.label === "GitHub")?.href ?? "#";

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
    companyUrl: "",
    location: "Sumedang · On-site",
    current: true,
    summary: "IT intern working on internal web tooling.",
    bullets: [
      "Write PHP/Laravel features for internal web systems.",
      "Handle day-to-day data entry and reporting tasks.",
    ],
    tags: ["Laravel"],
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
    href: "#",
    repo: "",
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
    href: "#",
    repo: "",
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
    href: "#",
    repo: "",
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
    href: "#",
    repo: "",
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
    repo: "https://github.com/MahzuzH/Portfolio",
    cover: "stripes",
    coverBg: "#DDD2F0",
    coverInk: "#15140E",
    badge: "You are here",
  },
];
