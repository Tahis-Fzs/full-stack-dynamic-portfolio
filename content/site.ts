import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Md. Shadman Tahsin",
  shortName: "Shadman Tahsin",
  title: "Studio Tahsin",
  tagline:
    "Full-stack products & applied ML — from Dhaka transport to digital wallets.",
  positioning:
    "Computer Science & Engineering graduate building full-stack systems, mobile apps, and applied machine learning with documented trade-offs.",
  thinkingHook:
    "Your portfolio sells thinking, not screenshots. Every project here follows Problem → Approach → Impact.",
  designSystem: {
    name: "Signal Void",
    tagline: "Deep midnight void · PayLite signal · cyan patina · Instrument Serif",
  },
  hero: {
    role: "Software Developer · CSE graduate · Dhaka",
    headline:
      "Transit apps. Banking ledgers. Clinical models. Live demos.",
    support:
      "I build PayLite X, StudentMove, and multimodal ML systems — with field notes that document trade-offs, not just screenshots.",
    stats: [
      { value: "11", label: "Projects documented" },
      { value: "2", label: "Live demos shipped" },
      { value: "DIU", label: "CSE · thesis defended" },
      { value: "5+", label: "Team builds" },
    ],
  },
  location: "Dhaka, Bangladesh",
  openTo: "Full-time · Entry to mid-level software engineering",
  email: "md.shadmantahsinfzs@gmail.com",
  phone: "01764819519",
  github: "Tahis-Fzs",
  githubUrl: "https://github.com/Tahis-Fzs",
  linkedin: "md-shadman-tahsin-676a862b4",
  linkedinUrl: "https://linkedin.com/in/md-shadman-tahsin-676a862b4",
  cvPath: "/cv/Md_Shadman_Tahsin_CV.pdf",
  profileImage: "/profile.jpg",
  education: {
    degree: "B.Sc. Computer Science & Engineering",
    institution: "Daffodil International University (DIU)",
    result: "CGPA 3.35 / 4.00",
    status: "Thesis defended · Certificate awaiting July 2026",
    year: "2026",
  },
  skillGroups: [
    {
      title: "Programming & Development",
      items: [
        "Python, C/C++, PHP, Dart, JavaScript, TypeScript",
        "Flutter · Firebase (Auth, Firestore, Functions)",
        "PHP/MySQL · REST APIs · Full-stack modules",
      ],
    },
    {
      title: "Tools & Workflow",
      items: [
        "Git & GitHub",
        "Jupyter / Colab",
        "Docker · CI · Cloud deploy (Render, Vercel)",
      ],
    },
    {
      title: "Data, AI & Security",
      items: [
        "Deep learning (CNN, EfficientNet, MobileNet)",
        "Multimodal ML · Calibration · SHAP explainability",
        "Intrusion & insider-threat detection pipelines",
      ],
    },
    {
      title: "Professional",
      items: [
        "Object-oriented design · Debugging",
        "Team collaboration · Technical communication",
      ],
    },
  ],
  timeline: [
    {
      year: "2026",
      title: "PayLite X shipped",
      org: "Solo flagship",
      detail:
        "Premium MFS wallet simulation — FastAPI ledger, React/Three.js UI, live on Render.",
    },
    {
      year: "2025",
      title: "StudentMove deployed",
      org: "5-member team",
      detail:
        "Smart transport PWA for Dhaka students — Laravel, Firebase GPS, SSLCommerz.",
    },
    {
      year: "2025",
      title: "Thesis & ML research",
      org: "DIU CSE",
      detail:
        "Multimodal CKD framework, retinal OCT classification, CICIDS2017 intrusion pipelines.",
    },
    {
      year: "2023–2025",
      title: "DIU CPC competitions",
      org: "DIU Computer & Programming Club",
      detail: "Prompt Battle · Unlock the Algorithm · Take Off Contest.",
    },
  ],
  contests: [
    "Prompt Battle — Prompt Engineering (DIU CPC, 2025)",
    "Unlock the Algorithm (DIU CPC, 2024)",
    "Take Off Contest (DIU CPC, 2023)",
  ],
  training: [
    "Introduction to Information Security — Great Learning (2025)",
    "Basic Etiquette for Better Personality — GoEdu (2025)",
  ],
  seo: {
    title: "Md. Shadman Tahsin — Studio Tahsin | Full-Stack & Applied ML",
    description:
      "Portfolio of Md. Shadman Tahsin — PayLite X fintech demo, StudentMove transport platform, multimodal ML research. Problem-driven case studies with live demos.",
    ogImage: "/og/studio-tahsin.png",
  },
};

export const exploreModeStorageKey = "studio-tahsin-mode";
