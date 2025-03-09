// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Здесь задаём переводы для всех языков
const resources = {
  en: {
    translation: {
      hello: "Hello, world!",
      welcome: "Welcome to our store",
      bannerAlt: "Banner",
      promo1: "Promo 1",
      promo2: "Promo 2",
      popularProducts: "Popular Products",
      loading: "Loading...",
      errorLoading: "Error loading products",
      // Добавьте дополнительные ключи, если нужно
    },
  },
  ru: {
    translation: {
      hello: "Привет, мир!",
      welcome: "Добро пожаловать в наш магазин",
      bannerAlt: "Баннер",
      promo1: "Акция 1",
      promo2: "Акция 2",
      popularProducts: "Популярные товары",
      loading: "Загрузка...",
      errorLoading: "Ошибка загрузки товаров",
      // Добавьте дополнительные ключи, если нужно
    },
  },
  kk: {
    translation: {
      hello: "Сәлем, Әлем!",
      welcome: "Біздің дүкенге қош келдіңіз",
      bannerAlt: "Баннер",
      promo1: "Акция 1", // Можно задать специфичные для казахского переводы
      promo2: "Акция 2",
      popularProducts: "Танымал өнімдер",
      loading: "Жүктелуде...",
      errorLoading: "Өнімдерді жүктеуде қате",
      // Добавьте дополнительные ключи, если нужно
    },
  },
};

i18n
  // Подключаем плагин для определения языка
  .use(LanguageDetector)
  // Инициализируем react-i18next
  .use(initReactI18next)
  .init({
    resources,             // Подключаем переводы
    fallbackLng: "ru",     // Язык по умолчанию — русский
    interpolation: {
      escapeValue: false,  // React уже экранирует данные
    },
    detection: {
      // Порядок определения языка
      order: ["localStorage", "navigator"],
      // Кэшируем выбранный язык в localStorage
      caches: ["localStorage"],
    },
  });

export default i18n;
