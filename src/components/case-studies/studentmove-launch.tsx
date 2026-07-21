import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { getProjectBySlug } from "@/content/projects";
import { studentmoveLaunch } from "@/content/case-studies/studentmove";
import {
  StudentmoveArchitecture,
  StudentmovePaymentFlow,
  StudentmoveTeamStory,
} from "@/components/case-studies/studentmove-architecture";
import { StudentmoveLiveDemo } from "@/components/case-studies/studentmove-live-demo";
import { StudentmoveModules } from "@/components/case-studies/studentmove-modules";
import { StudentmoveRoles } from "@/components/case-studies/studentmove-roles";
import { Container } from "@/components/layout/container";

export function StudentmoveLaunchCaseStudy() {
  const project = getProjectBySlug("studentmove");
  if (!project) return null;

  const { demo } = studentmoveLaunch;

  return (
    <article>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[var(--border-subtle)] pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--accent-cyan)] opacity-[0.08] blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[var(--accent-paylite)] opacity-[0.05] blur-[100px]" />
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
              <p className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent-cyan)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent-cyan)_10%,transparent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                Launch case study · Team full-stack · Dhaka
              </p>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.05] tracking-tight text-[var(--text-primary)]">
                StudentMove
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
              <div className="flex items-center gap-2 text-xs text-[var(--text-dim)]">
                <Users className="size-3.5 text-[var(--accent-cyan)]" aria-hidden />
                {project.role} · {project.teamSize}-person team
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {studentmoveLaunch.metrics.map((m) => (
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
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--accent-cyan)] px-4 py-2.5 text-sm font-medium text-[var(--bg-void)]"
                >
                  Open demo
                  <ExternalLink className="size-3.5" aria-hidden />
                </Link>
                <Link
                  href={demo.webRepo}
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

      {/* ── Approach ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
                Approach
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                Smart transport as a deployed system — not a wireframe
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

      <StudentmoveTeamStory />
      <StudentmoveLiveDemo />
      <StudentmoveModules />
      <StudentmoveRoles />
      <StudentmoveArchitecture />
      <StudentmovePaymentFlow />

      {/* ── Challenges ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="text-xs uppercase tracking-[0.25em] text-[#fbbf24]">
            Challenges
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
            Real team constraints — not solo-project simplicity
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

      {/* ── Impact + related repos ── */}
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
              <Link
                href={demo.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-[var(--accent-cyan)] hover:underline"
              >
                studentmove-app-d866.onrender.com
              </Link>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-dim)]">
                Related repositories
              </p>
              <div className="mt-4 space-y-3">
                <Link
                  href={demo.webRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[var(--text-secondary)]"
                >
                  <Github className="size-4 shrink-0" aria-hidden />
                  Laravel PWA — StudentMove Smart Transport
                </Link>
                <Link
                  href={demo.flutterRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[var(--text-secondary)]"
                >
                  <Github className="size-4 shrink-0" aria-hidden />
                  Flutter + Firebase mobile client
                </Link>
                <Link
                  href="/works/studentmove-flutter"
                  className="text-sm text-[var(--accent-paylite)] hover:underline"
                >
                  Read Flutter companion case study →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Production ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex items-start gap-4">
            <Shield
              className="size-8 shrink-0 text-[var(--accent-cyan)]"
              aria-hidden
            />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-dim)]">
                Production path
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                If StudentMove operated city-wide
              </h2>
              <ul className="mt-6 space-y-3">
                {project.productionNotes.map((note) => (
                  <li
                    key={note}
                    className="border-l-2 border-[var(--accent-cyan)] pl-4 text-sm leading-relaxed text-[var(--text-muted)]"
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
                Compare: PayLite X fintech flagship
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Solo product · FastAPI ledger · OTP+PIN · 12 MFS services
              </p>
            </div>
            <Link
              href="/works/paylite-x"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-paylite)] px-5 py-2.5 text-sm font-medium text-white"
            >
              PayLite X case study
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
