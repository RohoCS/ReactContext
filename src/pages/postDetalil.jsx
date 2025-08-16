import React from "react";
import { useParams } from "react-router";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/getInitData";

export default function PostDetail() {
  let { id } = useParams();
  const { isLoading, data, error } = getInitData("posts", id);

  return (
    <div>
      <h1>Post</h1>
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
