import React from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/getInitData";

export default function Photos() {
  const { isLoading, data, error } = getInitData("photos");

  return (
    <div>
      <h1>Photos</h1>
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
