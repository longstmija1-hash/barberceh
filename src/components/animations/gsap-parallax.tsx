"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type GsapParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

export function GsapParallax({
  children,
  className,
  speed = 0.35,
}: GsapParallaxProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !bgRef.current) return;

      gsap.to(bgRef.current, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div
        ref={bgRef}
        className="parallax-bg pointer-events-none absolute inset-0 -top-[20%] h-[140%] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 2px, transparent 2px), linear-gradient(90deg, var(--foreground) 2px, transparent 2px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
