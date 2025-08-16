import React from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/getInitData";

export default function Albums() {
  const { isLoading, data, error } = getInitData("albums");

  return (
    <div>
      <h1>Albums</h1>
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
