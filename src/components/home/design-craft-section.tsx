import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import {
  SectionHeader,
  SectionShell,
} from "@/components/layout/section-header";

export function DesignCraftSection() {
  return (
    <SectionShell variant="elevated">
      <Container>
        <SectionHeader
          eyebrow="Design craft"
          title="How I design before I code"
          description="Figma-first skills and a repeatable process — carried over from the original portfolio and applied to shipped products."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.designSkills.map((skill) => (
            <div key={skill.title} className="premium-card p-5 sm:p-6">
              <h3 className="font-display text-lg text-[var(--text-primary)]">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.65] text-[var(--text-muted)]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {site.designProcess.map((step) => (
            <li key={step.step} className="premium-card p-4">
              <p className="font-mono text-xs text-[var(--accent-cyan)]">{step.step}</p>
              <p className="mt-2 font-display text-base text-[var(--text-primary)]">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </SectionShell>
  );
}
