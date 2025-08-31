import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { LangContext } from "../../context/LangContext.jsx";
import { elContent } from "../../const.jsx";

import "./navMenu.styles.css";

export default function NavMenu() {
  const { t } = useContext(LangContext);

  return (
    <nav>
      <ul className="navmenu__list">
        {elContent.map((item, index) => {
          if (!item.link.includes(":")) {
            return (
              <li key={index} className="navmenu__item">
                <NavLink className="navmenu__link" to={item.link}>
                  {t(item.text)}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
