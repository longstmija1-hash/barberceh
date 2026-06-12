import type { Metadata } from "next";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PageHeader } from "@/components/sections/page-header";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "Акции и новости",
  description: "Новости, акции и обновления барбершопа ЦЕХ в Екатеринбурге.",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  return (
    <div className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          label="Блог"
          title="Акции и новости"
          description="Актуальные новости мужской парикмахерской Екатеринбурга."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {newsItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.08}>
              <article
                data-gsap-card
                className="group h-full border-2 border-foreground/10 p-6 transition-colors hover:border-foreground md:p-8"
              >
                <time
                  dateTime={item.date}
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  {formatDate(item.date)}
                </time>
                <h2 className="mt-4 text-xl font-bold md:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{item.excerpt}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
