import { cn } from "@/lib/cn";
import { site } from "@/content/site";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
};

const sizes = {
  sm: "size-9 rounded-lg",
  md: "size-11 rounded-xl",
  lg: "size-14 rounded-2xl",
} as const;

const textSizes = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-sm",
} as const;

export function BrandMark({
  size = "md",
  className,
  showLabel = false,
}: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "relative flex shrink-0 flex-col items-center justify-center border border-[var(--border-signal)] bg-[var(--signal-wash)] shadow-[0_0_32px_-12px_var(--accent-paylite)]",
          sizes[size],
        )}
        aria-hidden
      >
        <div className="absolute inset-[2px] rounded-[inherit] bg-[var(--bg-void)]" />
        <span
          className={cn(
            "relative font-display font-semibold leading-none tracking-tight text-gradient-signal",
            textSizes[size],
          )}
        >
          {site.brandShort}
        </span>
      </div>
      {showLabel && (
        <div className="hidden min-w-0 flex-col sm:flex">
          <span className="truncate font-display text-sm leading-tight text-[var(--text-primary)]">
            {site.brandName}
          </span>
          <span className="truncate text-[10px] uppercase tracking-[0.16em] text-[var(--text-dim)]">
            {site.profileRole.split("·")[0]?.trim()}
          </span>
        </div>
      )}
    </div>
  );
}
