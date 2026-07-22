"use client";

import {
  useExploreMode } from "@/components/providers/mode-provider";
import { ConstellationHeroLazy } from "@/components/engineer/constellation-lazy";
import { EngineerScroll } from "@/components/engineer/engineer-scroll";
import { DesignPortfolioSection } from "@/components/home/design-portfolio-section";
import {
  DesignProcessSection,
  DesignSkillsSection,
} from "@/components/home/design-skills-section";
import { ExperienceHighlights } from "@/components/home/experience-highlights";
import { HomeAllProjects } from "@/components/home/home-all-projects";
import {
  EducationStrip,
  HomeBottomCta,
  HomeHero,
} from "@/components/home/home-sections";
import { LegacyStatsStrip } from "@/components/home/legacy-stats-strip";
import { SkillsBento } from "@/components/home/skills-bento";
import { ThinkingSection } from "@/components/home/thinking-section";

export function HomeShell() {
  const { resolvedMode } = useExploreMode();
  const isEngineer = resolvedMode === "engineer";

  const content = (
    <>
      {isEngineer ? <ConstellationHeroLazy /> : <HomeHero />}
      <LegacyStatsStrip />
      <ThinkingSection />
      <HomeAllProjects />
      <DesignPortfolioSection />
      <ExperienceHighlights />
      <DesignSkillsSection />
      <DesignProcessSection />
      <SkillsBento />
      <EducationStrip />
      <HomeBottomCta />
    </>
  );

  if (isEngineer) {
    return <EngineerScroll>{content}</EngineerScroll>;
  }

  return content;
}
