import { useContext } from "react";
import { useParams } from "react-router";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/useGetInitData";

import { LangContext } from "../context/LangContext.jsx";

export default function PostDetail() {
  let { id } = useParams();
  const { isLoading, data, error } = getInitData("posts", id);
  const { t } = useContext(LangContext);

  return (
    <div>
      <h1>{t("Post")}</h1>
      {isLoading && <PulseLoader color={"red"} />}

      {data && !isLoading && (
        <div>
          <ul>
            <div key={data.id + data.title}>
              <h2>{data.title}</h2>
              <p>{data.body}</p>
            </div>
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
