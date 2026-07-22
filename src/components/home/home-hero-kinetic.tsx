"use client";

import { type CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { HeroBackdrop } from "@/components/home/hero-backdrop";
import { HeroPortraitTilt } from "@/components/home/hero-portrait-tilt";
import { HeroStats } from "@/components/home/hero-stats";
import { KineticText } from "@/components/home/kinetic-text";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const MOTION_READY_EVENT = "studio-tahsin:ready";

export function HomeHeroKinetic() {
  const reduceMotion = useReducedMotion();
  const [motionReady, setMotionReady] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setMotionReady(true);
      return;
    }

    const start = () => setMotionReady(true);
    window.addEventListener(MOTION_READY_EVENT, start);
    const fallback = window.setTimeout(start, 1300);

    return () => {
      window.removeEventListener(MOTION_READY_EVENT, start);
      window.clearTimeout(fallback);
    };
  }, [reduceMotion]);

  return (
    <section className="relative min-h-[min(88dvh,860px)] overflow-hidden border-b border-[var(--border-subtle)]">
      <HeroBackdrop />

      <Container className="relative z-[1] pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div
          className={motionReady ? "kinetic-run" : undefined}
          style={{ perspective: "1200px" }}
        >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-3xl flex-1">
            <div
              className="kinetic-fade-in flex flex-wrap items-center gap-2"
              style={{ "--fade-delay": "120ms" } as CSSProperties}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-signal)] bg-[var(--signal-wash)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-paylite)]">
                <Sparkles className="size-3" aria-hidden />
                {site.designSystem.name}
              </span>
              <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--text-dim)]">
                {site.designSystem.tagline}
              </span>
            </div>

            <p
              className="kinetic-fade-in mt-6 text-xs uppercase tracking-[0.22em] text-[var(--accent-cyan)]"
              style={{ "--fade-delay": "220ms" } as CSSProperties}
            >
              {site.hero.role}
            </p>

            <KineticText
              as="h1"
              text={site.title}
              splitBy="char"
              run={motionReady}
              baseDelayMs={280}
              staggerMs={48}
              className="brand-wordmark mt-3 text-gradient-signal"
            />

            <KineticText
              as="p"
              text={site.name}
              splitBy="word"
              run={motionReady}
              baseDelayMs={520}
              staggerMs={55}
              className="mt-2 font-display text-xl text-[var(--text-secondary)] sm:text-2xl"
            />

            <KineticText
              as="p"
              text={site.hero.headline}
              splitBy="word"
              run={motionReady}
              baseDelayMs={680}
              staggerMs={38}
              className="mt-6 max-w-2xl font-display text-lg leading-[var(--leading-snug)] text-[var(--text-primary)] sm:text-xl"
            />

            <p
              className="kinetic-fade-in mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base"
              style={{ "--fade-delay": "860ms" } as CSSProperties}
            >
              {site.hero.support}
            </p>

            <div
              className="kinetic-fade-in mt-6 flex flex-wrap items-center gap-3 text-xs text-[var(--text-dim)]"
              style={{ "--fade-delay": "940ms" } as CSSProperties}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3 py-1">
                <MapPin className="size-3 text-[var(--accent-cyan)]" aria-hidden />
                {site.location}
              </span>
              <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3 py-1">
                {site.openTo}
              </span>
            </div>

            <div
              className="kinetic-fade-in mt-8 flex flex-wrap gap-3"
              style={{ "--fade-delay": "1020ms" } as CSSProperties}
            >
              <Link
                href="/works"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-paylite)] px-6 py-3 text-sm font-medium text-[var(--on-signal)] shadow-[0_0_48px_-10px_var(--accent-paylite)] transition-opacity hover:opacity-90"
              >
                See the work
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
                Message me
              </Link>
            </div>

            <div className="mt-10">
              <HeroStats run={motionReady} />
            </div>
          </div>

          <div className="mx-auto shrink-0 lg:mx-0 lg:pt-8">
            <HeroPortraitTilt />
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
