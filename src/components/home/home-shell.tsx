"use client";

import {
  useExploreMode } from "@/components/providers/mode-provider";
import { ConstellationHeroLazy } from "@/components/engineer/constellation-lazy";
import { EngineerScroll } from "@/components/engineer/engineer-scroll";
import { DesignCraftSection } from "@/components/home/design-craft-section";
import { DesignPortfolioSection } from "@/components/home/design-portfolio-section";
import { ExperienceHighlights } from "@/components/home/experience-highlights";
import { HomeAllProjects } from "@/components/home/home-all-projects";
import {
  EducationStrip,
  HomeBottomCta,
  HomeHero,
} from "@/components/home/home-sections";
import { SkillsBento } from "@/components/home/skills-bento";
import { ThinkingSection } from "@/components/home/thinking-section";

export function HomeShell() {
  const { resolvedMode } = useExploreMode();
  const isEngineer = resolvedMode === "engineer";

  const content = (
    <>
      {isEngineer ? <ConstellationHeroLazy /> : <HomeHero />}
      <ThinkingSection />
      <HomeAllProjects />
      <DesignPortfolioSection />
      <ExperienceHighlights />
      <DesignCraftSection />
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
