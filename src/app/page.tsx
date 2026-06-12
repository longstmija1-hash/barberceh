import { GsapMarquee } from "@/components/animations/gsap-marquee";
import { HeroSection } from "@/components/sections/hero-section";
import { NewsPreviewSection } from "@/components/sections/news-preview-section";
import { PricePreviewSection } from "@/components/sections/price-preview-section";
import { WhyUsSection } from "@/components/sections/why-us-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GsapMarquee />
      <WhyUsSection />
      <PricePreviewSection />
      <GsapMarquee text="BARBERSHOP" speed={35} />
      <NewsPreviewSection />
    </>
  );
}
