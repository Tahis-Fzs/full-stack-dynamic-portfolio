import { payliteLaunch } from "@/content/case-studies/paylite-x";
import { Container } from "@/components/layout/container";

export function PayliteFusionTable() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-paylite)]">
            Product thinking
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
            MFS feature fusion — what we borrowed & what we fixed
          </h2>
          <p className="mt-4 text-sm text-[var(--text-muted)] sm:text-base">
            PayLite X is a simulation, not a clone. Each row documents a design
            decision: take a real strength from Bangladesh/global MFS apps, then
            close a known weakness.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="pb-4 pr-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                  Inspired by
                </th>
                <th className="pb-4 pr-4 text-xs font-semibold uppercase tracking-wider text-[var(--accent-cyan)]">
                  Strength taken
                </th>
                <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-[var(--accent-paylite)]">
                  Weakness closed
                </th>
              </tr>
            </thead>
            <tbody>
              {payliteLaunch.fusion.map((row) => (
                <tr
                  key={row.inspired}
                  className="border-b border-[var(--border-subtle)] transition-colors hover:bg-[var(--surface-glass)]"
                >
                  <td className="py-4 pr-4 font-medium text-[var(--text-primary)]">
                    {row.inspired}
                  </td>
                  <td className="py-4 pr-4 text-[var(--text-secondary)]">
                    {row.strength}
                  </td>
                  <td className="py-4 text-[var(--text-muted)]">{row.closed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
            12 fused services
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {payliteLaunch.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
