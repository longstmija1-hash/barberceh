import Link from "next/link";
import { ArrowUp, ExternalLink } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { addresses } from "@/data/contacts";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo size="sm" showLink={false} className="invert" />
            <p className="max-w-xs text-sm text-background/70">
              Pro барбершоп в центре Екатеринбурга. Производство мужских стрижек.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-background/60">
              Навигация
            </h3>
            <ul className="space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-opacity hover:opacity-70"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-background/60">
              Адреса
            </h3>
            <ul className="space-y-4">
              {addresses.map((address) => (
                <li key={address.id} className="text-sm">
                  <p className="font-medium">{address.city}</p>
                  <p className="text-background/80">
                    {address.street}
                    {address.floor ? ` (${address.floor})` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-background/60">
              Контакты
            </h3>
            <a
              href={siteConfig.phoneHref}
              className="block text-2xl font-bold tracking-tight transition-opacity hover:opacity-70 md:text-3xl"
            >
              {siteConfig.phone}
            </a>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={siteConfig.appLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/80 transition-opacity hover:opacity-70"
              >
                App Store
                <ExternalLink className="size-3" />
              </a>
              <a
                href={siteConfig.appLinks.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/80 transition-opacity hover:opacity-70"
              >
                Google Play
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/20 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 text-xs text-background/50">
            <p>{siteConfig.copyright}</p>
            <p>{siteConfig.legal}</p>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-70 md:self-auto"
          >
            Наверх
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
