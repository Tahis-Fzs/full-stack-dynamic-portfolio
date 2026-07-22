import { site } from "@/content/site";
import { Container } from "@/components/layout/container";

export function DesignSkillsSection() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-14 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
              UI/UX skills
            </p>
            <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)]">
              Design expertise
            </h2>
            <p className="mt-3 text-sm leading-[1.65] text-[var(--text-muted)]">
              From the original portfolio — Figma-first skills I apply alongside
              full-stack delivery.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {site.designSkills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-void)] p-4"
              >
                <p className="font-medium text-[var(--text-primary)]">{skill.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DesignProcessSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
          Design process
        </p>
        <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
          How I work on UI/UX projects
        </h2>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {site.designProcess.map((step) => (
            <li
              key={step.step}
              className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4"
            >
              <p className="font-mono text-xs text-[var(--accent-cyan)]">{step.step}</p>
              <p className="mt-2 font-display text-base text-[var(--text-primary)]">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
