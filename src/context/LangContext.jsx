import { createContext, useState, useEffect } from "react";

import { suppLangs, translations } from "./LangContext.const.js";

const StorageKey = "lang";

export const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  let currLang = localStorage.getItem(StorageKey) || suppLangs[0];
  const [lang, setLang] = useState(currLang);
  const [langIndex, setLangIndex] = useState(0);

  function t(str) {
    if (langIndex <= 0) return str;
    return translations[langIndex][str] ?? str;
  }

  useEffect(() => {
    localStorage.setItem(StorageKey, lang);
    setLangIndex(suppLangs.findIndex((i) => i === lang));
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, suppLangs }}>
      {children}
    </LangContext.Provider>
  );
};
