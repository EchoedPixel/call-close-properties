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
        description="Call & Close Properties was founded on a simple belief: real estate investors should spend their time closing deals, not chasing leads."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <Card gradient className="h-full">
              <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
                Our Story
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted lg:text-base">
                Call & Close Properties was born from a simple frustration: 
                real estate investors were spending too much time searching for 
                opportunities and not enough time closing deals.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
                Reaching property owners, identifying motivated sellers, 
                and qualifying leads takes time, consistency, and experience. 
                Generic call centers often lack the real estate knowledge needed 
                to have meaningful conversations and uncover genuine opportunities.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
                That's why we built something different—a dedicated team focused 
                exclusively on real estate cold calling and lead generation. 
                We connect with property owners, identify motivation, gather key property 
                information, and deliver qualified seller leads directly to our clients.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
                Today, we help real estate investors and home-buying companies generate 
                acquisition opportunities, build stronger pipelines, and focus on what 
                they do best: closing deals.
              </p>
            </Card>
          </FadeIn>

          <div className="flex h-full flex-col justify-center gap-6">
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
