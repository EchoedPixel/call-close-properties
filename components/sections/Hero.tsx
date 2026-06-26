"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { HERO_TRUST_POINTS, TRUST_INDICATORS } from "@/lib/constants";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 lg:pb-36 lg:pt-24">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <Badge className="mb-8">Real Estate Sales Partner</Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Turn More Real Estate Leads Into{" "}
              <span className="text-gradient">Closed Deals</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              We help real estate investors and home-buying companies
               connect with motivated property owners through 
               expert cold calling, lead qualification, and targeted lead generation.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/book-a-call" variant="primary" size="lg">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {HERO_TRUST_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {point}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {TRUST_INDICATORS.map((indicator) => (
              <div
                key={indicator.label}
                className="glass flex flex-col items-center rounded-xl px-4 py-4 text-center transition-colors duration-300 hover:border-primary/20"
              >
                <DynamicIcon
                  name={indicator.icon}
                  className="mb-2 h-5 w-5 text-primary"
                />
                <span className="text-[15px] leading-tight text-muted">
                  {indicator.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
