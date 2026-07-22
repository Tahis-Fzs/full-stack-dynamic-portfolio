import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import {
  SectionHeader,
  SectionShell,
} from "@/components/layout/section-header";

export function ExperienceHighlights() {
  return (
    <SectionShell variant="void">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Design practice & real-world work"
          description="From client-facing UI/UX to enterprise consulting — the same rigor I bring to engineering case studies."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {site.experiences.map((item) => (
            <div key={item.title} className="premium-card p-6 sm:p-7">
              <h3 className="font-display text-xl text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-[var(--text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
