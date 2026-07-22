import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="premium-eyebrow">{eyebrow}</p>
      <h2 className="premium-title mt-4">{title}</h2>
      {description && (
        <p className="premium-lead mt-4">{description}</p>
      )}
    </div>
  );
}

export function SectionShell({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "void";
}) {
  return (
    <section
      className={cn(
        "section-premium",
        variant === "elevated" && "section-premium--elevated",
        variant === "void" && "section-premium--void",
        className,
      )}
    >
      {children}
    </section>
  );
}
