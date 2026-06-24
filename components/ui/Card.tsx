import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  glass?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  gradient = false,
  glass = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border p-6 shadow-[var(--theme-card-shadow)] lg:p-8",
        glass ? "glass" : "bg-surface",
        gradient && "gradient-border",
        hover &&
          "transition-colors duration-150 gold-glow-hover hover:border-border-gold",
        className
      )}
    >
      {children}
    </div>
  );
}
