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
  location: "Subang, Indonesia",
  timezone: "Asia/Jakarta",
  timezoneShort: "WIB",
  email: "mhzhzmn@gmail.com",
  phone: "+6281322670257",
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
    "I'm a software developer from Subang. I build web applications with PHP, JavaScript and MySQL, and I like turning messy manual processes into tools that are simple to use.",

  summary: [
    "I'm an enthusiastic full stack developer with hands-on experience across several different fields: educational technology, internal corporate applications, and the health sector. I'm an informatics graduate from ITENAS Bandung, and I've worked on everything from a company ERP and its production QR tracking and HR payroll modules, to an internal link management platform built during Kerja Praktik at BPJS Kesehatan, to two years teaching multimedia and object-oriented programming in campus labs.",
    "What I enjoy most is adapting to whatever the system actually needs. Some work is all database schemas and back-end APIs with Laravel and MySQL; other work is a clean, readable interface in React and Tailwind. I'm very eager to keep learning and to stay up to date with new technologies, and I'd rather understand a problem properly than reach for the newest tool.",
  ],

  quote: "Good interfaces feel obvious. Getting there is anything but.",

  /** Rendered as a card under Education, next to the degree. */
  achievements: {
    items: [
      "Architected and deployed a QR code tracking module now used in daily manufacturing operations.",
      "Built an HRD module replacing manual attendance and payroll workflows.",
      "Delivered an internal link management platform during Kerja Praktik at BPJS Kesehatan Subang.",
      "Led logistics for HMIF's Pengabdian Pada Masyarakat program in Pangalengan, Bandung.",
    ],
  },

  resumeUrl: "/mahzuz-hazman-resume.pdf",

  stats: [
    { value: "4", label: "internships & lab roles" },
    { value: "2", label: "internal systems built (QR tracking, HR)" },
    { value: "3.68", label: "GPA at ITENAS Bandung" },
  ],

  facts: [
    {
      label: "Currently",
      value: "IT Intern at PT. Shimada Karya Indonesia, Sumedang",
    },
    {
      label: "Focus",
      value: "Web apps, back-end APIs, database design",
    },
    {
      label: "Languages",
      value: "Bahasa Indonesia (native), English (intermediate)",
    },
    {
      label: "Off the clock",
      value: "Music, coffee, and the occasional game of JRPG",
    },
  ],

  skillGroups: [
    {
      label: "Languages",
      items: ["PHP", "JavaScript", "Python", "SQL", "HTML / CSS"],
    },
    {
      label: "Web & backend",
      items: ["Laravel", "React.js", "Tailwind CSS", "Supabase"],
    },
    {
      label: "Database & tools",
      items: ["MySQL", "Git", "GitHub", "Visual Studio Code", "Microsoft Excel"],
    },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/MahzuzH" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mahzuz-hazman" },
  ],
};

