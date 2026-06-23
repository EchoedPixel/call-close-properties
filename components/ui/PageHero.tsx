import { type ReactNode } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";

interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({
  badge,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <FadeIn>
              <Badge className="mb-6">{badge}</Badge>
            </FadeIn>
          )}
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </FadeIn>
          {description && (
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                {description}
              </p>
            </FadeIn>
          )}
          {children && <FadeIn delay={0.3}>{children}</FadeIn>}
        </div>
      </div>
    </section>
  );
}
