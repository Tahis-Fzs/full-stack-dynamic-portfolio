import { studentmoveLaunch } from "@/content/case-studies/studentmove";
import { Container } from "@/components/layout/container";

export function StudentmoveModules() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-paylite)]">
            Platform modules
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
            What the system actually delivers
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {studentmoveLaunch.modules.map((mod) => (
            <div
              key={mod.title}
              className="glass glass-hover rounded-[var(--radius-card)] p-5"
            >
              <h3 className="font-display text-lg text-[var(--text-primary)]">
                {mod.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {mod.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
