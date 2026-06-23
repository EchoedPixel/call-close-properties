import { Suspense } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = createPageMetadata(
  "Contact",
  "Contact Call & Close Properties. Tell us about your real estate lead generation needs—we respond within 24 hours."
);

function ContactFormFallback() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's Discuss Your Production Goals"
        description="Whether you're ready to launch or exploring options, our team responds to every inquiry within 24 hours."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <FadeIn>
              <Card gradient>
                <h2 className="mb-8 font-heading text-2xl font-bold text-white">
                  Send Us a Message
                </h2>
                <Suspense fallback={<ContactFormFallback />}>
                  <ContactForm />
                </Suspense>
              </Card>
            </FadeIn>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <FadeIn delay={0.1}>
              <Card glass>
                <h3 className="font-heading text-lg font-semibold text-white">
                  Contact Information
                </h3>
                <ul className="mt-6 space-y-5">
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-start gap-3 text-sm text-muted transition-colors hover:text-primary-light"
                    >
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p>{SITE.email}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="flex items-start gap-3 text-sm text-muted transition-colors hover:text-primary-light"
                    >
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <p>{SITE.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-white">Coverage</p>
                      <p>{SITE.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-white">Response Time</p>
                      <p>Within 24 hours on business days</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="gradient-border overflow-hidden rounded-2xl">
                <div className="bg-gradient-gold p-8">
                  <h3 className="font-heading text-lg font-semibold text-background">
                    Prefer to Talk Live?
                  </h3>
                  <p className="mt-2 text-sm text-background/80">
                    Skip the form and book a free strategy call directly on our
                    calendar.
                  </p>
                  <a
                    href="/book-a-call"
                    className="mt-5 inline-flex items-center rounded-xl bg-background px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Book a Free Strategy Call
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
