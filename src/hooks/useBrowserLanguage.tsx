import { useEffect, useState } from "react";

export const useBrowserLanguage = () => {
  const [lang, setLang] = useState("th");
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    setLang(browserLang);
  }, []);
  return lang;
};
