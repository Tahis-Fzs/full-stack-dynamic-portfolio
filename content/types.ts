/**
 * Studio Tahsin — Content types (Step 0 schema lock)
 */

export type ProjectTier = 1 | 2 | 3;

export type ProjectCategory =
  | "fullstack"
  | "ml"
  | "mobile"
  | "iot"
  | "graphics"
  | "collab";

export type ExploreMode = "recruiter" | "engineer";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tier: ProjectTier;
  category: ProjectCategory;
  featured: boolean;
  /** Card headline — the problem in one breath */
  problem: string;
  /** What you built and the reasoning */
  approach: string;
  /** Stack trade-offs — why THIS stack */
  whyStack: string[];
  /** Real decisions, not generic "fixed bugs" */
  challenges: string[];
  /** Honest outcome — no fake metrics */
  impact: string;
  /** Interview-ready production thinking */
  productionNotes: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  /** Launch pages get pinned scroll sections */
  launchCaseStudy?: boolean;
  role?: string;
  teamSize?: number;
  year: string;
  images?: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  org: string;
  detail: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  positioning: string;
  thinkingHook: string;
  location: string;
  openTo: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  cvPath: string;
  profileImage: string;
  education: {
    degree: string;
    institution: string;
    result: string;
    status: string;
    year: string;
  };
  skillGroups: SkillGroup[];
  timeline: TimelineEntry[];
  contests: string[];
  training: string[];
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
}
