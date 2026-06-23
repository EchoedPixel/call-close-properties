import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";

export function FinalCTA() {
  return (
    <Section>
      <FadeIn>
        <div className="gradient-border relative overflow-hidden rounded-3xl">
          <div className="glass relative px-8 py-16 text-center lg:px-16 lg:py-24">
            <div className="absolute inset-0 bg-gradient-radial" />
            <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

            <div className="relative">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-light">
                Ready to close more deals?
              </p>
              <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Your Next Listing Starts With a Conversation
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
                Book a free strategy call and discover how Call & Close can fill
                your calendar with qualified appointments—starting within days,
                not months.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/book-a-call" variant="primary" size="lg">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
