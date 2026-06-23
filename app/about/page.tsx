import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { CORE_VALUES, TEAM } from "@/lib/constants";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = createPageMetadata(
  "About",
  "Learn about Call & Close Properties — the premium real estate lead generation and sales support partner built exclusively for property professionals."
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="The Sales Infrastructure Real Estate Deserves"
        description="Call & Close Properties was founded by real estate professionals who understood that the best agents shouldn't spend their days cold calling—they should be closing."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <Card gradient className="h-full">
              <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
                Our Story
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted lg:text-base">
                Call & Close Properties was born from a simple frustration: top
                real estate producers were losing hours every week on prospecting,
                follow-up, and lead qualification—time that should have been spent
                on showings, negotiations, and closings.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
                Generic call centers couldn&apos;t solve the problem. They lacked
                real estate expertise, brand alignment, and the premium touch that
                property sales demand. So we built something different—a dedicated
                outbound partner trained exclusively for real estate.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
                Today, we serve 80+ agents, teams, and brokerages nationwide,
                generating qualified leads and booked appointments that convert
                into closed deals.
              </p>
            </Card>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <Card glass>
                <h2 className="font-heading text-xl font-bold text-white">
                  Our Mission
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
                  Empower real estate professionals with premium outbound sales
                  infrastructure that fills pipelines, books appointments, and
                  drives closings—so they can focus on what they do best.
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card glass>
                <h2 className="font-heading text-xl font-bold text-white">
                  Our Vision
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
                  Become the definitive sales partner for every serious real estate
                  professional—the first call when production goals demand more
                  than hours in the day can deliver.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section variant="elevated">
        <FadeIn>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-white lg:text-4xl">
            Core Values
          </h2>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.05}>
              <Card className="h-full">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-white lg:text-4xl">
            Leadership Team
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-muted">
            Real estate operators committed to your production goals.
          </p>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <Card glass className="text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-gold font-heading text-2xl font-bold text-background shadow-lg shadow-primary/20">
                  {member.initials}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-light">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
