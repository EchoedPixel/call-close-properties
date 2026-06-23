import { Clock, Video, FileText, CheckCircle2 } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { BOOKING_BENEFITS, MEETING_INFO } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GoogleCalendarBooking } from "@/components/ui/GoogleCalendarBooking";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = createPageMetadata(
  "Book a Strategy Call",
  "Schedule a free 30-minute strategy call with Call & Close Properties. Custom acquisition plan for your real estate business—no obligation."
);

export default function BookACallPage() {
  return (
    <>
      <PageHero
        badge="Book a Call"
        title="Schedule Your Free Strategy Call"
        description="30 minutes. Zero obligation. Walk away with a custom lead generation plan for your market—even if we're not the right fit."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-8 lg:col-span-2">
            <FadeIn>
              <div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  What You&apos;ll Receive
                </h2>
                <div className="mt-8 space-y-4">
                  {BOOKING_BENEFITS.map((benefit) => (
                    <Card key={benefit.title} glass className="p-5">
                      <div className="flex gap-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="font-heading font-semibold text-white">
                            {benefit.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-muted">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card gradient>
                <h3 className="font-heading text-lg font-semibold text-white">
                  Meeting Details
                </h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-white">Duration</p>
                      <p>{MEETING_INFO.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <Video className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-white">Format</p>
                      <p>{MEETING_INFO.format}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-white">How to Prepare</p>
                      <p>{MEETING_INFO.prepare}</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <GoogleCalendarBooking />
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
