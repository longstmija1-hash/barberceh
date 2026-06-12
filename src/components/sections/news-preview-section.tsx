import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GsapParallax } from "@/components/animations/gsap-parallax";
import { newsItems } from "@/data/news";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsPreviewSection() {
  const preview = newsItems.slice(0, 4);

  return (
    <GsapParallax className="border-t-2 border-foreground/10">
      <section className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <header
            data-gsap-heading
            className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Блог
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Акции и новости
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Новости мужской парикмахерской Екатеринбурга
              </p>
            </div>
            <Link
              href="/novosti/"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            >
              Все новости
              <ArrowRight className="size-4" />
            </Link>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {preview.map((item) => (
              <article
                key={item.id}
                data-gsap-card
                className="group border-2 border-foreground/10 p-6 transition-colors hover:border-foreground md:p-8"
              >
                <time
                  dateTime={item.date}
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  {formatDate(item.date)}
                </time>
                <h3 className="mt-4 text-xl font-bold transition-colors group-hover:text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </GsapParallax>
  );
}
