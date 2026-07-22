export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="signal-void-backdrop absolute inset-0" />
      <div className="signal-lattice absolute inset-0 opacity-80" />
      <div className="absolute -left-24 top-[12%] size-[420px] rounded-full bg-[var(--accent-paylite)] opacity-[0.09] blur-[120px]" />
      <div className="absolute -right-16 top-[8%] size-[340px] rounded-full bg-[var(--accent-cyan)] opacity-[0.08] blur-[100px]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--bg-void)] via-[color-mix(in_srgb,var(--bg-void)_85%,transparent)] to-transparent" />
    </div>
  );
}
