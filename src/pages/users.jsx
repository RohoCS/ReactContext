import { useContext } from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/useGetInitData";

import { LangContext } from "../context/LangContext.jsx";

export default function Comments() {
  const { isLoading, data, error } = getInitData("users");
  const { t } = useContext(LangContext);

  return (
    <div>
      <h1>{t("Users")}</h1>
      {isLoading && <PulseLoader color={"red"} />}

      {data && !isLoading && (
        <div>
          <ul>
            {data.map((user) => (
              <div key={user.id + user.name}>
                <h2>{user.id}</h2>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
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
