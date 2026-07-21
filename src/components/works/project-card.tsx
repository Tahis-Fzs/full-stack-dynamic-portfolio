"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  categoryColors,
  categoryLabels,
  tierLabel,
  truncate,
} from "@/lib/projects-ui";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const accent = categoryColors[project.category];
  const caseHref = `/works/${project.slug}`;

  return (
    <article
      id={project.slug}
      className={cn(
        "glass glass-hover group scroll-mt-28 relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] p-5 sm:p-6",
        "transition-[opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-out-expo)]",
        project.tier === 1 && "lg:col-span-2",
        project.tier === 1 && !compact && "lg:min-h-[320px]",
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      <div className="flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider"
          style={{
            color: accent,
            background: `color-mix(in srgb, ${accent} 12%, transparent)`,
            border: `1px solid color-mix(in srgb, ${accent} 22%, transparent)`,
          }}
        >
          {categoryLabels[project.category]}
        </span>
        <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
          {tierLabel(project.tier)} · {project.year}
        </span>
        {project.liveUrl && (
          <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border-accent)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--accent-cyan)]">
            <span className="size-1.5 rounded-full bg-[var(--accent-cyan)]" />
            Live
          </span>
        )}
        {project.launchCaseStudy && (
          <span className="rounded-full border border-[color-mix(in_srgb,var(--accent-paylite)_35%,transparent)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--accent-paylite)]">
            Case study
          </span>
        )}
      </div>

      <h3
        className={cn(
          "mt-4 font-display text-[var(--text-primary)]",
          project.tier === 1 ? "text-2xl sm:text-3xl" : "text-xl",
        )}
      >
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--text-dim)]">{project.tagline}</p>

      {!compact && (
        <div className="mt-5 flex-1 space-y-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
              Problem
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-2">
              {truncate(
                project.problem,
                project.tier === 1 ? 200 : 140,
              )}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
              Impact
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
              {truncate(project.impact, project.tier === 1 ? 160 : 120)}
            </p>
          </div>
        </div>
      )}

      {compact && (
        <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
          {truncate(project.problem, 100)}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, project.tier === 1 ? 6 : 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-void)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-dim)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border-subtle)] pt-4">
        <Link
          href={caseHref}
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-cyan)]"
        >
          Case study
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        >
          <Github className="size-3.5" aria-hidden />
          GitHub
        </Link>
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
          >
            <ExternalLink className="size-3.5" aria-hidden />
            Demo
          </Link>
        )}
      </div>
    </article>
  );
}
