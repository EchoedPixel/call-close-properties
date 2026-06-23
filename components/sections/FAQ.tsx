"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section variant="elevated">
      <SectionHeader
        badge="FAQ"
        title="Common Questions"
        description="Clear answers about how Call & Close works with your real estate business."
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((faq, index) => (
          <FadeIn key={faq.question} delay={index * 0.05}>
            <div
              className={cn(
                "overflow-hidden rounded-2xl border transition-all duration-300",
                openIndex === index
                  ? "border-primary/20 bg-surface"
                  : "border-border bg-surface/50 hover:border-border-gold"
              )}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left lg:px-8 lg:py-6"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-base font-semibold text-white lg:text-lg">
                  {faq.question}
                </span>
                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                    openIndex === index && "rotate-45"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted lg:px-8 lg:pb-8 lg:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
