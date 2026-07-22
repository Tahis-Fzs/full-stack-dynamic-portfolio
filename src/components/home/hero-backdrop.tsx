export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="signal-void-backdrop absolute inset-0" />
      <div className="signal-lattice absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg-void)] to-transparent" />
    </div>
  );
}
