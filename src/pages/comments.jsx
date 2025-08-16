import React from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/getInitData";

export default function Comments() {
  const { isLoading, data, error } = getInitData("comments");

  return (
    <div>
      <h1>Comments</h1>
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
