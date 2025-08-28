import { useContext } from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/useGetInitData";

import { LangContext } from "../context/LangContext.jsx";

export default function Photos() {
  const { isLoading, data, error } = getInitData("photos");
  const { t } = useContext(LangContext);

  return (
    <div>
      <h1>{t("Photos")}</h1>
      {isLoading && <PulseLoader color={"red"} />}

      {data && !isLoading && (
        <div>
          <ul>
            {data.map((photo) => (
              <div key={photo.id + photo.title}>
                <p>
                  {photo.id}. {photo.title}
                </p>
                <p>Url: {photo.url}</p>
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
