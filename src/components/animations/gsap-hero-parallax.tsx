"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function GsapHeroParallax() {
  const bgRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hero = document.getElementById("hero");
    if (!hero || !bgRef.current) return;

    gsap.to(bgRef.current, {
      y: 120,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    if (decorRef.current) {
      gsap.to(decorRef.current, {
        y: -80,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });

  return (
    <>
      <div
        ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteConfig.heroBackgroundImage})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-background/80"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        ref={decorRef}
        className="pointer-events-none absolute top-1/4 right-[10%] hidden font-mono text-[12rem] font-bold leading-none text-foreground opacity-[0.03] select-none md:block"
        aria-hidden
      >
        Ц
      </div>
    </>
  );
}