/** Ordered nav + section numbering. `Nav.astro` and each section read this, so numbers cannot drift. */
export const sections = {
  about: {
    index: "01",
    label: "About",
    title: "I build web tools that replace manual work.",
    lede: "Internal apps for factories and offices — mostly back end and data, with simple interfaces so non-technical staff can use them without training.",
  },
  experience: {
    index: "02",
    label: "Experience",
    title: "Where I've been.",
    lede: "Two manufacturing IT roles, two campus lab roles, and four years in the informatics student association.",
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
    title: "What I'm into",
    lede: "A playlist on repeat, and four films I keep coming back to.",
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
  "PHP",
  "Laravel",
  "MySQL",
  "React.js",
  "JavaScript",
  "Python",
  "Tailwind CSS",
  "Supabase",
  "Git",
  "REST APIs",
  "Web apps",
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
    period: "Mar 2026 — Present",
    role: "IT Intern",
    company: "PT. Shimada Karya Indonesia",
    companyUrl: "",
    location: "Sumedang · On-site",
    current: true,
    summary:
      "Part of the ERP development team, shipping modules that replace manual manufacturing and HR workflows.",
    bullets: [
      "Architected and deployed an end-to-end QR code tracking module with Laravel and MySQL, digitizing production workflows and improving item traceability across manufacturing stages.",
      "Built a new HRD module covering employee attendance through payroll processing, replacing manual workflows with an integrated, automated system.",
      "Designed MySQL schemas, managed migrations, and optimized SQL queries for high-volume QR scans, attendance records and ERP logs.",
      "Translated business requirements from production and HRD leads into backend APIs and responsive interfaces.",
      "Supported IT infrastructure: LAN cabling, IP configuration, device provisioning and server migrations.",
    ],
    tags: ["Laravel", "MySQL", "PHP"],
  },
  {
    period: "Sep 2023 — Feb 2024",
    role: "Multimedia Engineering Laboratory Assistant",
    company: "Institut Teknologi Nasional Bandung",
    companyUrl: "",
    location: "Bandung · On-campus",
    summary:
      "Taught multimedia production to a class of 42 alongside three other assistants.",
    bullets: [
      "Delivered lab modules on Adobe Animate, Premiere Pro and Blender.",
      "Guided students through an interactive Adobe Animate project and a 3-minute video with Premiere Pro and Blender 3D objects.",
      "Oversaw project reports covering flowcharts, storyboards and production documentation.",
    ],
    tags: ["Adobe Animate", "Premiere Pro", "Blender"],
  },
  {
    period: "Jul 2023 — Sep 2023",
    role: "Web Developer Intern",
    company: "BPJS Kesehatan Kab. Subang",
    companyUrl: "",
    location: "Subang · On-site",
    summary:
      "Built an internal link management platform during a mandatory Kerja Praktik program.",
    bullets: [
      "Designed and developed a link management platform so staff no longer share resources manually.",
      "Built the responsive interface with React.js and Tailwind CSS for non-technical office staff.",
      "Implemented backend services in Supabase: database design, authentication and data management.",
      "Covered the full cycle from requirement gathering with office staff through deployment.",
    ],
    tags: ["React.js", "Tailwind CSS", "Supabase"],
  },
  {
    period: "Feb 2023 — Jun 2023",
    role: "Object Oriented Programming Laboratory Assistant",
    company: "Institut Teknologi Nasional Bandung",
    companyUrl: "",
    location: "Bandung · On-campus",
    summary:
      "Taught OOP in Java with NetBeans to a class of over 40 students alongside three other assistants.",
    bullets: [
      "Covered classes, objects, encapsulation, inheritance and the rest of the OOP fundamentals.",
      "Ran practical exercises in Java using NetBeans.",
      "Gave individualized attention and feedback so every student could keep up.",
    ],
    tags: ["Java", "NetBeans", "OOP"],
  },
];

export const activities = [
  {
    period: "Sep 2020 — Sep 2024",
    role: "Head of Rumah Tangga Himpunan",
    org: "Himpunan Mahasiswa Informatika",
    bullets: [
      "Led the team managing internal household operations and task execution.",
      "Planned and ran operations and logistics for events and internal activities.",
    ],
  },
  {
    period: "2020 — 2024",
    role: "Staff",
    org: "Himpunan Mahasiswa Informatika (HMIF Itenas)",
    bullets: [
      "Ran various work programs for HMIF Itenas.",
      "Head of Logistics for Pengabdian Pada Masyarakat (P2M) in Kp. Pasir Junghuhn, Pangalengan, Bandung.",
    ],
  },
];

export const education = [
  {
    period: "2020 — 2024",
    degree: "Bachelor of Informatics",
    school: "Institut Teknologi Nasional Bandung",
    note: "GPA 3.68 / 4.00",
    detail: "Focused on software engineering, databases and web systems.",
    tags: ["Informatics"],
  },
];

