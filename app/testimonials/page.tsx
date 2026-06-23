import { Star } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import {
  TESTIMONIALS,
  SUCCESS_STORIES,
  TRUST_INDICATORS,
} from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/animations/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = createPageMetadata(
  "Results",
  "Client reviews, success stories, and proven results from real estate professionals who partner with Call & Close Properties."
);

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        badge="Client Results"
        title="Proven Results in Real Estate"
        description="Agents, teams, and brokerages who chose premium outbound—and transformed their production."
      />

      <Section>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_INDICATORS.map((indicator, index) => (
            <FadeIn key={indicator.label} delay={index * 0.05}>
              <Card glass className="text-center">
                <DynamicIcon
                  name={indicator.icon}
                  className="mx-auto mb-3 h-6 w-6 text-primary"
                />
                <p className="text-xs leading-tight text-muted">
                  {indicator.label}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="elevated">
        <FadeIn>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-white lg:text-4xl">
            Client Reviews
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={index * 0.05}>
              <Card gradient className="flex h-full flex-col">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-heading font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-white lg:text-4xl">
            Success Stories
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-muted">
            Real challenges. Tailored solutions. Measurable closings.
          </p>
        </FadeIn>
        <div className="space-y-8">
          {SUCCESS_STORIES.map((story, index) => (
            <FadeIn key={story.client} delay={index * 0.1}>
              <Card gradient>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-light">
                    {story.industry}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {story.client}
                  </h3>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
                      Challenge
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {story.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
                      Solution
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {story.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {story.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
