"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { GsapHero } from "@/components/animations/gsap-hero";
import { GsapHeroParallax } from "@/components/animations/gsap-hero-parallax";
import { LogoBlocks } from "@/components/brand/logo-blocks";
import { BookingButton } from "@/components/ui/booking-button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16 md:px-6"
    >
      <GsapHeroParallax />

      <GsapHero className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <LogoBlocks size="lg" className="mb-8 md:mb-12" />

        <h1 className="hero-line max-w-3xl font-mono text-sm uppercase tracking-[0.4em] text-muted-foreground md:text-base">
          Производство мужских стрижек
        </h1>

        <p className="hero-line mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          Pro барбершоп в центре Екатеринбурга. У каждого мужчины должен быть{" "}
          <span className="font-bold text-foreground">ЦЕХ</span>.
        </p>

        <div className="hero-cta mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <BookingButton size="lg" label="Запись онлайн" />
          <a
            href={siteConfig.phoneHref}
            className="hero-line border-2 border-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            {siteConfig.phone}
          </a>
        </div>

        <div className="hero-cta mt-8 flex items-center gap-6">
          <a
            href={siteConfig.appLinks.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-line inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            App Store
            <ExternalLink className="size-3" />
          </a>
          <a
            href={siteConfig.appLinks.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-line inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            Google Play
            <ExternalLink className="size-3" />
          </a>
        </div>
      </GsapHero>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="/uslugi/"
          className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Услуги и цены ↓
        </Link>
      </div>
    </section>
  );
}
