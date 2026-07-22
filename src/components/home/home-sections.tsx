import Link from "next/link";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
} from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { HomeHeroKinetic } from "@/components/home/home-hero-kinetic";

export function HomeHero() {
  return <HomeHeroKinetic />;
}

export function EducationStrip() {
  const { education } = site;

  return (
    <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-accent)] bg-[var(--patina-wash)]">
              <GraduationCap
                className="size-5 text-[var(--accent-cyan)]"
                aria-hidden
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
                Education
              </p>
              <p className="mt-1 font-display text-xl text-[var(--text-primary)]">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {education.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:justify-end">
            <span className="glass rounded-full px-4 py-2 text-xs text-[var(--text-secondary)]">
              {education.result}
            </span>
            <span className="glass rounded-full px-4 py-2 text-xs text-[var(--text-secondary)]">
              {education.status}
            </span>
            <span className="rounded-full border border-[var(--border-accent)] bg-[var(--patina-wash)] px-4 py-2 text-xs text-[var(--accent-cyan)]">
              Class of {education.year}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeBottomCta() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="glass relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--border-signal)] p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--accent-paylite)_18%,transparent),transparent_55%)]"
          />
          <div className="relative max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
              {site.brandName}
            </p>
            <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
              Want the full story on PayLite X or StudentMove?
            </h2>
            <p className="mt-4 text-sm leading-[1.7] text-[var(--text-muted)] sm:text-base">
              Case studies cover the problem, architecture choices, and what I
              would change before production — with live links where available.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/works"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-cyan)] px-5 py-2.5 text-sm font-medium text-[var(--bg-void)]"
              >
                Explore works
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-[var(--text-primary)]"
              >
                <Github className="size-4" aria-hidden />
                GitHub
              </Link>
              <Link
                href="/resume"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-[var(--text-primary)]"
              >
                Full resume
                <ExternalLink className="size-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
