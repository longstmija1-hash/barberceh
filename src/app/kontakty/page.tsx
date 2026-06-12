import type { Metadata } from "next";
import { ExternalLink, MapPin, Phone } from "lucide-react";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BookingButton } from "@/components/ui/booking-button";
import { PageHeader } from "@/components/sections/page-header";
import { addresses } from "@/data/contacts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты и адреса барбершопа ЦЕХ в Екатеринбурге: ул. Луначарского, 139 и Театральный переулок, 5а.",
};

export default function ContactsPage() {
  return (
    <div className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          label="Связь"
          title="Контакты"
          description="Два филиала в центре Екатеринбурга. Звоните или записывайтесь онлайн."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <div className="border-2 border-foreground p-8 md:p-10">
              <Phone className="mb-4 size-8" strokeWidth={1.5} />
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Телефон
              </h2>
              <a
                href={siteConfig.phoneHref}
                className="mt-3 block text-3xl font-bold tracking-tight transition-opacity hover:opacity-70 md:text-4xl"
              >
                {siteConfig.phone}
              </a>
              <div className="mt-8">
                <BookingButton />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              {addresses.map((address) => (
                <article
                  key={address.id}
                  className="border-2 border-foreground/10 p-6 transition-colors hover:border-foreground md:p-8"
                >
                  <MapPin className="mb-4 size-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold">{address.city}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {address.street}
                    {address.floor ? ` (${address.floor})` : ""}
                  </p>
                  {address.mapUrl && (
                    <a
                      href={address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
                    >
                      Открыть на карте
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col gap-4 border-t-2 border-foreground/10 pt-12 sm:flex-row sm:gap-8">
            <a
              href={siteConfig.appLinks.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            >
              App Store
              <ExternalLink className="size-4" />
            </a>
            <a
              href={siteConfig.appLinks.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            >
              Google Play
              <ExternalLink className="size-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
