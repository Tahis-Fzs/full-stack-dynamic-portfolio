import { Brain, Lightbulb, Target, TrendingUp } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import {
  SectionHeader,
  SectionShell,
} from "@/components/layout/section-header";

const pillars = [
  {
    icon: Target,
    label: "Problem",
    text: "What hurt, and why a screenshot alone would not answer it.",
    color: "var(--accent-paylite)",
  },
  {
    icon: Lightbulb,
    label: "Approach",
    text: "Architecture, stack choices, and the trade-offs I accepted.",
    color: "var(--accent-cyan)",
  },
  {
    icon: TrendingUp,
    label: "Impact",
    text: "Live deploy, research rigor, or a workflow that actually changed.",
    color: "#a78bfa",
  },
  {
    icon: Brain,
    label: "Production",
    text: "How I would scale, secure, and operate it beyond the portfolio.",
    color: "#34d399",
  },
];

export function ThinkingSection() {
  return (
    <SectionShell>
      <Container>
        <SectionHeader
          eyebrow="Case study format"
          title="Every project tells a full story"
          description={site.thinkingHook}
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.label} className="premium-card p-5 sm:p-6">
                <div
                  className="flex size-10 items-center justify-center rounded-xl border border-[var(--border-subtle)]"
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
                <p className="mt-2 text-sm leading-[1.65] text-[var(--text-muted)]">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}
