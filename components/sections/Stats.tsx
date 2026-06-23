"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericMatch = value.match(/[\d.]+/);
          if (!numericMatch) {
            setDisplayValue(value);
            return;
          }

          const target = parseFloat(numericMatch[0]);
          const prefix = value.slice(0, value.indexOf(numericMatch[0]));
          const suffix = value.slice(
            value.indexOf(numericMatch[0]) + numericMatch[0].length
          );
          const duration = 2200;
          const startTime = performance.now();
          const hasDecimal = numericMatch[0].includes(".");

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            const formatted = hasDecimal
              ? current.toFixed(1)
              : Math.floor(current).toString();
            setDisplayValue(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span
      ref={ref}
      className="font-heading text-4xl font-bold text-gradient sm:text-5xl lg:text-6xl"
    >
      {displayValue}
    </span>
  );
}

export function Stats() {
  return (
    <Section variant="gradient">
      <SectionHeader
        badge="Results"
        title="Numbers That Matter"
        description="We track what moves the needle—appointments kept, deals closed, and revenue generated."
      />

      <div className="gradient-border overflow-hidden rounded-3xl">
        <div className="glass grid gap-10 p-10 sm:grid-cols-2 lg:grid-cols-4 lg:p-14">
          {STATS.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1} className="text-center">
              <AnimatedCounter value={stat.value} />
              <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
