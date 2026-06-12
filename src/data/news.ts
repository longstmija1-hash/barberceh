export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "price-change-2024",
    title: "Изменение цен с 10 апреля 2024",
    excerpt:
      "Уважаемые гости, спешим информировать вас о важном решении — с 10 апреля мы поднимаем стоимость на наши услуги.",
    date: "2024-04-10",
  },
  {
    id: "looking-for-master",
    title: "Разыскиваем мастера!",
    excerpt: "Куда же ты пропал??? Разыскивается мастер в ЦЕХ!",
    date: "2024-03-15",
  },
  {
    id: "e-certificate",
    title: "Электронный сертификат ЦЕХ",
    excerpt:
      "Сертификат — электронный, а стрижки настоящие! Теперь не надо ждать курьера и стоять в пробке...",
    date: "2024-02-20",
  },
  {
    id: "irritation-tips",
    title: "Как избавиться от раздражения",
    excerpt: "Почему появляется раздражение после бритья?",
    date: "2024-01-12",
  },
];
