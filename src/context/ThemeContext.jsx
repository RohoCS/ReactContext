import React, { useState, createContext, useEffect } from "react";
import "./theme.css";

const StorageKey = "features-color-theme";

const supportedThemes = {
  light: "light",
  dark: "dark",
};

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  let curTheme = localStorage.getItem(StorageKey);

  if (!curTheme) {
    curTheme = supportedThemes.dark;
  }

  const [theme, setTheme] = useState(curTheme);

  useEffect(() => {
    localStorage.setItem(StorageKey, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, supportedThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};
