import { useContext } from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/useGetInitData";

import { LangContext } from "../context/LangContext.jsx";

export default function Albums() {
  const { isLoading, data, error } = getInitData("albums");
  const { t } = useContext(LangContext);

  return (
    <div>
      <h1>{t("Albums")}</h1>
      {isLoading && <PulseLoader color={"red"} />}

      {data && !isLoading && (
        <div>
          <ul>
            {data.map((album) => (
              <div key={album.id + album.title}>
                <h2>
                  {album.id}. {album.title}
                </h2>
              </div>
            ))}
          </ul>
        </div>
      )}

      {error && !isLoading && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
