"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { ProfilePhoto } from "@/components/layout/profile-photo";
import { truncate } from "@/lib/projects-ui";
import {
  ConstellationCanvas,
  useConstellationState,
} from "@/components/engineer/constellation-scene";

export function ConstellationHero() {
  const { activeSlug, setActiveSlug, activeProject, openProject } =
    useConstellationState();

  return (
    <section className="relative min-h-[92dvh] overflow-hidden border-b border-[var(--border-subtle)]">
      {/* Shader-style backdrop layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--accent-paylite)_12%,transparent),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,color-mix(in_srgb,var(--accent-cyan)_10%,transparent),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
      </div>

      {/* WebGL canvas */}
      <div className="absolute inset-0 z-[1]">
        <ConstellationCanvas
          activeSlug={activeSlug}
          onSelect={setActiveSlug}
        />
      </div>

      {/* UI overlay */}
      <div className="pointer-events-none relative z-[2] flex min-h-[92dvh] flex-col">
        <Container className="flex flex-1 flex-col justify-between py-10 sm:py-14">
          <div className="pointer-events-auto max-w-xl">
            <div className="flex items-start gap-4">
              <ProfilePhoto
                size="md"
                rounded="full"
                priority
                className="hidden border-[var(--border-accent)] sm:block"
              />
              <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
              Engineer mode · Project constellation
            </p>
            <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] text-[var(--text-primary)] drop-shadow-lg">
              {site.name}
            </h1>
            <p className="mt-3 text-base text-[var(--text-secondary)] drop-shadow-md sm:text-lg">
              {site.tagline}
            </p>
            <p className="mt-2 text-xs text-[var(--text-dim)]">
              Hover nodes · click to open case study
            </p>
              </div>
            </div>
          </div>

          {activeProject && (
            <div className="pointer-events-auto mt-8 max-w-md sm:mt-0">
              <div className="glass rounded-[var(--radius-card)] border border-[var(--border-accent)] p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
                  Active node
                </p>
                <h2 className="mt-2 font-display text-xl text-[var(--text-primary)]">
                  {activeProject.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {truncate(activeProject.hook, 120)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => openProject(activeSlug)}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-cyan)] px-4 py-2 text-xs font-medium text-[var(--bg-void)]"
                  >
                    Open case study
                    <ArrowRight className="size-3.5" aria-hidden />
                  </button>
                  {activeProject.liveUrl && (
                    <Link
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass glass-hover rounded-full px-4 py-2 text-xs text-[var(--text-primary)]"
                    >
                      Live demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="pointer-events-auto mt-8 flex flex-wrap gap-2">
            <Link
              href="/works"
              className="glass glass-hover rounded-full px-4 py-2 text-xs text-[var(--text-secondary)]"
            >
              All works
            </Link>
            <a
              href={site.cvPath}
              download
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[var(--text-secondary)]"
            >
              <Download className="size-3.5" aria-hidden />
              CV
            </a>
          </div>
        </Container>

        <div className="pointer-events-none pb-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-dim)] animate-pulse">
            Scroll · explore thinking-first sections below
          </p>
        </div>
      </div>

      {/* Bottom fade into page content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-[var(--bg-void)] to-transparent"
      />
    </section>
  );
}

export function ConstellationFallback() {
  return (
    <section className="relative flex min-h-[92dvh] items-center justify-center border-b border-[var(--border-subtle)] bg-[var(--bg-void)]">
      <div className="text-center">
        <div className="mx-auto mb-4 size-12 animate-spin rounded-full border-2 border-[var(--border-subtle)] border-t-[var(--accent-cyan)]" />
        <p className="text-sm text-[var(--text-muted)]">
          Loading project constellation…
        </p>
      </div>
    </section>
  );
}
