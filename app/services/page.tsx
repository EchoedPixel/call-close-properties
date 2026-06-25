import { CheckCircle2 } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/animations/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Image from "next/image";

export const metadata = createPageMetadata(
  "Services",
  "Real estate lead generation, appointment setting, cold calling, lead qualification, follow-up campaigns, and sales support from Call & Close Properties."
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Premium Outbound Built for Property Sales"
        description="Six specialized services designed exclusively for real estate professionals who refuse to compromise on quality."
      />

      <Section>
        <div className="space-y-20">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.05}>
              <div id={service.slug} className="scroll-mt-28">
                <Card gradient className="overflow-hidden p-0">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary-light">
                        <DynamicIcon name={service.icon} className="h-7 w-7" />
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <ul className="mt-8 space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-gray-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10">
                        <Button
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          variant="primary"
                        >
                          Discuss This Service
                        </Button>
                      </div>
                    </div>
                    <div className="relative hidden bg-surface-elevated/50 lg:flex items-stretch justify-stretch overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="elevated">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
              Not Sure Where to Start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Book a free strategy call. We&apos;ll assess your pipeline and
              recommend the right combination of services for your market and
              production goals.
            </p>
            <div className="mt-10">
              <Button href="/book-a-call" variant="primary" size="lg">
                Book a Free Strategy Call
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <FinalCTA />
    </>
  );
}
