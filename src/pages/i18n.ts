import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nHttpLoader from "i18next-http-backend";
import Axios from "axios";
i18n
  .use(initReactI18next)
  .use(i18nHttpLoader)
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: "th",
    fallbackLng: "th",
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: "http://localhost:3000/i18n.json",
      parse: (data: any) => {
        return data;
      },
      request: (options: any, url: any, payload: any, callback: any) => {
        Axios.get(url)
          .then((res) => {
            callback(null, res);
          })
          .catch((err) => {
            console.error("error ", err);
            callback(err, null);
          });
      },
    },

    //example json data
    //   resources: {
    //     en: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey Yo Im at home',
    //         'Hey Yo Im inside Room': 'Hey Yo Im inside Room',
    //       },
    //     },
    //     es: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey yo estoy en casa',
    //         'Hey Yo Im inside Room': 'Hola, yo estoy dentro de la habitación',
    //       },
    //     },
    //     de: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey Yo Ich bin zu Hause',
    //         'Hey Yo Im inside Room': 'Hey Yo Ich bin im Zimmer',
    //       },
    //     },
    //   },
  });
export default i18n;
