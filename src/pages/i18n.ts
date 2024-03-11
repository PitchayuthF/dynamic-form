// import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import i18next from "i18next";

i18next
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    // defaultLocale: 'en',
    // locales: ['th', 'en'],
    lng: "th",
    fallbackLng: "th",
    backend: {
      loadPath: "http://localhost:3000/locales/{{lng}}/{{ns}}.json",
    },
  });
export default i18next;
