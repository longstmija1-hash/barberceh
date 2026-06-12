import { cn } from "@/lib/utils";

const letters = ["Ц", "Е", "Х"] as const;

type LogoBlocksProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "size-14 text-2xl",
  md: "size-20 text-4xl md:size-24 md:text-5xl",
  lg: "size-28 text-5xl md:size-36 md:text-7xl",
};

export function LogoBlocks({ className, size = "lg" }: LogoBlocksProps) {
  return (
    <div className={cn("flex flex-col items-center gap-0", className)}>
      <div className="flex">
        {letters.map((letter, index) => (
          <div
            key={letter}
            data-letter={letter}
            className={cn(
              "logo-block flex items-center justify-center border-2 border-foreground bg-foreground font-bold text-background",
              sizeClasses[size],
              index > 0 && "-ml-0.5",
            )}
          >
            {letter}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "flex w-full items-center justify-center border-2 border-foreground bg-foreground font-mono uppercase tracking-[0.35em] text-background",
          size === "lg" && "h-8 text-[0.65rem] md:h-10 md:text-xs",
          size === "md" && "h-7 text-[0.6rem] md:text-[0.65rem]",
          size === "sm" && "h-6 text-[0.55rem]",
        )}
      >
        Barbershop
      </div>
    </div>
  );
}
