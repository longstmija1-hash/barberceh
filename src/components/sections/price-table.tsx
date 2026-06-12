import {
  flatPrices,
  formatPrice,
  priceTiers,
  tieredPrices,
  type PriceTier,
} from "@/data/prices";
import { cn } from "@/lib/utils";

type PriceTableProps = {
  className?: string;
  compact?: boolean;
};

export function PriceTable({ className, compact = false }: PriceTableProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground">
              <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-widest">
                Услуга
              </th>
              {priceTiers.map((tier) => (
                <th
                  key={tier.key}
                  className="px-4 py-4 text-right font-mono text-xs uppercase tracking-widest"
                >
                  {tier.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tieredPrices.map((item, index) => (
              <tr
                key={item.id}
                className={cn(
                  "border-b border-foreground/10 transition-colors hover:bg-foreground/5",
                  index % 2 === 0 && "bg-foreground/[0.02]",
                )}
              >
                <td className="px-4 py-4 font-medium">{item.name}</td>
                {priceTiers.map((tier) => (
                  <td
                    key={tier.key}
                    className="px-4 py-4 text-right font-mono tabular-nums"
                  >
                    {formatPrice(item[tier.key as PriceTier])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!compact && (
        <div className="hidden gap-4 sm:grid-cols-2 md:grid">
          {flatPrices.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-2 border-foreground/10 px-6 py-5"
            >
              <span className="font-medium">{item.name}</span>
              <span className="font-mono text-lg tabular-nums">
                {formatPrice(item.price)}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="md:hidden">
        <div className="space-y-4">
          {tieredPrices.map((item) => (
            <article
              key={item.id}
              className="border-2 border-foreground/10 p-4"
            >
              <h3 className="mb-3 font-bold">{item.name}</h3>
              <dl className="space-y-2">
                {priceTiers.map((tier) => (
                  <div
                    key={tier.key}
                    className="flex items-center justify-between text-sm"
                  >
                    <dt className="text-muted-foreground">{tier.label}</dt>
                    <dd className="font-mono tabular-nums">
                      {formatPrice(item[tier.key as PriceTier])}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
          {flatPrices.map((item) => (
            <article
              key={item.id}
              className="flex items-center justify-between border-2 border-foreground/10 p-4"
            >
              <span className="font-medium">{item.name}</span>
              <span className="font-mono tabular-nums">
                {formatPrice(item.price)}
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
