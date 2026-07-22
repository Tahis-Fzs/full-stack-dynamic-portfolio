import { cn } from "@/lib/cn";

type FieldNoteHookProps = {
  hook: string;
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
};

const sizeClasses = {
  sm: "text-base leading-snug",
  md: "text-lg leading-snug sm:text-xl",
  lg: "text-xl leading-snug sm:text-2xl",
  hero: "text-[clamp(1.35rem,3.5vw,2rem)] leading-[1.25]",
} as const;

export function FieldNoteHook({
  hook,
  size = "md",
  className,
}: FieldNoteHookProps) {
  return (
    <blockquote
      className={cn(
        "relative border-l-2 border-[var(--accent-paylite)] pl-4 font-display text-[var(--text-primary)]",
        sizeClasses[size],
        className,
      )}
    >
      <span aria-hidden className="text-[var(--accent-paylite)]">
        “
      </span>
      {hook}
      <span aria-hidden className="text-[var(--accent-paylite)]">
        ”
      </span>
    </blockquote>
  );
}

type FieldNoteIndexProps = {
  index: number;
  className?: string;
};

export function FieldNoteIndex({ index, className }: FieldNoteIndexProps) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] tabular-nums tracking-wider text-[var(--text-dim)]",
        className,
      )}
      aria-hidden
    >
      {String(index).padStart(2, "0")}
    </span>
  );
}
