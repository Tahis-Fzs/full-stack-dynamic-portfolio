import { site } from "@/content/site";
import { Container } from "@/components/layout/container";

export function ExperienceHighlights() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
            Experience
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
            Design practice & real-world work
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {site.experiences.map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 sm:p-6"
            >
              <h3 className="font-display text-lg text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.65] text-[var(--text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
