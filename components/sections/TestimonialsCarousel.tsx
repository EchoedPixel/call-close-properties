"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const testimonial = TESTIMONIALS[current];

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  return (
    <Section>
      <SectionHeader
        badge="Client Results"
        title="Trusted by Top Producers"
        description="Real estate professionals who chose premium outbound—and never looked back."
      />

      <FadeIn>
        <div className="gradient-border mx-auto max-w-4xl overflow-hidden rounded-3xl">
          <div className="glass p-10 text-center lg:p-14">
            <div className="mb-8 flex justify-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>

            <blockquote className="font-heading text-xl leading-relaxed text-gray-100 sm:text-2xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="mt-10">
              <p className="font-heading text-lg font-semibold text-white">
                {testimonial.author}
              </p>
              <p className="mt-1 text-sm text-muted">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary-light"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrent(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary-light"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
