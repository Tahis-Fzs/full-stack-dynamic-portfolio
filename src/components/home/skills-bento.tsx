import { site } from "@/content/site";
import { Container } from "@/components/layout/container";

export function SkillsBento() {
  return (
    <section className="pb-16">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            Capabilities
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
            Technical range
          </h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Full-stack delivery, applied ML research, and production-minded
            tooling — not a single-framework profile.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="glass rounded-[var(--radius-card)] p-6"
              style={{
                gridRow: index === 0 ? "span 1" : undefined,
              }}
            >
              <p className="font-display text-lg text-[var(--text-primary)]">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-[var(--text-muted)]"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]"
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
    </section>
  );
}
