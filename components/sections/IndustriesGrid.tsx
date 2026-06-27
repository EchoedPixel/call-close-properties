import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CLIENT_TYPES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";

export function IndustriesGrid() {
  return (
    <Section variant="elevated">
      <SectionHeader
        badge="Who We Serve"
        title="Built for Every Level of Real Estate"
        description=""
      />

      <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CLIENT_TYPES.map((client) => (
          <StaggerItem key={client.slug}>
            <Card className="group h-full">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                <DynamicIcon name={client.icon} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">
                {client.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {client.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn className="mt-16 text-center">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-light transition-colors hover:text-white"
        >
          See who we work with
          <ArrowRight className="h-4 w-4" />
        </Link>
      </FadeIn>
    </Section>
  );
}
