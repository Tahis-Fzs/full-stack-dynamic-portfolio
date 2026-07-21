import { payliteLaunch } from "@/content/case-studies/paylite-x";
import { Container } from "@/components/layout/container";

export function PayliteOtpFlow() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-paylite)]">
            Security flow
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
            OTP + PIN — production-shaped, not password-only
          </h2>
          <p className="mt-4 text-sm text-[var(--text-muted)] sm:text-base">
            Most portfolio payment demos skip the hard part. PayLite forces fee
            preview → OTP → PIN before any ledger write.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--accent-paylite)] via-[var(--accent-cyan)] to-transparent sm:block"
          />

          <div className="space-y-6 sm:pl-12">
            {payliteLaunch.otpFlow.map((item, index) => (
              <div
                key={item.step}
                className="glass relative rounded-[var(--radius-card)] p-6 sm:max-w-2xl"
                style={{
                  marginLeft: index % 2 === 1 ? "auto" : undefined,
                }}
              >
                <span className="font-mono text-2xl font-light text-[var(--accent-paylite)]">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-xl text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
