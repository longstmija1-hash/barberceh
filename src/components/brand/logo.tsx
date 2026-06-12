import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLink?: boolean;
};

const sizeMap = {
  sm: { width: 120, height: 48 },
  md: { width: 160, height: 64 },
  lg: { width: 220, height: 88 },
};

export function Logo({ className, size = "md", showLink = true }: LogoProps) {
  const dimensions = sizeMap[size];

  const content = (
    <div className={cn("group relative", className)}>
      <Image
        src="/images/logo.png"
        alt="ЦЕХ BARBERSHOP"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="h-auto w-auto transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </div>
  );

  if (!showLink) return content;

  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="На главную">
      {content}
    </Link>
  );
}
