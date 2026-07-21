import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[var(--max-width)] px-5 sm:px-8", className)}
    >
      {children}
    </Tag>
  );
}
