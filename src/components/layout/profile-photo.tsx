import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const sizeClasses = {
  sm: "size-16",
  md: "size-24 sm:size-28",
  lg: "size-36 sm:size-44",
  xl: "size-44 sm:size-52",
} as const;

const imageSizes = {
  sm: "64px",
  md: "112px",
  lg: "176px",
  xl: "208px",
} as const;

type ProfilePhotoProps = {
  size?: keyof typeof sizeClasses;
  rounded?: "2xl" | "full";
  className?: string;
  priority?: boolean;
};

export function ProfilePhoto({
  size = "lg",
  rounded = "2xl",
  className,
  priority = false,
}: ProfilePhotoProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-glass)] shadow-[0_0_48px_-16px_color-mix(in_srgb,var(--accent-cyan)_40%,transparent)]",
        rounded === "full" ? "rounded-full" : "rounded-2xl",
        sizeClasses[size],
        className,
      )}
    >
      <Image
        src={site.profileImage}
        alt={`Portrait of ${site.name}`}
        fill
        priority={priority}
        sizes={imageSizes[size]}
        className="object-cover object-[center_20%]"
      />
    </div>
  );
}
