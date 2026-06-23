import { createPageMetadata } from "@/lib/metadata";
import { CLIENT_TYPES } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/animations/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = createPageMetadata(
  "Who We Serve",
  "Call & Close Properties serves individual agents, real estate teams, brokerages, investors, developers, and luxury listing specialists."
);

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Who We Serve"
        title="Built for Every Level of Real Estate"
        description="From solo agents to national brokerages, our systems are tailored to the way you sell property—not generic outbound playbooks."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CLIENT_TYPES.map((client, index) => (
            <FadeIn key={client.slug} delay={index * 0.05}>
              <Card gradient className="group flex h-full flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                  <DynamicIcon name={client.icon} className="h-7 w-7" />
                </div>
                <h2 className="font-heading text-xl font-bold text-white">
                  {client.name}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {client.description}
                </p>
                <div className="mt-8">
                  <Button
                    href={`/contact?service=${encodeURIComponent(client.name)}`}
                    variant="outline"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="elevated">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
              Ready to Scale Your Production?
            </h2>
            <p className="mt-4 text-muted">
              Every engagement is custom-scoped to your market, volume needs, and
              production goals. Let&apos;s find the right fit on a strategy call.
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
