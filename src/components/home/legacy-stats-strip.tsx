import { site } from "@/content/site";
import { Container } from "@/components/layout/container";

export function LegacyStatsStrip() {
  return (
    <section className="border-b border-[var(--border-subtle)] py-8">
      <Container>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
          At a glance
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {site.hero.legacyStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-4 py-4 text-center sm:px-5"
            >
              <p className="font-display text-2xl text-[var(--accent-paylite)] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--text-dim)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
