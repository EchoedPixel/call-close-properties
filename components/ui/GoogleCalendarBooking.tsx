import { Calendar, Clock, Video } from "lucide-react";
import { SITE, MEETING_INFO } from "@/lib/constants";

export function GoogleCalendarBooking() {
  return (
    <div className="gradient-border overflow-hidden rounded-3xl shadow-2xl shadow-black/30">
      <div className="glass relative px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-primary/10 blur-[80px]" />

        <div className="relative">
          <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white lg:text-3xl">
                  Reserve Your Strategy Call
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted lg:text-base">
                  Pick a time that works for you below. You&apos;ll receive a
                  confirmation email with meeting details immediately after
                  scheduling.
                </p>
              </div>
            </div>

            <div className="grid gap-3 text-left sm:min-w-52">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted">
                  {MEETING_INFO.duration}
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3">
                <Video className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted">{MEETING_INFO.format}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/25 backdrop-blur sm:p-3">
            <div className="overflow-hidden rounded-[1.35rem] border border-border bg-white">
              <iframe
                src={SITE.bookingUrl}
                title="Schedule a free strategy call with Call & Close Properties"
                className="h-[720px] w-full border-0 sm:h-[760px] lg:h-[820px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
