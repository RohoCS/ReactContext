import { useContext } from "react";

import { LangContext } from "../context/LangContext.jsx";

export default function Photos() {
  const { t } = useContext(LangContext);
  return <h1>{t("Home")}</h1>;
}
