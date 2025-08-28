import { useContext } from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/useGetInitData";
import { Link } from "react-router";

import { LangContext } from "../context/LangContext.jsx";

export default function Posts() {
  const { isLoading, data, error } = getInitData("posts");
  const { t } = useContext(LangContext);

  return (
    <div>
      <h1>{t("Posts")}</h1>
      {isLoading && <PulseLoader color={"red"} />}

      {data && !isLoading && (
        <div>
          <ul>
            {data.map((post) => (
              <div key={post.id + post.title}>
                <h2>
                  <Link to={"/posts/" + post.id}>
                    {post.id}. {post.title}
                  </Link>
                </h2>
                <p>{post.body}</p>
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
