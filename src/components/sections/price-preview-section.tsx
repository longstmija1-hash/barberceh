import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PriceTable } from "@/components/sections/price-table";

export function PricePreviewSection() {
  return (
    <section className="border-t-2 border-foreground/10 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div
          data-gsap-heading
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Прайс
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Услуги и цены
            </h2>
          </div>
          <Link
            href="/uslugi/"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
          >
            Полный прайс
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div data-gsap-card>
          <PriceTable compact />
        </div>
      </div>
    </section>
  );
}
