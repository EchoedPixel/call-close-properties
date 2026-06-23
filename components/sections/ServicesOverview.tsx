import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export function ServicesOverview() {
  return (
    <Section id="services">
      <SectionHeader
        badge="Services"
        title="Everything You Need to Fill Your Pipeline and Close"
        description="Six specialized services designed exclusively for real estate professionals who demand premium results."
      />

      <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <StaggerItem key={service.slug}>
            <Card gradient className="group flex h-full flex-col">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <DynamicIcon name={service.icon} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-light transition-colors duration-300 hover:text-white"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn className="mt-16 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-light transition-colors hover:text-white"
        >
          Explore all services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </FadeIn>
    </Section>
  );
}
