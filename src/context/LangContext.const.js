import { createContext } from "react";

export const LangContext = createContext(null);

export const suppLangs = ["English", "Українська", "Русский"];

export const translations = [
  {},
  {
    Home: "Головна",
    Posts: "Пости",
    Post: "Пост",
    Comments: "Коментарі",
    Albums: "Альбоми",
    Photos: "Фотографії",
    Todos: "Замітки",
    Users: "Користувачі",
    Theme: "Тема",
    Language: "Мова",
  },
  {
    Home: "Главная",
    Posts: "Посты",
    Post: "Пост",
    Comments: "Комментарии",
    Albums: "Альбомы",
    Photos: "Фотографии",
    Todos: "Заметки",
    Users: "Пользователи",
    Theme: "Тема",
    Language: "Язык",
  },
];
