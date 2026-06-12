import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  label,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <ScrollReveal>
      <header className={cn("mb-12 md:mb-16", className)}>
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          {label}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </header>
    </ScrollReveal>
  );
}
