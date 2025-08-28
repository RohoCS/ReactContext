import { useContext } from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/useGetInitData";

import { LangContext } from "../context/LangContext.jsx";

export default function Comments() {
  const { isLoading, data, error } = getInitData("comments");
  const { t } = useContext(LangContext);

  return (
    <div>
      <h1>{t("Comments")}</h1>
      {isLoading && <PulseLoader color={"red"} />}

      {data && !isLoading && (
        <div>
          <ul>
            {data.map((comment) => (
              <div key={comment.id + comment.name}>
                <h2>
                  {comment.id}. {comment.name}
                </h2>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
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
