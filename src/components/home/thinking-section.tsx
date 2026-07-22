import { Brain, Lightbulb, Target, TrendingUp } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";

const pillars = [
  {
    icon: Target,
    label: "Problem",
    text: "What pain existed — and why a demo or paper wasn't enough.",
    color: "var(--accent-paylite)",
  },
  {
    icon: Lightbulb,
    label: "Approach",
    text: "Architecture and stack choices with explicit trade-offs.",
    color: "var(--accent-cyan)",
  },
  {
    icon: TrendingUp,
    label: "Impact",
    text: "What changed — live deploy, research rigor, or workflow outcome.",
    color: "#a78bfa",
  },
  {
    icon: Brain,
    label: "Production",
    text: "How you'd scale, secure, and operate it beyond the portfolio.",
    color: "#34d399",
  },
];

export function ThinkingSection() {
  return (
    <section className="pb-16 pt-4">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            How to read this portfolio
          </p>
          <h2 className="mt-4 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
            How each project is documented
          </h2>
          <p className="mt-4 text-sm leading-[1.7] text-[var(--text-muted)] sm:text-base">
            {site.thinkingHook}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="glass glass-hover rounded-[var(--radius-card)] p-5"
              >
                <div
                  className="flex size-10 items-center justify-center rounded-lg border border-[var(--border-subtle)]"
                  style={{
                    background: `color-mix(in srgb, ${pillar.color} 12%, transparent)`,
                  }}
                >
                  <Icon className="size-4" style={{ color: pillar.color }} aria-hidden />
                </div>
                <p
                  className="mt-4 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: pillar.color }}
                >
                  {pillar.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
