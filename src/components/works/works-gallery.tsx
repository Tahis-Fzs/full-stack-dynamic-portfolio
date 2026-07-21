"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/content/types";
import { projectCategories, projects } from "@/content/projects";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/works/project-card";
import { cn } from "@/lib/cn";

type FilterId = "all" | ProjectCategory;

function sortProjects(list: Project[]): Project[] {
  return [...list].sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    return b.year.localeCompare(a.year);
  });
}

export function WorksGallery() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToHash = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [scrollToHash, mounted]);

  const filtered = useMemo(() => {
    const list =
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter);
    return sortProjects(list);
  }, [filter]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: projects.length };
    for (const cat of projectCategories) {
      map[cat.id] = projects.filter((p) => p.category === cat.id).length;
    }
    return map;
  }, []);

  const tier1 = filtered.filter((p) => p.tier === 1);
  const tier2 = filtered.filter((p) => p.tier === 2);
  const tier3 = filtered.filter((p) => p.tier === 3);

  return (
    <>
      <section className="border-b border-[var(--border-subtle)] pb-10 pt-12 sm:pt-16">
        <Container>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            Studio Tahsin · Works
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[var(--text-section)] leading-[var(--leading-tight)] text-[var(--text-primary)]">
            Projects with documented decisions
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--text-muted)]">
            Filter by domain. Each card leads with{" "}
            <span className="text-[var(--accent-paylite)]">Problem</span> and{" "}
            <span className="text-[var(--accent-cyan)]">Impact</span> — open the
            case study for approach, challenges, and production notes.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            <FilterChip
              active={filter === "all"}
              count={counts.all}
              onClick={() => setFilter("all")}
            >
              All
            </FilterChip>
            {projectCategories.map((cat) => (
              <FilterChip
                key={cat.id}
                active={filter === cat.id}
                count={counts[cat.id] ?? 0}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </FilterChip>
            ))}
          </div>

          <p className="mt-4 text-xs text-[var(--text-dim)]">
            Showing{" "}
            <span className="text-[var(--text-secondary)]">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          {filtered.length === 0 ? (
            <div className="glass rounded-[var(--radius-card)] p-10 text-center">
              <p className="text-[var(--text-muted)]">
                No projects in this category yet.
              </p>
            </div>
          ) : (
            <div className="space-y-14">
              {tier1.length > 0 && (
                <TierSection title="Launch & flagship" subtitle="Tier 1 · Live demos & full case studies">
                  <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
                    {tier1.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                </TierSection>
              )}

              {tier2.length > 0 && (
                <TierSection title="Featured research & products" subtitle="Tier 2 · Problem → Impact depth">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {tier2.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                </TierSection>
              )}

              {tier3.length > 0 && (
                <TierSection title="More work" subtitle="Tier 3 · Archive & collaboration">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                    {tier3.map((project) => (
                      <ProjectCard key={project.slug} project={project} compact />
                    ))}
                  </div>
                </TierSection>
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

function FilterChip({
  active,
  count,
  onClick,
  children,
}: {
  active: boolean;
  count: number;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-[var(--duration-fast)] ease-[var(--ease-out-expo)]",
        active
          ? "border-[var(--accent-cyan)] bg-[color-mix(in_srgb,var(--accent-cyan)_12%,transparent)] text-[var(--accent-cyan)]"
          : "border-[var(--border-subtle)] bg-[var(--surface-glass)] text-[var(--text-muted)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]",
      )}
    >
      {children}
      <span
        className={cn(
          "rounded-full px-1.5 py-0.5 font-mono text-[10px]",
          active ? "bg-[var(--accent-cyan)] text-[var(--bg-void)]" : "bg-[var(--bg-void)] text-[var(--text-dim)]",
        )}
      >
        {count}
      </span>
    </button>
  );
}

function TierSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="font-display text-xl text-[var(--text-primary)] sm:text-2xl">
          {title}
        </h2>
        <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-dim)]">
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  );
}
