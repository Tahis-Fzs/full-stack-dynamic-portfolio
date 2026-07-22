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
  /** One-line editorial opener — the pressure before the case study */
  hook: string;
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

export interface HeroStat {
  value: string;
  label: string;
}

export interface DesignSkill {
  title: string;
  description: string;
}

export interface ExperienceHighlight {
  title: string;
  description: string;
}

export interface DesignProject {
  slug: string;
  title: string;
  description: string;
  category: string;
  techTags: string[];
  featured: boolean;
  behanceUrl?: string;
}

export interface DesignProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  brandName: string;
  brandShort: string;
  tagline: string;
  profileRole: string;
  profileBio: string;
  aboutParagraphs: string[];
  positioning: string;
  thinkingHook: string;
  designSystem: {
    name: string;
    tagline: string;
  };
  hero: {
    role: string;
    headline: string;
    support: string;
    stats: HeroStat[];
    legacyStats: HeroStat[];
  };
  location: string;
  openTo: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  behanceUrl: string;
  facebookUrl: string;
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
  designSkills: DesignSkill[];
  experiences: ExperienceHighlight[];
  designProcess: DesignProcessStep[];
  timeline: TimelineEntry[];
  contests: string[];
  training: string[];
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
}
