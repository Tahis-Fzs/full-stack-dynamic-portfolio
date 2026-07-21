import { studentmoveLaunch } from "@/content/case-studies/studentmove";
import { Container } from "@/components/layout/container";

export function StudentmoveArchitecture() {
  const { layers, integrations } = studentmoveLaunch.architecture;

  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
              Architecture
            </p>
            <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
              Laravel + Firebase + SSLCommerz — why not one stack?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              Each layer solves a constraint: Laravel for admin CRUD speed,
              Firebase for live GPS on student budget, SSLCommerz for local
              payments, Flutter for native mobile parity.
            </p>

            <ul className="mt-8 space-y-3">
              {integrations.map((flow) => (
                <li
                  key={flow}
                  className="flex gap-2 text-xs leading-relaxed text-[var(--text-dim)]"
                >
                  <span className="shrink-0 text-[var(--accent-cyan)]">→</span>
                  {flow}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <div
                key={layer.id}
                className="glass rounded-[var(--radius-card)] p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-cyan)]">
                  Layer {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl text-[var(--text-primary)]">
                  {layer.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-[var(--accent-paylite)]">
                  {layer.tech}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function StudentmovePaymentFlow() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-paylite)]">
            Payment flow
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
            SSLCommerz pass purchase — server-verified, not client-trusted
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {studentmoveLaunch.paymentFlow.map((item) => (
            <div
              key={item.step}
              className="glass rounded-[var(--radius-card)] p-6"
            >
              <span className="font-mono text-xl text-[var(--accent-paylite)]">
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-lg text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StudentmoveTeamStory() {
  const { team } = studentmoveLaunch;

  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-16 sm:py-20">
      <Container>
        <div className="glass max-w-3xl rounded-[var(--radius-card)] p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Team delivery
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)]">
            {team.headline}
          </h2>
          <ul className="mt-6 space-y-3">
            {team.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
