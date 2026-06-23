import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-light",
        className
      )}
    >
      {children}
    </span>
  );
}
