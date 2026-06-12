"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export function GsapScrollEffects() {
  const pathname = usePathname();

  useGSAP(
    () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const cards = gsap.utils.toArray<HTMLElement>("[data-gsap-card]");
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          delay: (index % 3) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      const headings = gsap.utils.toArray<HTMLElement>("[data-gsap-heading]");
      headings.forEach((heading) => {
        gsap.from(heading, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
