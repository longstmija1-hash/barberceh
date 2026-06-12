import type { Metadata } from "next";
import { Gift } from "lucide-react";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BookingButton } from "@/components/ui/booking-button";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Подарочные сертификаты",
  description:
    "Электронные подарочные сертификаты барбершопа ЦЕХ — идеальный подарок для мужчин.",
};

export default function ShopPage() {
  return (
    <div className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          label="Подарки"
          title="Подарочные сертификаты"
          description="Сертификат — электронный, а стрижки настоящие. Правильный подарок для мужчин, которые ценят стиль."
        />

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-2xl border-2 border-foreground p-8 text-center md:p-12">
            <Gift className="mx-auto mb-6 size-16" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold md:text-3xl">
              Электронный сертификат ЦЕХ
            </h2>
            <p className="mt-4 text-muted-foreground">
              Подарите стрижку, оформление бороды или полный комплекс услуг.
              Сертификат приходит мгновенно — не надо ждать курьера и стоять в
              пробке.
            </p>
            <div className="mt-8">
              <BookingButton size="lg" label="Купить сертификат" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
