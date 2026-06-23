import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Stats />
      <Process />
      <IndustriesGrid />
      <TestimonialsCarousel />
      <FAQ />
      <FinalCTA />
    </>
  );
}
