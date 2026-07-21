import { payliteLaunch } from "@/content/case-studies/paylite-x";
import { Container } from "@/components/layout/container";

export function PayliteArchitecture() {
  const { layers, flows } = payliteLaunch.architecture;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
              Architecture
            </p>
            <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
              Why the stack is split — and what each layer owns
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              Recruiters open the React/Three.js client first. The interview
              depth is the FastAPI ledger: paisa integers, OTP/PIN, SSE, and
              deployable ops — not fake frontend state.
            </p>

            <ul className="mt-8 space-y-3">
              {flows.map((flow) => (
                <li
                  key={flow}
                  className="flex gap-2 font-mono text-xs leading-relaxed text-[var(--text-dim)]"
                >
                  <span className="text-[var(--accent-cyan)]">→</span>
                  {flow}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <div
                key={layer.id}
                className="glass relative overflow-hidden rounded-[var(--radius-card)] p-6"
              >
                {index < layers.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -bottom-4 left-8 h-8 w-px bg-gradient-to-b from-[var(--accent-cyan)] to-transparent"
                  />
                )}
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-paylite)]">
                  Layer {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl text-[var(--text-primary)]">
                  {layer.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-[var(--accent-cyan)]">
                  {layer.tech}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {layer.detail}
                </p>
              </div>
            ))}

            <div className="rounded-[var(--radius-card)] border border-dashed border-[var(--border-accent)] p-6 text-center">
              <p className="font-mono text-xs text-[var(--text-dim)]">
                Web ↔ API ↔ SQLite · CORS + JWT boundary
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
