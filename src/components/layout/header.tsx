"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Logo } from "@/components/brand/logo";
import { BookingButton } from "@/components/ui/booking-button";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b-2 transition-colors duration-300",
        isScrolled
          ? "border-foreground/20 bg-background/95 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Logo size="sm" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {mainNav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.replace(/\/$/, ""));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="font-mono text-sm tracking-wide hover:underline"
          >
            {siteConfig.phone}
          </a>
          <BookingButton size="sm" />
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center border-2 border-foreground lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t-2 border-foreground bg-background lg:hidden"
          >
            <nav className="flex flex-col px-4 py-4" aria-label="Мобильная навигация">
              {mainNav.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href.replace(/\/$/, ""));

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block border-b border-foreground/10 py-4 font-mono text-sm uppercase tracking-[0.2em]",
                        isActive && "text-foreground",
                      )}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-4 flex flex-col gap-3 pt-2">
                <a
                  href={siteConfig.phoneHref}
                  className="font-mono text-lg tracking-wide"
                >
                  {siteConfig.phone}
                </a>
                <BookingButton className="w-full" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
