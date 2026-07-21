import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Shield,
  Zap,
} from "lucide-react";
import { getProjectBySlug } from "@/content/projects";
import { payliteLaunch } from "@/content/case-studies/paylite-x";
import { PayliteArchitecture } from "@/components/case-studies/paylite-architecture";
import { PayliteFusionTable } from "@/components/case-studies/paylite-fusion-table";
import { PayliteLiveDemo } from "@/components/case-studies/paylite-live-demo";
import { PayliteOtpFlow } from "@/components/case-studies/paylite-otp-flow";
import { Container } from "@/components/layout/container";

export function PayliteLaunchCaseStudy() {
  const project = getProjectBySlug("paylite-x");
  if (!project) return null;

  const { demo } = payliteLaunch;

  return (
    <article>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[var(--border-subtle)] pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--accent-paylite)] opacity-[0.09] blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[var(--accent-cyan)] opacity-[0.06] blur-[100px]" />
        </div>

        <Container className="relative">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All works
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent-paylite)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent-paylite)_10%,transparent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
                Launch case study · Tier 1 flagship
              </p>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.05] tracking-tight text-[var(--text-primary)]">
                PayLite X
              </h1>
              <p className="mt-4 text-lg text-[var(--text-secondary)] sm:text-xl">
                {project.tagline}
              </p>

              <div className="mt-8 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
                  Problem
                </p>
                <p className="max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                  {project.problem}
                </p>
              </div>
            </div>

            <div className="glass rounded-[var(--radius-card)] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
                Live now
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {payliteLaunch.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-2xl text-[var(--accent-cyan)] sm:text-3xl">
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={demo.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--accent-paylite)] px-4 py-2.5 text-sm font-medium text-white"
                >
                  Open demo
                  <ExternalLink className="size-3.5" aria-hidden />
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm"
                >
                  <Github className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Approach (sticky scrolly intro) ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
                Approach
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                Full-stack fintech simulation — not a UI clone
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                {project.approach}
              </p>
              <ul className="space-y-3">
                {project.whyStack.map((item) => (
                  <li
                    key={item}
                    className="glass flex gap-3 rounded-xl px-4 py-3 text-sm text-[var(--text-muted)]"
                  >
                    <Zap
                      className="mt-0.5 size-4 shrink-0 text-[var(--accent-cyan)]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <PayliteLiveDemo />
      <PayliteFusionTable />
      <PayliteArchitecture />
      <PayliteOtpFlow />

      {/* ── Challenges ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="text-xs uppercase tracking-[0.25em] text-[#fbbf24]">
            Challenges
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
            Decisions that separate demos from systems
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.challenges.map((challenge) => (
              <div
                key={challenge}
                className="glass rounded-[var(--radius-card)] p-5 text-sm leading-relaxed text-[var(--text-muted)]"
              >
                {challenge}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Impact + API ── */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#34d399]">
                Impact
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                What changed
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
                {project.impact}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href={demo.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-cyan)] hover:underline"
                >
                  paylite-web.onrender.com
                </Link>
                <span className="text-[var(--text-dim)]">·</span>
                <Link
                  href={demo.apiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-cyan)] hover:underline"
                >
                  paylite-api.onrender.com
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-dim)]">
                API surface
              </p>
              <ul className="mt-4 space-y-2">
                {payliteLaunch.apiHighlights.map((endpoint) => (
                  <li
                    key={endpoint}
                    className="font-mono text-xs text-[var(--text-muted)]"
                  >
                    <span className="text-[var(--accent-cyan)]">→</span>{" "}
                    {endpoint}
                  </li>
                ))}
              </ul>
              <Link
                href={demo.apiDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--accent-paylite)] hover:underline"
              >
                OpenAPI docs
                <ExternalLink className="size-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Production ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex items-start gap-4">
            <Shield
              className="size-8 shrink-0 text-[var(--accent-paylite)]"
              aria-hidden
            />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-dim)]">
                Production path
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                If this shipped beyond a portfolio demo
              </h2>
              <ul className="mt-6 space-y-3">
                {project.productionNotes.map((note) => (
                  <li
                    key={note}
                    className="border-l-2 border-[var(--accent-paylite)] pl-4 text-sm leading-relaxed text-[var(--text-muted)]"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[var(--border-subtle)] pb-20 pt-16">
        <Container>
          <div className="glass flex flex-col items-start justify-between gap-6 rounded-[var(--radius-card)] p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl text-[var(--text-primary)] sm:text-2xl">
                Next: StudentMove transport launch
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Team full-stack · Laravel PWA · Firebase GPS · SSLCommerz
              </p>
            </div>
            <Link
              href="/works/studentmove"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-cyan)] px-5 py-2.5 text-sm font-medium text-[var(--bg-void)]"
            >
              StudentMove case study
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
