"use client";

import {
  getProjectBySlug,
  recruiterSpotlightSlugs,
} from "@/content/projects";
import { useExploreMode } from "@/components/providers/mode-provider";
import { ConstellationHeroLazy } from "@/components/engineer/constellation-lazy";
import { EngineerScroll } from "@/components/engineer/engineer-scroll";
import {
  EducationStrip,
  HomeBottomCta,
  HomeHero,
} from "@/components/home/home-sections";
import { SkillsBento } from "@/components/home/skills-bento";
import { SpotlightGrid } from "@/components/home/spotlight-grid";
import { ThinkingSection } from "@/components/home/thinking-section";

export function HomeShell() {
  const { resolvedMode } = useExploreMode();
  const isEngineer = resolvedMode === "engineer";

  const spotlightProjects = recruiterSpotlightSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const content = (
    <>
      {isEngineer ? <ConstellationHeroLazy /> : <HomeHero />}
      <ThinkingSection />
      <SpotlightGrid projects={spotlightProjects} />
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
