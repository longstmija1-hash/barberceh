import type { Metadata } from "next";
import { Oswald, JetBrains_Mono, Inter } from "next/font/google";

import { GsapScrollEffects } from "@/components/animations/gsap-scroll-effects";
import { FloatingBookingButton } from "@/components/layout/floating-booking-button";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { YandexMetrika } from "@/components/integrations/yandex-metrika";
import { YclientsScript } from "@/components/integrations/yclients-script";
import { siteConfig } from "@/config/site";

import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Барбершоп ЦЕХ — мужская парикмахерская в Екатеринбурге",
    template: "%s | Барбершоп ЦЕХ",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Барбершоп ЦЕХ",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      id="top"
      className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingBookingButton />
        <YclientsScript />
        <YandexMetrika />
        <GsapScrollEffects />
      </body>
    </html>
  );
}
