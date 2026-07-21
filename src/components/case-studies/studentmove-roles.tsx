import { studentmoveLaunch } from "@/content/case-studies/studentmove";
import { Container } from "@/components/layout/container";

export function StudentmoveRoles() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            Role architecture
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
            Three actors — one platform, scoped permissions
          </h2>
          <p className="mt-4 text-sm text-[var(--text-muted)] sm:text-base">
            Transport systems fail when every user sees everything. StudentMove
            separates student, driver, and admin capabilities at the data layer.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {studentmoveLaunch.roles.map((role) => (
            <div
              key={role.id}
              className="glass overflow-hidden rounded-[var(--radius-card)] p-6"
            >
              <div
                className="mb-4 h-1 w-12 rounded-full"
                style={{ background: role.color }}
              />
              <h3 className="font-display text-xl text-[var(--text-primary)]">
                {role.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {role.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full"
                      style={{ background: role.color }}
                    />
                    {cap}
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
