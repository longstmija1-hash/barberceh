export type Master = {
  id: string;
  name: string;
  role?: string;
  bio: string;
  image?: string;
};

export const masters: Master[] = [
  {
    id: "alla",
    name: "Алла",
    bio: "С детства занимается вокалом, более 10 лет в парикмахерском искусстве.",
    image: "/images/masters/alla.jpg",
  },
  {
    id: "artem",
    name: "Артём",
    bio: "Учился на бортинженера гражданских воздушных судов.",
    image: "/images/masters/artem.jpg",
  },
  {
    id: "elvira",
    name: "Эльвира",
    bio: "Медицинское образование, 8 лет опыта.",
    image: "/images/masters/elvira.jpg",
  },
  {
    id: "shah",
    name: "Шах",
    role: "Шеф-барбер",
    bio: "Шеф-барбер в филиале на Театральном.",
    image: "/images/masters/shah.jpg",
  },
  {
    id: "sergey",
    name: "Сергей",
    bio: "Страсть к спорту, футбол и хоккей, искусство бритья.",
    image: "/images/masters/sergey.jpg",
  },
];
