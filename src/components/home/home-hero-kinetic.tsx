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
    <section className="relative min-h-[min(88dvh,860px)] overflow-hidden">
      <HeroBackdrop />
      <div className="section-divider absolute inset-x-0 bottom-0 z-[2]" aria-hidden />

      <Container className="relative z-[1] pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className={motionReady ? "kinetic-run" : undefined}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="order-2 min-w-0 flex-1 lg:order-1 lg:max-w-[34rem]">
              <p
                className="kinetic-fade-in premium-eyebrow"
                style={{ "--fade-delay": "120ms" } as CSSProperties}
              >
                {site.brandName}
              </p>

              <h1
                className="hero-name-line brand-wordmark mt-5 text-gradient-signal"
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
                    staggerMs={26}
                    className="inline"
                  />
                )}
              </h1>

              <p
                className="kinetic-fade-in mt-3 text-base text-[var(--text-secondary)] sm:text-lg"
                style={{ "--fade-delay": "360ms" } as CSSProperties}
              >
                {site.profileRole}
              </p>

              <p
                className="kinetic-fade-in premium-lead mt-6 max-w-[52ch]"
                style={{ "--fade-delay": "480ms" } as CSSProperties}
              >
                {site.hero.headline}
              </p>

              <p
                className="kinetic-fade-in mt-3 max-w-[52ch] text-sm leading-[1.7] text-[var(--text-dim)]"
                style={{ "--fade-delay": "540ms" } as CSSProperties}
              >
                {site.hero.support}
              </p>

              <div
                className="kinetic-fade-in mt-6 flex flex-wrap items-center gap-2"
                style={{ "--fade-delay": "600ms" } as CSSProperties}
              >
                <span className="premium-btn-ghost !px-3 !py-1.5 !text-xs text-[var(--text-dim)]">
                  <MapPin className="size-3 text-[var(--accent-cyan)]" aria-hidden />
                  {site.location}
                </span>
              </div>

              <div
                className="kinetic-fade-in mt-8 flex flex-wrap gap-3"
                style={{ "--fade-delay": "680ms" } as CSSProperties}
              >
                <Link href="/works" className="premium-btn-primary">
                  View projects
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a href={site.cvPath} download className="premium-btn-ghost">
                  <Download className="size-4" aria-hidden />
                  Download CV
                </a>
                <Link href="/contact" className="premium-btn-ghost">
                  Contact
                </Link>
              </div>
            </div>

            <div className="order-1 mx-auto shrink-0 lg:order-2 lg:mx-0">
              <HeroPortraitTilt />
            </div>
          </div>

          <div
            className="kinetic-fade-in mt-12 sm:mt-14"
            style={{ "--fade-delay": "760ms" } as CSSProperties}
          >
            <HeroStats run={motionReady} />
          </div>
        </div>
      </Container>
    </section>
  );
}
