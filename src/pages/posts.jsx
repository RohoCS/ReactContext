import React from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/getInitData";
import { Link } from "react-router";

export default function Posts() {
  const { isLoading, data, error } = getInitData("posts");

  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <PulseLoader color={"red"} />}

      {data && !isLoading && (
        <div>
          <ul>
            {data.map((post) => (
              <div key={post.id + post.title}>
                <p>
                  <h2>
                    <Link to={"/posts/" + post.id}>
                      {post.id}. {post.title}
                    </Link>
                  </h2>
                </p>
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
