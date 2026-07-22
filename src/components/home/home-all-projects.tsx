"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  getProjectsByTier,
  projects,
} from "@/content/projects";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";
import { categoryColors, categoryLabels } from "@/lib/projects-ui";

function ProjectCard({ project }: { project: Project }) {
  const accent = categoryColors[project.category];
  const href = `/works/${project.slug}`;

  return (
    <article className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider"
          style={{
            color: accent,
            background: `color-mix(in srgb, ${accent} 12%, transparent)`,
          }}
        >
          {categoryLabels[project.category]}
        </span>
        {project.liveUrl && (
          <span className="text-[10px] uppercase tracking-wider text-[var(--accent-cyan)]">
            Live
          </span>
        )}
        <span className="ml-auto text-xs text-[var(--text-dim)]">{project.year}</span>
      </div>

      <h3 className="mt-3 font-display text-lg leading-snug text-[var(--text-primary)]">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-[1.65] text-[var(--text-muted)]">
        {project.tagline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-[1.65] text-[var(--text-secondary)]">
        {project.hook}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--border-subtle)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-dim)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 border-t border-[var(--border-subtle)] pt-4">
        <Link
          href={href}
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
            className="inline-flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
          >
            Live demo
            <ExternalLink className="size-3.5" aria-hidden />
          </Link>
        )}
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
        >
          GitHub
          <ExternalLink className="size-3.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

function TierBlock({
  title,
  subtitle,
  tierProjects,
  columns = "lg:grid-cols-2",
}: {
  title: string;
  subtitle: string;
  tierProjects: Project[];
  columns?: string;
}) {
  if (tierProjects.length === 0) return null;

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-display text-xl text-[var(--text-primary)]">{title}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--text-dim)]">
          {subtitle}
        </p>
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
    <section className="border-b border-[var(--border-subtle)] py-14 sm:py-16">
      <div className="mx-auto max-w-[var(--max-width)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
            GitHub engineering · {projects.length} projects
          </p>
          <h2 className="mt-3 font-display text-2xl leading-snug text-[var(--text-primary)] sm:text-3xl">
            Full project archive
          </h2>
          <p className="mt-3 text-sm leading-[1.7] text-[var(--text-muted)] sm:text-base">
            Every repository with problem context, stack notes, and links — from
            live fintech and transport demos to ML research, mobile, IoT, and
            collaboration work.
          </p>
        </div>

        <div className="mt-10 space-y-12">
          <TierBlock
            title="Launch & live demos"
            subtitle={`Tier 1 · ${tier1.length} projects`}
            tierProjects={tier1}
          />
          <TierBlock
            title="Featured builds & research"
            subtitle={`Tier 2 · ${tier2.length} projects`}
            tierProjects={tier2}
            columns="lg:grid-cols-3"
          />
          <TierBlock
            title="More work & collaboration"
            subtitle={`Tier 3 · ${tier3.length} projects`}
            tierProjects={tier3}
            columns="lg:grid-cols-2"
          />
        </div>

        <Link
          href="/works"
          className="mt-10 inline-flex text-sm font-medium text-[var(--accent-cyan)] hover:underline"
        >
          Search and filter all projects on Works →
        </Link>
      </div>
    </section>
  );
}
