import Link from "next/link";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { ProfilePhoto } from "@/components/layout/profile-photo";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[var(--accent-paylite)] opacity-[0.08] blur-[90px]" />
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-[var(--accent-cyan)] opacity-[0.07] blur-[80px]" />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-dim)]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3 py-1">
              <MapPin className="size-3 text-[var(--accent-cyan)]" aria-hidden />
              {site.location}
            </span>
            <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3 py-1">
              {site.openTo}
            </span>
          </div>

          <h1 className="mt-8 font-display text-[var(--text-hero)] leading-[var(--leading-tight)] tracking-tight text-[var(--text-primary)]">
            {site.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            {site.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
            {site.positioning}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-paylite)] px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-8px_var(--accent-paylite)] transition-opacity hover:opacity-90"
            >
              View selected works
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={site.cvPath}
              download
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--text-primary)]"
            >
              <Download className="size-4" aria-hidden />
              Download CV
            </a>
            <Link
              href="/contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-[var(--text-secondary)]"
            >
              Contact
            </Link>
          </div>
          </div>

          <ProfilePhoto size="xl" priority className="mx-auto lg:mx-0" />
        </div>
      </Container>
    </section>
  );
}

export function EducationStrip() {
  const { education } = site;

  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-glass)]">
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
            <span className="rounded-full border border-[var(--border-accent)] bg-[color-mix(in_srgb,var(--accent-cyan)_10%,transparent)] px-4 py-2 text-xs text-[var(--accent-cyan)]">
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
        <div className="glass relative overflow-hidden rounded-[var(--radius-card)] p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--accent-paylite)_15%,transparent),transparent_55%)]"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
              Ready to see how I decide, not just what I ship?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              Every case study documents problem context, stack trade-offs, real
              challenges, and production thinking — starting with PayLite X and
              StudentMove live demos.
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
