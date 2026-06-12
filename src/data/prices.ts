export type PriceTier = "master" | "senior" | "top";

export type TieredPriceItem = {
  id: string;
  name: string;
  master: number;
  senior: number;
  top: number;
};

export type FlatPriceItem = {
  id: string;
  name: string;
  price: number;
};

export const priceTiers: { key: PriceTier; label: string }[] = [
  { key: "master", label: "Мастер" },
  { key: "senior", label: "Старший Мастер" },
  { key: "top", label: "Топ Мастер" },
];

export const tieredPrices: TieredPriceItem[] = [
  {
    id: "haircut",
    name: "Стрижка мужская",
    master: 1700,
    senior: 2000,
    top: 2300,
  },
  {
    id: "haircut-beard",
    name: "Стрижка + борода",
    master: 2600,
    senior: 3000,
    top: 3500,
  },
  {
    id: "correction",
    name: "Коррекция стрижки",
    master: 1400,
    senior: 1600,
    top: 1800,
  },
  {
    id: "beard",
    name: "Оформление бороды",
    master: 900,
    senior: 1000,
    top: 1200,
  },
  {
    id: "kids",
    name: "Детская стрижка (5–9 лет)",
    master: 1200,
    senior: 1600,
    top: 1800,
  },
];

export const flatPrices: FlatPriceItem[] = [
  { id: "hair-camo", name: "Камуфляж волос", price: 1500 },
  { id: "beard-camo", name: "Камуфляж бороды", price: 1000 },
];

export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU")} ₽`;
}
