import { BookOpen, Link2, Settings2, SquareTerminal } from "lucide-react";

export const SIDEBAR_DATA = {
  user: {
    name: "iwanivanov",
    email: "iwanivanov@gmail.com",
    avatar: "https://github.com/gaearon.png",
  },
  navMain: [
    {
      title: "Дэшборд",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Создать проект",
          url: "/flow",
        },
        {
          title: "Мои проекты",
          url: "/dashboard",
        },
        {
          title: "Шаблоны",
          url: "/store",
        },
      ],
    },
    {
      title: "Интеграции",
      url: "/connections",
      icon: Link2,
    },
    {
      title: "Документация",
      url: "/documentation",
      icon: BookOpen,
      items: [
        {
          title: "Введение",
          url: "/documentation",
        },
        {
          title: "Начало работы",
          url: "/documentation",
        },
        {
          title: "Обучающие материалы",
          url: "/documentation",
        },
        {
          title: "История изменений",
          url: "/documentation",
        },
      ],
    },
    {
      title: "Настройки",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "Основные",
          url: "/settings/general",
        },
      ],
    },
  ],
};
