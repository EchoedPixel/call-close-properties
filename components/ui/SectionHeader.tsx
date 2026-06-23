import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 max-w-3xl lg:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-5 inline-block rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-light">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
