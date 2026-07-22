import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  designProjects,
  getFeaturedDesignProjects,
} from "@/content/design-projects";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import {
  SectionHeader,
  SectionShell,
} from "@/components/layout/section-header";

export function DesignPortfolioSection() {
  const featured = getFeaturedDesignProjects();
  const rest = designProjects.filter((p) => !p.featured);

  return (
    <SectionShell>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow={`UI/UX · ${designProjects.length} case studies`}
            title="Interface design work"
            description="Featured Figma projects from the original portfolio — dashboards, mobile apps, and landing systems."
          />
          <Link
            href={site.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn-ghost shrink-0 self-start sm:self-auto"
          >
            Full Behance gallery
            <ExternalLink className="size-3.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((project) => (
            <article key={project.slug} className="premium-card p-6 sm:p-7">
              <p className="premium-eyebrow">{project.category}</p>
              <h3 className="mt-4 font-display text-xl leading-snug text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-[var(--text-muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border-subtle)] px-2.5 py-0.5 text-[10px] text-[var(--text-dim)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {rest.map((project) => (
            <li
              key={project.slug}
              className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--bg-elevated)_50%,transparent)] px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {project.title}
                </p>
                <p className="text-xs text-[var(--text-dim)]">{project.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}
