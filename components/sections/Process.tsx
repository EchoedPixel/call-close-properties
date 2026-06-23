import { PROCESS_STEPS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

export function Process() {
  return (
    <Section>
      <SectionHeader
        badge="Process"
        title="From Strategy to Closed Deals in Four Steps"
        description="A refined framework that launches fast, optimizes continuously, and scales with your production goals."
      />

      <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
        {PROCESS_STEPS.map((step, index) => (
          <FadeIn key={step.step} delay={index * 0.1} className="relative">
            {index < PROCESS_STEPS.length - 1 && (
              <div className="absolute top-7 left-[calc(50%+2.5rem)] hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-primary/40 to-primary/5 lg:block" />
            )}
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 font-heading text-lg font-bold text-primary-light">
                {step.step}
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
