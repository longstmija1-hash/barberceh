import type { Metadata } from "next";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BookingButton } from "@/components/ui/booking-button";
import { PageHeader } from "@/components/sections/page-header";
import { PriceTable } from "@/components/sections/price-table";

export const metadata: Metadata = {
  title: "Услуги и цены",
  description:
    "Прайс-лист барбершопа ЦЕХ в Екатеринбурге: стрижки, борода, детские стрижки и камуфляж.",
};

export default function ServicesPage() {
  return (
    <div className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          label="Прайс-лист"
          title="Услуги и цены"
          description="Актуальные цены на услуги барбершопа ЦЕХ. Выберите уровень мастера и запишитесь онлайн."
        />

        <ScrollReveal delay={0.1}>
          <PriceTable />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex justify-center border-t-2 border-foreground/10 pt-12">
            <BookingButton size="lg" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
