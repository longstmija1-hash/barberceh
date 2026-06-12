"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type GsapMarqueeProps = {
  className?: string;
  text?: string;
  speed?: number;
};

const MARQUEE_ITEMS = Array.from({ length: 12 }, (_, i) => i);

export function GsapMarquee({
  className,
  text = "ЦЕХ",
  speed = 28,
}: GsapMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = containerRef.current?.querySelector(".marquee-track");
      if (!track) return;

      gsap.to(track, {
        xPercent: -50,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden border-y-2 border-foreground bg-foreground py-4 text-background md:py-5",
        className,
      )}
      aria-hidden
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {MARQUEE_ITEMS.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="mx-6 flex items-center gap-6 font-mono text-2xl font-bold uppercase tracking-[0.5em] md:mx-10 md:text-4xl"
              >
                {text}
                <span className="size-2 bg-background md:size-3" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
