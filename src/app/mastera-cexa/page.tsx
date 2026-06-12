import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BookingButton } from "@/components/ui/booking-button";
import { MastersGrid } from "@/components/sections/masters-grid";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Мастера цеха",
  description:
    "Команда профессиональных барберов барбершопа ЦЕХ в Екатеринбурге.",
};

export default function MastersPage() {
  return (
    <div className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          label="Команда"
          title="Мастера цеха"
          description="Профессионалы, для которых стрижка — ремесло. Каждый мастер — часть производства мужских стрижек."
        />

        <MastersGrid />

        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex flex-col items-center gap-6 border-t-2 border-foreground/10 pt-12 sm:flex-row sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Готовы к стрижке?
              </p>
              <Link
                href="/uslugi/"
                className="mt-2 inline-flex items-center gap-2 text-lg font-bold transition-opacity hover:opacity-70"
              >
                Смотреть прайс
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <BookingButton size="lg" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
