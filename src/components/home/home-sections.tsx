import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Github,
  GraduationCap,
} from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { HomeHeroKinetic } from "@/components/home/home-hero-kinetic";
import { SectionShell } from "@/components/layout/section-header";

export function HomeHero() {
  return <HomeHeroKinetic />;
}

export function EducationStrip() {
  const { education } = site;

  return (
    <SectionShell variant="elevated">
      <Container>
        <div className="premium-card flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-accent)] bg-[color-mix(in_srgb,var(--accent-cyan)_10%,transparent)]">
              <GraduationCap
                className="size-5 text-[var(--accent-cyan)]"
                aria-hidden
              />
            </div>
            <div>
              <p className="premium-eyebrow">Education</p>
              <p className="mt-2 font-display text-xl text-[var(--text-primary)] sm:text-2xl">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {education.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:justify-end">
            <span className="rounded-full border border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--surface-glass)_80%,transparent)] px-4 py-2 text-xs text-[var(--text-secondary)]">
              {education.result}
            </span>
            <span className="rounded-full border border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--surface-glass)_80%,transparent)] px-4 py-2 text-xs text-[var(--text-secondary)]">
              {education.status}
            </span>
            <span className="rounded-full border border-[var(--border-accent)] bg-[color-mix(in_srgb,var(--accent-cyan)_10%,transparent)] px-4 py-2 text-xs text-[var(--accent-cyan)]">
              Class of {education.year}
            </span>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

export function HomeBottomCta() {
  return (
    <SectionShell variant="void">
      <Container>
        <div className="premium-card relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--accent-paylite)_22%,transparent),transparent_58%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--accent-cyan)_12%,transparent),transparent_55%)]"
          />
          <div className="relative max-w-2xl">
            <p className="premium-eyebrow">{site.brandName}</p>
            <h2 className="premium-title mt-4">
              Want the full story on PayLite X or StudentMove?
            </h2>
            <p className="premium-lead mt-4">
              Case studies cover the problem, architecture choices, and what I
              would change before production — with live links where available.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/works" className="premium-btn-primary">
                Explore works
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn-ghost"
              >
                <Github className="size-4" aria-hidden />
                GitHub
              </Link>
              <Link href="/resume" className="premium-btn-ghost">
                Full resume
                <ExternalLink className="size-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
