import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const sizeClasses = {
  sm: "size-16",
  md: "size-24 sm:size-28",
  lg: "size-36 sm:size-44",
  xl: "size-48 sm:size-56 lg:size-64",
} as const;

const imageSizes = {
  sm: "64px",
  md: "112px",
  lg: "176px",
  xl: "256px",
} as const;

type ProfilePhotoProps = {
  size?: keyof typeof sizeClasses;
  rounded?: "2xl" | "full" | "premium";
  className?: string;
  priority?: boolean;
  premiumFrame?: boolean;
};

export function ProfilePhoto({
  size = "lg",
  rounded = "2xl",
  className,
  priority = false,
  premiumFrame = false,
}: ProfilePhotoProps) {
  const inner = (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden bg-[var(--bg-elevated)]",
        rounded === "full"
          ? "rounded-full"
          : rounded === "premium"
            ? "rounded-[calc(var(--radius-premium)-3px)]"
            : "rounded-2xl",
        sizeClasses[size],
        !premiumFrame &&
          "border border-[var(--border-subtle)] shadow-[0_0_48px_-16px_color-mix(in_srgb,var(--accent-cyan)_40%,transparent)]",
        className,
      )}
    >
      <Image
        src={site.profileImage}
        alt={`Portrait of ${site.name}`}
        fill
        priority={priority}
        sizes={imageSizes[size]}
        className="object-cover object-[center_18%]"
      />
    </div>
  );

  if (premiumFrame) {
    return <div className="premium-portrait-frame">{inner}</div>;
  }

  return inner;
}
