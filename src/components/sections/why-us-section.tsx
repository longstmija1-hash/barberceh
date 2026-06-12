import { whyUsItems } from "@/data/why-us";

export function WhyUsSection() {
  return (
    <section className="border-t-2 border-foreground/10 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div data-gsap-heading className="mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            О нас
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Почему барбершоп Цех
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                data-gsap-card
                className="group h-full border-2 border-foreground/10 p-6 transition-colors hover:border-foreground hover:bg-foreground hover:text-background md:p-8"
              >
                <Icon className="mb-4 size-8 transition-colors group-hover:text-background" />
                <h3 className="text-lg font-bold md:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-background/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
