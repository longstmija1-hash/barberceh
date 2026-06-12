import {
  Award,
  CreditCard,
  Gift,
  Heart,
  MapPin,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type WhyUsItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyUsItems: WhyUsItem[] = [
  {
    id: "masters",
    title: "Профессиональные мастера",
    description: "Команда с опытом и вниманием к деталям каждой стрижки.",
    icon: Award,
  },
  {
    id: "location",
    title: "Центр города",
    description: "Удачное расположение — парикмахерская в центре Екатеринбурга.",
    icon: MapPin,
  },
  {
    id: "online",
    title: "Онлайн-запись",
    description: "Удобные технологии онлайн-записи и напоминаний.",
    icon: Smartphone,
  },
  {
    id: "service",
    title: "Искренний сервис",
    description: "Атмосфера, в которой каждый гость чувствует себя своим.",
    icon: Heart,
  },
  {
    id: "gifts",
    title: "Правильные подарки",
    description: "Подарочные сертификаты для мужчин, которые ценят стиль.",
    icon: Gift,
  },
  {
    id: "payment",
    title: "Любой расчёт",
    description: "Наличный и безналичный расчёт.",
    icon: CreditCard,
  },
];
