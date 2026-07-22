import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";
import { categoryColors, categoryLabels } from "@/lib/projects-ui";

interface SpotlightCardProps {
  project: Project;
}

export function SpotlightCard({ project }: SpotlightCardProps) {
  const accent = categoryColors[project.category];
  const href = `/works/${project.slug}`;

  return (
    <article className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[color-mix(in_srgb,var(--accent-cyan)_35%,var(--border-subtle))] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
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
            <span className="size-1.5 animate-pulse rounded-full bg-[var(--accent-cyan)]" />
            Live demo
          </span>
        )}
        <span className="ml-auto text-xs text-[var(--text-dim)]">{project.year}</span>
      </div>

      <h3 className="mt-4 font-display text-xl leading-snug text-[var(--text-primary)]">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
        {project.tagline}
      </p>

      <p className="mt-3 flex-1 text-sm leading-[1.65] text-[var(--text-muted)]">
        {project.hook}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-void)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-dim)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[var(--border-subtle)] pt-4">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-cyan)]"
        >
          Read case study
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
          >
            Open live
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
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-[var(--max-width)] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-2xl leading-snug text-[var(--text-primary)] sm:text-3xl">
            Projects I would walk through in an interview
          </h2>
          <p className="mt-3 text-sm leading-[1.7] text-[var(--text-muted)] sm:text-base">
            Two live demos plus research and mobile work from DIU — each with
            problem, stack choices, and GitHub links.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {spotlightProjects.map((project) => (
            <SpotlightCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center sm:text-left">
          <Link
            href="/works"
            className="text-sm font-medium text-[var(--accent-cyan)] hover:underline"
          >
            See all 11 projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