/** From LinkedIn. `url` is the public certificate link; Expires is only shown when the issuer sets one. */
export const certifications = [
  {
    year: "2023",
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    url: "https://kaggle.com/learn/certification/mahzuzh/intro-to-machine-learning",
  },
  {
    year: "2023",
    name: "Mini Course Intro to Data Analytics",
    issuer: "RevoU",
    url: "https://certificates.revou.co/mahzuz-hazman-certificate-completion-damc23.pdf",
  },
  {
    year: "2023",
    name: "Python for Data Science, AI & Development",
    issuer: "Coursera",
    url: "https://coursera.org/account/accomplishments/certificate/RU8S49JSTQWY",
  },
  {
    year: "2023",
    name: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    url: "https://dicoding.com/certificates/RVZKO0QN4PD5",
    expires: "Jul 2026",
  },
  {
    year: "2023",
    name: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    url: "https://dicoding.com/certificates/6RPNWOGEQP2M",
    expires: "Jul 2026",
  },
  {
    year: "2023",
    name: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    url: "https://dicoding.com/certificates/JLX1DK36JZ72",
    expires: "Jul 2026",
  },
  {
    year: "2023",
    name: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    url: "https://dicoding.com/certificates/2VX3JV274PYQ",
    expires: "Jul 2026",
  },
  {
    year: "2023",
    name: "Belajar Dasar-Dasar DevOps",
    issuer: "Dicoding Indonesia",
    url: "https://dicoding.com/certificates/2VX3JVYOQPYQ",
    expires: "Jul 2026",
  },
  {
    year: "2023",
    name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    url: "https://dicoding.com/certificates/JMZV9L21OPN9",
    expires: "Jul 2026",
  },
  {
    year: "2023",
    name: "Google Analytics Certification",
    issuer: "Google Digital Academy (Skillshop)",
    url: "https://skillshop.credential.net/0b4c0d26-3aaa-4fda-8be2-303fef4df911",
  },
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
    title: "Sefya Dental Studio",
    mark: "SD",
    label: "Clinic website",
    year: "2026",
    tagline: "A dental clinic site with a QR-based patient report system.",
    description:
      "A landing page for a dental clinic in Subang, plus an admin dashboard where doctors record diagnoses and share reports with patients via QR code. Built full-stack and self-hosted on a VPS.",
    tags: ["React", "Go", "MySQL", "Nginx"],
    href: "https://sefyadentalstudio.web.id/",
    repo: "https://github.com/MahzuzH/sefya-dental-studio",
    featured: true,
    cover: "dither",
    coverBg: "#D6EEF2",
    coverInk: "#15140E",
    badge: "Full-stack · Live",
  },
  {
    title: "BPJS Link Hub",
    mark: "BP",
    label: "Link management",
    year: "2023", // sesuaikan
    tagline: "A link management platform that makes BPJS services easier to reach.",
    description:
      "A web platform that organizes BPJS-related links and services in one place, so users can find what they need without hunting through multiple sites. Built with React and Tailwind CSS, deployed on Vercel.",
    tags: ["React", "Tailwind CSS", "Supabase", "Vercel"],
    href: "https://bpjs-v2.vercel.app",
    repo: "https://github.com/MahzuzH/bpjs_v2",
    featured: false,
    cover: "dither",
    coverBg: "#E6F0D9",
    coverInk: "#15140E",
    badge: "Web app · Live",
  },
  {
    title: "SKM Puskesmas Pagaden",
    mark: "SK",
    label: "Laravel app",
    year: "2023", // sesuaikan
    tagline: "A service quality survey website for community health centers.",
    description:
      "A Laravel web app for collecting and managing public service quality surveys at a puskesmas. Built as a coursework project in Applied Informatics.",
    tags: ["Laravel", "PHP", "MySQL", "Vite"],
    href: "#",
    repo: "https://github.com/MahzuzH/skm_puskesmas",
    featured: false,
    cover: "dither",
    coverBg: "#F6EBC8",
    coverInk: "#15140E",
    badge: "Coursework · Laravel",
  },
];
