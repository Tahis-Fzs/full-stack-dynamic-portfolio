import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import {
  SectionHeader,
  SectionShell,
} from "@/components/layout/section-header";

export function SkillsBento() {
  return (
    <SectionShell>
      <Container>
        <SectionHeader
          eyebrow="Stack"
          title="What I use day to day"
          description="Languages, frameworks, and tools behind PayLite X, StudentMove, and the rest of the portfolio."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.skillGroups.map((group) => (
            <div key={group.title} className="premium-card p-6 sm:p-7">
              <p className="font-display text-lg text-[var(--text-primary)]">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-[1.65] text-[var(--text-muted)]"
                  >
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent-cyan)]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
