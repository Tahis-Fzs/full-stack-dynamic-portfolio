import type { ReactNode } from "react";

interface PageStubProps {
  title: string;
  description: string;
  step: string;
  children?: ReactNode;
}

export function PageStub({ title, description, step, children }: PageStubProps) {
  return (
    <section className="py-[var(--section-y)]">
      <div className="mx-auto max-w-[var(--max-width)] px-5 sm:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
          {step}
        </p>
        <h1 className="mt-4 font-display text-[var(--text-section)] text-[var(--text-primary)]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">{description}</p>
        {children}
      </div>
    </section>
  );
}
