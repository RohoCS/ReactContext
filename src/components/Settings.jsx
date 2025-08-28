import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LangContext } from "../context/LangContext.jsx";

export default function SideBar() {
  const { theme, setTheme, supportedThemes } = useContext(ThemeContext);
  const { lang, setLang, suppLangs } = useContext(LangContext);
  const { t } = useContext(LangContext);

  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [selectedLang, setSelectedLang] = useState(lang);

  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
    setTheme(e.target.value);
  };

  const handleLangChange = (e) => {
    setSelectedLang(e.target.value);
    setLang(e.target.value);
  };

  return (
    <div className="sidebar">
      <form>
        <div>
          <label htmlFor="select-theme">{t("Theme")}: </label>
          <select
            id="select-theme"
            value={selectedTheme}
            onChange={handleThemeChange}
          >
            <option value={supportedThemes.light}>Light</option>
            <option value={supportedThemes.dark}>Dark</option>
          </select>
        </div>
        <div>
          <label htmlFor="select-lang">{t("Language")}: </label>
          <select
            id="select-lang"
            value={selectedLang}
            onChange={handleLangChange}
          >
            {suppLangs.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
