export type Address = {
  id: string;
  city: string;
  street: string;
  floor?: string;
  mapUrl?: string;
};

export const addresses: Address[] = [
  {
    id: "lunacharskogo",
    city: "Екатеринбург",
    street: "ул. Луначарского, 139",
    floor: "1 этаж",
    mapUrl: "https://yandex.ru/maps/",
  },
  {
    id: "teatralny",
    city: "Екатеринбург",
    street: "Театральный переулок, 5а",
    mapUrl: "https://yandex.ru/maps/",
  },
];
