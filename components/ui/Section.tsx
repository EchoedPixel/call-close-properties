import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "elevated" | "gradient";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 lg:py-32",
        variant === "elevated" && "bg-surface/50",
        variant === "gradient" && "bg-gradient-radial",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}
