import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";

export function WhyChooseUs() {
  return (
    <Section variant="elevated">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <span className="mb-5 inline-block rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-light">
            Why Call &amp; Close
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Why Call &amp; Close?
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted sm:text-lg sm:leading-relaxed">
          <FadeIn delay={0.2}>
            <p className="text-lg font-semibold text-white sm:text-xl">
              Because experience matters.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p>
              We&apos;ve been in this business for over 5 years, and we know one
              thing for sure: success isn&apos;t about having someone randomly
              pick up the phone and start dialing.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p>
              Our telemarketers are rockstars. They know how to connect,
              qualify, and create real opportunities. This isn&apos;t their
              first rodeo—it&apos;s what they do best.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p>
              We&apos;re not focused on flooding you with a certain number of
              leads every month. We&apos;re focused on delivering the right
              leads—the kind that actually turn into deals and put money in
              your pocket.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg font-semibold text-white sm:text-xl">
              And our support doesn&apos;t stop when a lead comes in.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p>
              We understand that getting a contract is only part of the
              process. If you need help on the dispo side, we&apos;re here for
              that too. Consider us more than a lead generation
              company—we&apos;re a partner invested in helping you close more
              deals and grow your business.
            </p>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
