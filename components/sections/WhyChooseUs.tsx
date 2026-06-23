import { WHY_CHOOSE_US } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export function WhyChooseUs() {
  return (
    <Section variant="elevated">
      <SectionHeader
        badge="Why Call & Close"
        title="Built for Real Estate. Designed to Close."
        description="Not a generic call center. A premium sales partner that understands property, pipelines, and the art of the close."
      />

      <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE_US.map((item) => (
          <StaggerItem key={item.title}>
            <Card glass className="h-full">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold shadow-lg shadow-primary/15">
                <DynamicIcon name={item.icon} className="h-5 w-5 text-background" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
