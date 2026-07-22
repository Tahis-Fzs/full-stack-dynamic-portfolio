import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/content/types";
import { projects as allProjects } from "@/content/projects";
import { cn } from "@/lib/cn";
import { categoryColors, categoryLabels, truncate } from "@/lib/projects-ui";
import {
  FieldNoteHook,
  FieldNoteIndex,
} from "@/components/works/field-note-lead";

interface SpotlightCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function SpotlightCard({
  project,
  index,
  featured = false,
}: SpotlightCardProps) {
  const accent = categoryColors[project.category];
  const href = `/works/${project.slug}`;

  return (
    <article
      className={cn(
        "glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] p-6 sm:p-7",
        featured && "lg:col-span-2",
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      <div className="flex items-start justify-between gap-4">
        <FieldNoteIndex index={index} />
        <div className="flex flex-wrap justify-end gap-2">
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider"
            style={{
              color: accent,
              background: `color-mix(in srgb, ${accent} 12%, transparent)`,
              border: `1px solid color-mix(in srgb, ${accent} 25%, transparent)`,
            }}
          >
            {categoryLabels[project.category]}
          </span>
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border-accent)] bg-[color-mix(in_srgb,var(--accent-cyan)_10%,transparent)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--accent-cyan)]">
              <span className="size-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
              Live
            </span>
          )}
        </div>
      </div>

      <h3 className="mt-5 font-display text-xl text-[var(--text-primary)] sm:text-2xl">
        {project.title}
      </h3>

      <div className="mt-5 flex-1">
        <FieldNoteHook hook={project.hook} size={featured ? "lg" : "md"} />
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-cyan)]">
            Proof ·{" "}
          </span>
          {truncate(project.impact, featured ? 160 : 130)}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.slice(0, featured ? 5 : 3).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-void)] px-2 py-1 font-mono text-[10px] text-[var(--text-dim)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[var(--border-subtle)] pt-5">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-cyan)]"
        >
          Open field note
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </Link>
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
          >
            Live demo
            <ExternalLink className="size-3.5" aria-hidden />
          </Link>
        )}
      </div>
    </article>
  );
}

interface SpotlightGridProps {
  projects: Project[];
}

export function SpotlightGrid({ projects: spotlightProjects }: SpotlightGridProps) {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-[var(--max-width)] px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-paylite)]">
              Selected builds
            </p>
            <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
              Open a title for the field note behind it.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              {allProjects.length} projects — each opens with one hard line, then
              the full Problem → Approach → Impact case study.
            </p>
          </div>
          <Link
            href="/works"
            className="text-sm text-[var(--accent-cyan)] hover:underline"
          >
            Open full archive →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {spotlightProjects.map((project, index) => (
            <SpotlightCard
              key={project.slug}
              project={project}
              index={index + 1}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
