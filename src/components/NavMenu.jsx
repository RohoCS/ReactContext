import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { LangContext } from "../context/LangContext.jsx";
import { elContent } from "../const";

export default function Sidebar() {
  const { t } = useContext(LangContext);

  return (
    <aside className="navmenu">
      <nav>
        <ul>
          {elContent.map((item, index) => {
            if (!item.link.includes(":")) {
              return (
                <li key={index}>
                  <NavLink to={item.link}>{t(item.text)}</NavLink>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </aside>
  );
}
