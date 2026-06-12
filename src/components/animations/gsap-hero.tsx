"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type ReactNode, useRef } from "react";

type GsapHeroProps = {
  children: ReactNode;
  className?: string;
};

export function GsapHero({ children, className }: GsapHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const blocks = containerRef.current?.querySelectorAll(".logo-block");
      const lines = containerRef.current?.querySelectorAll(".hero-line");
      const cta = containerRef.current?.querySelectorAll(".hero-cta > *");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (blocks?.length) {
        tl.from(blocks, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
        });
      }

      if (lines?.length) {
        tl.from(
          lines,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.3",
        );
      }

      if (cta?.length) {
        tl.from(
          cta,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.2",
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
