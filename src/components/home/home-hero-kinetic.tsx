"use client";

import { type CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
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
    <section className="relative min-h-[min(82dvh,780px)] overflow-hidden border-b border-[var(--border-subtle)]">
      <HeroBackdrop />

      <Container className="relative z-[1] pb-14 pt-10 sm:pb-16 sm:pt-14">
        <div
          className={motionReady ? "kinetic-run" : undefined}
          style={{ perspective: "1200px" }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="order-2 min-w-0 flex-1 lg:order-1 lg:max-w-[640px]">
              <p
                className="kinetic-fade-in text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)]"
                style={{ "--fade-delay": "120ms" } as CSSProperties}
              >
                {site.hero.role}
              </p>

              <h1
                className="hero-name-line brand-wordmark mt-4 text-gradient-signal"
                aria-label={site.name}
              >
                {reduceMotion ? (
                  site.name
                ) : (
                  <KineticText
                    as="span"
                    text={site.name}
                    splitBy="char"
                    run={motionReady}
                    baseDelayMs={200}
                    staggerMs={28}
                    className="inline"
                  />
                )}
              </h1>

              <p
                className="kinetic-fade-in mt-2 text-sm font-medium text-[var(--text-secondary)] sm:text-base"
                style={{ "--fade-delay": "360ms" } as CSSProperties}
              >
                {site.brandName}
                <span className="mx-2 text-[var(--text-dim)]">·</span>
                {site.profileRole}
              </p>

              <p
                className="kinetic-fade-in mt-6 max-w-[58ch] text-base leading-[1.65] text-[var(--text-primary)] sm:text-lg"
                style={{ "--fade-delay": "480ms" } as CSSProperties}
              >
                {site.hero.headline}
              </p>

              <p
                className="kinetic-fade-in mt-4 max-w-[58ch] text-sm leading-[1.7] text-[var(--text-muted)] sm:text-[15px]"
                style={{ "--fade-delay": "560ms" } as CSSProperties}
              >
                {site.hero.support}
              </p>

              <div
                className="kinetic-fade-in mt-5 flex flex-wrap items-center gap-2.5 text-xs text-[var(--text-dim)]"
                style={{ "--fade-delay": "640ms" } as CSSProperties}
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
                className="kinetic-fade-in mt-7 flex flex-wrap gap-3"
                style={{ "--fade-delay": "720ms" } as CSSProperties}
              >
                <Link
                  href="/works"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-paylite)] px-6 py-3 text-sm font-medium text-[var(--on-signal)] shadow-[0_0_48px_-10px_var(--accent-paylite)] transition-opacity hover:opacity-90"
                >
                  View projects
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

            <div className="order-1 mx-auto shrink-0 lg:order-2 lg:mx-0 lg:pt-2">
              <HeroPortraitTilt />
            </div>
          </div>

          <div className="kinetic-fade-in mt-8" style={{ "--fade-delay": "820ms" } as CSSProperties}>
            <HeroStats run={motionReady} />
          </div>
        </div>
      </Container>
    </section>
  );
}
