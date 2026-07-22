import { site } from "@/content/site";
import { BrandMark } from "@/components/layout/brand-mark";
import { cn } from "@/lib/cn";

export type WipePhase = "initial" | "covering" | "revealing" | "idle";

type BrandWipeOverlayProps = {
  phase: WipePhase;
  blocking?: boolean;
};

export function BrandWipeOverlay({ phase, blocking = false }: BrandWipeOverlayProps) {
  const active = phase !== "idle";

  return (
    <div
      className={cn(
        "brand-wipe fixed inset-0 z-[250]",
        blocking && active && "pointer-events-auto",
        !active && "pointer-events-none",
      )}
      aria-hidden={!active}
      aria-live="polite"
    >
      <div
        className={cn(
          "brand-wipe__panel signal-void-backdrop flex flex-col items-center justify-center border-[var(--border-signal)]",
          phase === "initial" && "brand-wipe__panel--shown",
          phase === "covering" && "brand-wipe__panel--cover",
          phase === "revealing" && "brand-wipe__panel--reveal",
        )}
      >
        <div className="brand-wipe__mark flex flex-col items-center">
          <BrandMark size="lg" className="brand-wipe__logo" />
          <p className="brand-wipe__title mt-6 font-display text-3xl text-gradient-signal sm:text-4xl">
            {site.title}
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)]">
            {site.designSystem.name}
          </p>
          <div className="brand-wipe__bar mt-8 h-px w-32 overflow-hidden rounded-full bg-[var(--border-subtle)]">
            <span className="brand-wipe__bar-fill block h-full origin-left bg-[var(--accent-paylite)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
