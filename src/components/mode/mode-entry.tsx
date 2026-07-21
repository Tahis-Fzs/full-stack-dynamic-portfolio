"use client";

import { Briefcase, Cpu, Sparkles } from "lucide-react";
import type { ExploreMode } from "@/content/types";
import { site } from "@/content/site";
import { useExploreMode } from "@/components/providers/mode-provider";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";

const modes: {
  id: ExploreMode;
  title: string;
  subtitle: string;
  detail: string;
  icon: typeof Briefcase;
  accent: string;
}[] = [
  {
    id: "recruiter",
    title: "Recruiter",
    subtitle: "~30 seconds",
    detail: "Problem → Impact cards, skills, CV, contact. No WebGL. Fast scan.",
    icon: Briefcase,
    accent: "var(--accent-paylite)",
  },
  {
    id: "engineer",
    title: "Engineer",
    subtitle: "Full experience",
    detail: "Constellation hero, scroll cinema, case-study depth. WebGL lazy-loaded.",
    icon: Cpu,
    accent: "var(--accent-cyan)",
  },
];

export function ModeEntry() {
  const { setMode } = useExploreMode();

  return (
    <section
      className="relative flex min-h-[calc(100dvh-4rem)] items-center py-[var(--section-y)]"
      aria-labelledby="mode-entry-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-paylite)] opacity-[0.07] blur-[100px]" />
        <div className="absolute right-[10%] top-[20%] h-[280px] w-[280px] rounded-full bg-[var(--accent-cyan)] opacity-[0.06] blur-[80px]" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-4 py-1.5 text-xs text-[var(--text-muted)]">
            <Sparkles className="size-3.5 text-[var(--accent-cyan)]" aria-hidden />
            Welcome to {site.title}
          </div>

          <h1
            id="mode-entry-title"
            className="font-display text-[var(--text-hero)] leading-[var(--leading-tight)] tracking-tight text-[var(--text-primary)]"
          >
            How do you want to{" "}
            <span className="text-gradient-cyan">explore</span>?
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-[var(--text-muted)] sm:text-lg">
            {site.thinkingHook}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-6">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setMode(mode.id)}
                className={cn(
                  "glass glass-hover group relative overflow-hidden rounded-[var(--radius-card)] p-6 text-left sm:p-8",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]",
                )}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-80"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${mode.accent}, transparent)`,
                  }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex size-11 items-center justify-center rounded-xl border border-[var(--border-subtle)]"
                    style={{
                      background: `color-mix(in srgb, ${mode.accent} 12%, transparent)`,
                    }}
                  >
                    <Icon className="size-5" style={{ color: mode.accent }} aria-hidden />
                  </div>
                  <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                    {mode.subtitle}
                  </span>
                </div>

                <h2 className="mt-6 font-display text-2xl text-[var(--text-primary)]">
                  {mode.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {mode.detail}
                </p>

                <span
                  className="mt-6 inline-flex text-sm font-medium transition-transform group-hover:translate-x-1"
                  style={{ color: mode.accent }}
                >
                  Enter →
                </span>
              </button>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-lg text-center text-xs text-[var(--text-dim)]">
          Preference saved on this device. Toggle Recruiter / Engineer anytime from
          the navigation bar.
        </p>
      </Container>
    </section>
  );
}
