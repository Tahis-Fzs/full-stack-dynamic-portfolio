import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { designProjects } from "@/content/design-projects";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";

export function DesignPortfolioSection() {
  return (
    <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
              UI/UX design · {designProjects.length} projects
            </p>
            <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
              Figma & interface design work
            </h2>
            <p className="mt-3 text-sm leading-[1.7] text-[var(--text-muted)]">
              Dashboard, mobile, landing page, and web app case studies from my
              earlier portfolio — ERP systems, healthcare UI, e-commerce, SaaS, and
              more. Full gallery on Behance.
            </p>
          </div>
          <Link
            href={site.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border-accent)] px-4 py-2 text-sm text-[var(--accent-cyan)] hover:bg-[var(--patina-wash)]"
          >
            Behance portfolio
            <ExternalLink className="size-3.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-void)] p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] uppercase tracking-wider text-[var(--accent-paylite)]">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="text-[10px] text-[var(--text-dim)]">Featured</span>
                )}
              </div>
              <h3 className="mt-3 font-display text-lg text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.65] text-[var(--text-muted)]">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[var(--border-subtle)] px-2 py-0.5 text-[10px] text-[var(--text-dim)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
