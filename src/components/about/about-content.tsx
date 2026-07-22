"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Award,
  BookOpen,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { ProfilePhoto } from "@/components/layout/profile-photo";
import { cn } from "@/lib/cn";

export function AboutPageContent() {
  return (
    <>
      <section className="border-b border-[var(--border-subtle)] pb-16 pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <ProfilePhoto size="xl" priority className="mx-auto shrink-0 lg:mx-0" />
            <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            About
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[var(--text-section)] leading-[var(--leading-tight)] text-[var(--text-primary)]">
            Building systems with documented thinking
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            {site.positioning}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
            {site.thinkingHook}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[var(--text-secondary)]">
              <MapPin className="size-3.5 text-[var(--accent-cyan)]" aria-hidden />
              {site.location}
            </span>
            <Link
              href={`mailto:${site.email}`}
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-[var(--text-secondary)]"
            >
              <Mail className="size-3.5" aria-hidden />
              {site.email}
            </Link>
          </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
                Philosophy
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)]">
                Problem → Approach → Impact
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                I treat every project as a decision log: what hurt, what I chose,
                what trade-offs I accepted, and what would change in production.
              </p>
            </div>

            <div className="glass rounded-[var(--radius-card)] p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <Sparkles
                  className="mt-1 size-5 shrink-0 text-[var(--accent-cyan)]"
                  aria-hidden
                />
                <div className="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  <p>
                    From{" "}
                    <Link
                      href="/works/paylite-x"
                      className="text-[var(--accent-paylite)] hover:underline"
                    >
                      PayLite X
                    </Link>{" "}
                    (solo fintech simulation) to{" "}
                    <Link
                      href="/works/studentmove"
                      className="text-[var(--accent-cyan)] hover:underline"
                    >
                      StudentMove
                    </Link>{" "}
                    (team transport platform) to multimodal ML research — the
                    through-line is shipping real constraints, not tutorial clones.
                  </p>
                  <p>
                    {site.openTo}. Based in {site.location}, open to engineering
                    teams that value clear communication and production-minded
                    delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-16 sm:py-24">
        <Container>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            Journey
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
            Timeline
          </h2>

          <div className="relative mt-12">
            <div
              aria-hidden
              className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--border-subtle)] to-transparent sm:left-[11px]"
            />

            <ul className="space-y-10">
              {site.timeline.map((entry, index) => (
                <li key={`${entry.year}-${entry.title}`} className="relative pl-10 sm:pl-14">
                  <span
                    className={cn(
                      "absolute left-0 top-1.5 size-[15px] rounded-full border-2 sm:size-[23px]",
                      index === 0
                        ? "border-[var(--accent-paylite)] bg-[color-mix(in_srgb,var(--accent-paylite)_30%,transparent)]"
                        : "border-[var(--accent-cyan)] bg-[var(--bg-elevated)]",
                    )}
                    aria-hidden
                  />
                  <p className="font-mono text-xs text-[var(--accent-cyan)]">
                    {entry.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-[var(--text-primary)]">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--text-dim)]">
                    {entry.org}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
                    {entry.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="glass rounded-[var(--radius-card)] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap
                  className="size-5 text-[var(--accent-cyan)]"
                  aria-hidden
                />
                <h2 className="font-display text-xl text-[var(--text-primary)]">
                  Education
                </h2>
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-medium text-[var(--text-primary)]">
                    {site.education.degree}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {site.education.institution}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                    {site.education.result}
                  </span>
                  <span className="rounded-full border border-[var(--border-accent)] px-3 py-1 text-xs text-[var(--accent-cyan)]">
                    {site.education.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="glass rounded-[var(--radius-card)] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Award className="size-5 text-[var(--accent-paylite)]" aria-hidden />
                <h2 className="font-display text-xl text-[var(--text-primary)]">
                  DIU CPC contests
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {site.contests.map((contest) => (
                  <li
                    key={contest}
                    className="flex gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent-paylite)]" />
                    {contest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border-subtle)] py-16 sm:py-20">
        <Container>
          <div className="glass max-w-3xl rounded-[var(--radius-card)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <BookOpen className="size-5 text-[var(--accent-cyan)]" aria-hidden />
              <h2 className="font-display text-xl text-[var(--text-primary)]">
                Training & certifications
              </h2>
            </div>
            <ul className="mt-5 space-y-3">
              {site.training.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-[var(--accent-cyan)] pl-4 text-sm text-[var(--text-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/resume"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent-paylite)] px-5 py-2.5 text-sm font-medium text-white"
            >
              <Download className="size-4" aria-hidden />
              Full interactive resume
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
