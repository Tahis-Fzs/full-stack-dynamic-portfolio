import type { Project, ProjectCategory } from "./types";

export const projects: Project[] = [
  // ─── Tier 1 — Launch case studies ───────────────────────────────────────
  {
    slug: "paylite-x",
    title: "PayLite X",
    tagline: "Premium MFS wallet simulation — ledger, OTP+PIN, 12 fused services",
    hook:
      "Pretty transfer screens are cheap. A ledger you can defend is not.",
    tier: 1,
    category: "fullstack",
    featured: true,
    launchCaseStudy: true,
    role: "Solo — product, API, web UI, deploy",
    year: "2026",
    problem:
      "Bangladesh MFS apps each nail one flow, but portfolio clones copy UI only — no real ledger, no OTP/PIN security story, no fee transparency, no spend limits. Recruiters cannot tell if you understand payments or just CSS.",
    approach:
      "Built a full-stack wallet simulation: FastAPI + SQLAlchemy ledger in paisa-accurate integers, JWT auth with OTP and PIN flows, and a React/Three.js/anime.js premium web client. Fused 12 MFS-inspired services (P2P, cash-in/out, bills, remit, QR, savings, merchant pay) into one coherent product narrative with Wise-style fee preview and SSE live balance updates.",
    whyStack: [
      "FastAPI — fast iteration, clear domain logic, OpenAPI docs for API story",
      "SQLite ledger — zero-cost demo deploy; paisa integers avoid float money bugs",
      "React + Three.js — product-grade UI that recruiters open first; matches fintech expectations",
      "Separate web/API — real CORS, auth, and ledger integrity talking points in interviews",
      "Docker + Render + GitHub Actions — not localhost-only; proves deploy discipline",
    ],
    challenges: [
      "Fee preview without hidden charges — transparent breakdown before confirm, not post-hoc surprise",
      "Daily and per-transaction limits — close the unlimited-drain weakness of naive demos",
      "OTP flow without real SMS in dev — simulated demo_otp while keeping production-shaped API contract",
      "Dual BDT/USD display — honest FX approximation, not fake real-time rates",
      "Private activity feed by default — learned from public-feed privacy risks in social payment apps",
    ],
    impact:
      "Live at paylite-web.onrender.com with API at paylite-api.onrender.com. Demo login ships seeded users. Answers the interview question: can you build fintech-shaped systems, not landing pages?",
    productionNotes: [
      "PostgreSQL + read replicas for ledger; Redis for OTP TTL and rate limiting",
      "HSM or vault-backed PIN hashing; PCI-adjacent audit logs on every balance mutation",
      "Idempotent transaction IDs; saga pattern for cross-service transfers",
      "Horizontal API scaling behind load balancer; SSE via dedicated pub/sub",
    ],
    stack: [
      "React",
      "TypeScript",
      "Three.js",
      "anime.js",
      "FastAPI",
      "SQLAlchemy",
      "JWT",
      "SSE",
      "Docker",
      "Render",
    ],
    liveUrl: "https://paylite-web.onrender.com",
    githubUrl: "https://github.com/Tahis-Fzs/paylite-x",
    images: ["/projects/paylite-x/hero.webp"],
  },
  {
    slug: "studentmove",
    title: "StudentMove",
    tagline: "Smart transport for Dhaka students — live buses, routes, passes & GPS",
    hook:
      "Campus buses in Dhaka ran on Facebook threads and curb-side hope.",
    tier: 1,
    category: "fullstack",
    featured: true,
    launchCaseStudy: true,
    role: "Full-stack module contributor",
    teamSize: 5,
    year: "2025",
    problem:
      "Dhaka students lose hours on unpredictable bus routes with no unified view of schedules, live GPS, or digital pass payment — transport chaos, not a convenience feature.",
    approach:
      "Collaborative smart transport platform: Laravel 9 PWA for admin, driver, and student roles; Firebase for real-time GPS and notifications; SSLCommerz for local payment reality. Contributed dedicated full-stack modules inside a 5-member team rather than a solo toy app.",
    whyStack: [
      "Laravel 9 — rapid admin panels, auth, and Blade/PWA from one deployable monolith",
      "Firebase — real-time GPS and push without self-hosted WebSocket infra on student budget",
      "SSLCommerz — Bangladesh payment gateway integration, not Stripe-only fiction",
      "PWA — installable mobile web before native app parity",
    ],
    challenges: [
      "Role-based access across student, driver, and admin workflows",
      "Live bus tracking vs stale cache — when to poll vs push updates",
      "Subscription and pass logic with payment callback verification",
      "Team coordination — API contracts between web admin and Flutter mobile client",
    ],
    impact:
      "Deployed at studentmove-app-d866.onrender.com. Demonstrates full-stack + real-time + local payments in a Bangladesh context — the problem space recruiters in Dhaka actually recognize.",
    productionNotes: [
      "Dedicated tracking microservice; map tile CDN; offline PWA sync queue",
      "Fraud checks on digital passes; audit trail on driver GPS submissions",
      "Separate read models for live map vs admin reporting",
    ],
    stack: [
      "Laravel 9",
      "PWA",
      "Firebase",
      "SSLCommerz",
      "MySQL",
      "GPS",
    ],
    liveUrl: "https://studentmove-app-d866.onrender.com",
    githubUrl:
      "https://github.com/Tahis-Fzs/StudentMove-Smart-Transport-Solution-for-Dhaka",
    images: ["/projects/studentmove/hero.webp"],
  },

  // ─── Tier 2 — Featured case studies ─────────────────────────────────────
  {
    slug: "ckd-multimodal-detection",
    title: "CKD Multimodal Detection",
    tagline: "Early CKD risk from clinical EHR + wearable signals with explainable AI",
    hook:
      "A kidney-risk score with no explanation is a number wearing a lab coat.",
    tier: 2,
    category: "ml",
    featured: true,
    role: "Research & implementation",
    year: "2025",
    problem:
      "Early chronic kidney disease is missed when models rely on a single modality (labs only or vitals only). Clinicians need explainable risk scores, not black-box accuracy on a slide.",
    approach:
      "Multimodal research framework fusing NHANES, MIMIC-IV, and WESAD datasets with calibrated models and SHAP explainability, plus a clinical decision-support demo to bridge notebook research and defensible thesis narrative.",
    whyStack: [
      "Multimodal fusion — closer to clinical reality than single-dataset Kaggle exercises",
      "Calibration — trustworthy probability outputs under class imbalance",
      "SHAP — audit trail for which features drove a risk flag",
      "Python + Jupyter — standard research loop with reproducible pipelines",
    ],
    challenges: [
      "Aligning heterogeneous temporal and tabular features across datasets",
      "Leakage-safe train/validation splits when merging public sources",
      "Calibration under severe class imbalance in early-stage CKD",
      "Presenting model output as decision support, not diagnosis",
    ],
    impact:
      "Thesis-grade framework demonstrating research rigor — multimodal design, explainability, and a demo UI — not a single-notebook accuracy claim.",
    productionNotes: [
      "FHIR integration for EHR ingestion; ONNX export for edge inference",
      "Model monitoring for drift on demographic slices",
      "Human-in-the-loop review queue for high-risk flags",
    ],
    stack: ["Python", "PyTorch", "SHAP", "NHANES", "MIMIC-IV", "WESAD"],
    githubUrl: "https://github.com/Tahis-Fzs/ckd-multimodal-detection-",
  },
  {
    slug: "retinal-oct-deep-learning",
    title: "Retinal OCT Classification",
    tagline: "Four-class OCT disease screening with ensemble deep learning",
    hook:
      "Hand-reading every OCT frame does not survive real volume.",
    tier: 2,
    category: "ml",
    featured: true,
    role: "Research & implementation",
    year: "2025",
    problem:
      "Retinal OCT screening across four disease classes fails when one architecture is assumed to generalize — device noise and class imbalance break naive single-model pipelines.",
    approach:
      "Built and compared EfficientNetB0, MobileNetV2, classical handcrafted features, and stacked meta-learning on OCT2017 — choosing ensemble strategy over picking one winner and hoping.",
    whyStack: [
      "EfficientNet / MobileNet — transfer learning baseline on medical imaging",
      "Handcrafted features — interpretable signal when CNN overfits small classes",
      "Stacked meta-learner — combine complementary errors instead of averaging guesses",
      "Evaluation pipeline + demo UI — research output others can run",
    ],
    challenges: [
      "Class imbalance across CNV, DME, DRUSEN, NORMAL categories",
      "OCT imaging artifacts and device variation",
      "Fusion of deep and classical features without leakage in meta-training",
    ],
    impact:
      "Complete pipeline with evaluation and demo UI — interview-ready story for why ensemble beats single-model bragging.",
    productionNotes: [
      "DICOM ingestion; FDA-style validation splits by device site",
      "Quantized MobileNet for mobile screening edge cases",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "EfficientNet",
      "MobileNet",
      "Meta-learning",
    ],
    githubUrl: "https://github.com/Tahis-Fzs/retinal-oct-deep-learning",
  },
  {
    slug: "cicids2017-intrusion-detection",
    title: "CICIDS2017 Intrusion Detection",
    tagline: "Leakage-safe network intrusion + insider-threat risk scoring",
    hook:
      "Accuracy before cleaning is a costume for a messy log file.",
    tier: 2,
    category: "ml",
    featured: true,
    role: "Research & implementation",
    year: "2025",
    problem:
      "Network intrusion demos often leak train/test data or report accuracy without insider-threat context — hiring managers with security awareness spot this immediately.",
    approach:
      "Preprocessing and ML pipeline on CICIDS2017 with multimodal insider-threat features from CERT and Enron, leakage-safe splits, and explainable analysis aligned with information security training.",
    whyStack: [
      "CICIDS2017 — standard benchmark for network flow classification",
      "CERT + Enron features — insider threat angle beyond packet labels alone",
      "Leakage-safe splits — defensible methodology in security interviews",
      "Explainable outputs — feature importance, not magic threshold",
    ],
    challenges: [
      "High-dimensional flow features and label noise in CICIDS2017",
      "Combining network and behavioural insider signals without data leakage",
      "Class imbalance across attack types",
    ],
    impact:
      "Security-minded ML portfolio piece — pairs with Great Learning Information Security certification on CV.",
    productionNotes: [
      "Streaming inference on NetFlow; SIEM integration hooks",
      "Human analyst review for high-severity alerts; feedback loop retraining",
    ],
    stack: ["Python", "Scikit-learn", "CICIDS2017", "CERT", "Enron"],
    githubUrl: "https://github.com/Tahis-Fzs/cicids2017-intrusion-detection",
  },
  {
    slug: "studentmove-flutter",
    title: "StudentMove Flutter App",
    tagline: "Mobile client — Firebase auth, live schedules, role-based access",
    hook:
      "A web admin panel does not fit in your pocket on the walk to the bus stop.",
    tier: 2,
    category: "mobile",
    featured: true,
    role: "Mobile collaborator",
    teamSize: 5,
    year: "2025",
    problem:
      "Students need a native-feeling mobile experience for schedules, announcements, and chat — web alone cannot match notification and offline expectations on daily commutes.",
    approach:
      "Flutter client with Firebase Authentication, Cloud Firestore, Cloud Functions, and Storage — real-time bus schedules, announcements, chat, and role-based secure data access with admin workflow.",
    whyStack: [
      "Flutter — single codebase for Android/iOS on student project timeline",
      "Firebase — auth + realtime DB without maintaining socket infrastructure",
      "Cloud Functions — server-side rules for sensitive admin actions",
    ],
    challenges: [
      "Role-based Firestore security rules for student vs admin data",
      "Real-time schedule sync with web admin updates",
      "Chat and announcement delivery without spamming drivers",
    ],
    impact:
      "Mobile companion to StudentMove web platform — shows cross-platform thinking in a real team project.",
    productionNotes: [
      "FCM topic segmentation; offline cache with conflict resolution",
      "App attestation for driver GPS submissions",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud Functions"],
    githubUrl: "https://github.com/Hasin-99/StudentMove_Flutter_App",
  },
  {
    slug: "agro-culture",
    title: "AgroCulture Marketplace",
    tagline: "Farmer-to-buyer agricultural marketplace with reviews & agro-blog",
    hook:
      "Produce deals were dying inside phone calls that never became a record.",
    tier: 2,
    category: "fullstack",
    featured: true,
    role: "Solo full-stack",
    year: "2025",
    problem:
      "Small farmers lack a simple digital channel to list produce; buyers need trust signals (profiles, reviews), not anonymous listings on social media.",
    approach:
      "PHP/MySQL marketplace with product listing, cart, transactions, user profiles, reviews, and agro-blog — classic LAMP full-stack proving fundamentals without framework hype.",
    whyStack: [
      "PHP + MySQL — deployable on cheap shared hosting; clear CRUD domain",
      "Session-based auth — understood security model for marketplace roles",
      "Reviews + blog — trust and content beyond transactional tables",
    ],
    challenges: [
      "Cart and inventory consistency across concurrent buyers",
      "User profile and review integrity",
      "SQL injection and session hardening on classic stack",
    ],
    impact:
      "End-to-end marketplace logic — demonstrates you can ship without reaching for Next.js for every CRUD app.",
    productionNotes: [
      "Migrate to prepared statements everywhere; CSRF tokens on all mutations",
      "Payment escrow; image CDN for product photos",
    ],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Tahis-Fzs/agro-culture",
  },

  // ─── Tier 3 — Archive ───────────────────────────────────────────────────
  {
    slug: "smart-cart-iot",
    title: "Smart Cart IoT",
    tagline: "RFID item scanning with real-time billing",
    hook: "Until checkout, the trolley was a prop on wheels.",
    tier: 3,
    category: "iot",
    featured: false,
    role: "Implementation",
    year: "2025",
    problem:
      "Manual checkout queues in retail — need automated item detection and running bill total as shoppers add products.",
    approach:
      "IoT smart shopping cart prototype with RFID scanning and real-time billing display integrated with a simple web dashboard.",
    whyStack: [
      "RFID — passive tag reads at cart scale",
      "Embedded + web UI — split between device logic and operator view",
    ],
    challenges: [
      "RFID collision when multiple tags in range",
      "Latency between scan and bill update",
    ],
    impact:
      "Hardware-software integration sample for IoT-minded roles.",
    productionNotes: [
      "Anti-collision RFID protocols; edge compute on cart MCU",
    ],
    stack: ["Arduino", "RFID", "HTML", "JavaScript"],
    githubUrl: "https://github.com/Tahis-Fzs/smart-cart-iot",
  },
  {
    slug: "opengl-maritime-day-night",
    title: "OpenGL Maritime Scene",
    tagline: "Day/night cycle — ocean, lighthouse, ships",
    hook: "A frozen mesh is not a graphics demo. Light has to move.",
    tier: 3,
    category: "graphics",
    featured: false,
    role: "Solo graphics",
    year: "2025",
    problem:
      "Computer graphics coursework needs a scene demonstrating lighting, animation, and environmental state change — not a static cube.",
    approach:
      "OpenGL/GLUT maritime environment with automated day/night cycle, animated ocean, lighthouse beacon, and moving ships.",
    whyStack: [
      "OpenGL + GLUT — core graphics pipeline understanding",
      "Day/night cycle — exercises lighting model transitions",
    ],
    challenges: [
      "Smooth light color interpolation over time",
      "Ocean wave animation without tanking frame rate",
    ],
    impact:
      "Graphics fundamentals proof for systems or game-adjacent interviews.",
    productionNotes: [
      "Modernize to Vulkan or WebGPU for portfolio embed",
    ],
    stack: ["C++", "OpenGL", "GLUT"],
    githubUrl: "https://github.com/Tahis-Fzs/opengl-maritime-day-night",
  },
  {
    slug: "codekotha",
    title: "CodeKotha",
    tagline: "Collaborative dev project",
    hook:
      "English keywords should not be the toll booth before you learn a loop.",
    tier: 3,
    category: "collab",
    featured: false,
    role: "Contributor",
    year: "2025",
    problem: "Team learning project — collaborative software development practice.",
    approach: "Contributed as part of team repository under Hasin-99 org.",
    whyStack: ["Team Git workflow", "Shared codebase conventions"],
    challenges: ["Merge coordination", "Feature branch discipline"],
    impact: "Collaboration sample alongside solo flagship work.",
    productionNotes: ["Clear ownership docs per contributor"],
    stack: ["Varies"],
    githubUrl: "https://github.com/Hasin-99/CodeKotha",
  },
  {
    slug: "why-so-serious-mail",
    title: "Why So Serious Mail",
    tagline: "Collaborative mail project",
    hook:
      "Permissions stay slide-ware until a small system breaks when you get them wrong.",
    tier: 3,
    category: "collab",
    featured: false,
    role: "Contributor",
    year: "2025",
    problem: "Email-related team project for learning backend integration.",
    approach: "Collaborative repository — supporting team delivery.",
    whyStack: ["Backend integration patterns"],
    challenges: ["Email delivery edge cases"],
    impact: "Secondary collab reference — not a headline project.",
    productionNotes: ["Use transactional email provider with bounce handling"],
    stack: ["Backend"],
    githubUrl: "https://github.com/Hasin-99/why-so-serious-mail",
  },
];

/** Helpers for pages and grids */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTier(tier: Project["tier"]): Project[] {
  return projects.filter((p) => p.tier === tier);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getLaunchProjects(): Project[] {
  return projects.filter((p) => p.launchCaseStudy);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "fullstack", label: "Full-Stack" },
  { id: "ml", label: "Machine Learning" },
  { id: "mobile", label: "Mobile" },
  { id: "iot", label: "IoT" },
  { id: "graphics", label: "Graphics" },
  { id: "collab", label: "Collaboration" },
];

/** Recruiter home — top 3 thinking-first cards */
export const recruiterSpotlightSlugs = [
  "paylite-x",
  "studentmove",
  "ckd-multimodal-detection",
];

/** Engineer constellation nodes */
export const constellationSlugs = [
  "paylite-x",
  "studentmove",
  "ckd-multimodal-detection",
  "retinal-oct-deep-learning",
  "cicids2017-intrusion-detection",
  "agro-culture",
  "smart-cart-iot",
];
