import Image from "next/image";

import { masters } from "@/data/masters";
import { cn } from "@/lib/utils";

type MastersGridProps = {
  className?: string;
};

function MasterPhoto({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <div className="relative aspect-square w-full overflow-hidden border-b-2 border-foreground/10">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
      </div>
    );
  }

  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="flex aspect-square w-full items-center justify-center border-b-2 border-foreground/10 bg-foreground/5">
      <span className="font-mono text-5xl font-bold text-foreground/20 md:text-6xl">
        {initial}
      </span>
    </div>
  );
}

export function MastersGrid({ className }: MastersGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {masters.map((master) => (
        <article
          key={master.id}
          data-gsap-card
          className="group border-2 border-foreground/10 transition-colors hover:border-foreground"
        >
          <MasterPhoto name={master.name} image={master.image} />
          <div className="p-6">
            <div className="flex items-baseline gap-3">
              <h3 className="text-xl font-bold">{master.name}</h3>
              {master.role && (
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                  {master.role}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {master.bio}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
