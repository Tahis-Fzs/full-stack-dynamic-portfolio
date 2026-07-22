"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  getProjectsByTier,
  projects,
} from "@/content/projects";
import type { Project } from "@/content/types";
import { Container } from "@/components/layout/container";
import {
  SectionHeader,
  SectionShell,
} from "@/components/layout/section-header";
import { cn } from "@/lib/cn";
import { categoryColors, categoryLabels } from "@/lib/projects-ui";

function ProjectCard({ project }: { project: Project }) {
  const accent = categoryColors[project.category];

  return (
    <article className="premium-card group p-6 sm:p-7">
      <div className="flex items-center justify-between gap-2">
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider"
          style={{
            color: accent,
            background: `color-mix(in srgb, ${accent} 12%, transparent)`,
          }}
        >
          {categoryLabels[project.category]}
        </span>
        <span className="text-xs text-[var(--text-dim)]">{project.year}</span>
      </div>

      <h3 className="mt-4 font-display text-xl leading-snug text-[var(--text-primary)]">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-[1.65] text-[var(--text-muted)]">
        {project.tagline}
      </p>
      <p className="mt-3 text-sm leading-[1.65] text-[var(--text-secondary)]">
        {project.hook}
      </p>

      <div className="mt-5 flex flex-wrap gap-3 border-t border-[var(--border-subtle)] pt-4">
        <Link
          href={`/works/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-cyan)]"
        >
          Case study
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[var(--text-dim)] hover:text-[var(--text-primary)]"
          >
            Live
            <ExternalLink className="size-3.5" aria-hidden />
          </Link>
        )}
      </div>
    </article>
  );
}

function TierBlock({
  title,
  subtitle,
  tierProjects,
  columns,
}: {
  title: string;
  subtitle: string;
  tierProjects: Project[];
  columns: string;
}) {
  if (tierProjects.length === 0) return null;

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-display text-xl text-[var(--text-primary)]">{title}</h3>
        <p className="mt-1 text-sm text-[var(--text-dim)]">{subtitle}</p>
      </div>
      <div className={cn("grid gap-4 sm:grid-cols-2", columns)}>
        {tierProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

export function HomeAllProjects() {
  const tier1 = getProjectsByTier(1);
  const tier2 = getProjectsByTier(2);
  const tier3 = getProjectsByTier(3);

  return (
    <SectionShell variant="elevated">
      <Container>
        <SectionHeader
          eyebrow={`Engineering · ${projects.length} GitHub projects`}
          title="Built, deployed, and documented"
          description="Live demos, research pipelines, mobile clients, and team builds — each with a full case study."
        />

        <div className="mt-10 space-y-12">
          <TierBlock
            title="Flagship & live"
            subtitle={`${tier1.length} projects with production-shaped demos`}
            tierProjects={tier1}
            columns="lg:grid-cols-2"
          />
          <TierBlock
            title="Featured engineering"
            subtitle={`${tier2.length} research and product builds`}
            tierProjects={tier2}
            columns="lg:grid-cols-3"
          />
          <TierBlock
            title="Archive & collaboration"
            subtitle={`${tier3.length} additional repositories`}
            tierProjects={tier3}
            columns="lg:grid-cols-2"
          />
        </div>

        <Link href="/works" className="premium-btn-ghost mt-10 inline-flex">
          Explore full works archive
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </Container>
    </SectionShell>
  );
}
