import { cn } from "@/lib/cn";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "size-9 rounded-lg",
  md: "size-11 rounded-xl",
  lg: "size-14 rounded-2xl",
} as const;

const textSizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
} as const;

export function BrandMark({ size = "md", className }: BrandMarkProps) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center border border-[var(--border-signal)] bg-[var(--signal-wash)] shadow-[0_0_32px_-12px_var(--accent-paylite)]",
        sizes[size],
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-[2px] rounded-[inherit] bg-[var(--bg-void)]",
        )}
      />
      <span
        className={cn(
          "relative font-display font-normal tracking-tight text-gradient-signal",
          textSizes[size],
        )}
      >
        ST
      </span>
    </div>
  );
}
