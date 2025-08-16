import React from "react";
import { PulseLoader } from "react-spinners";
import { getInitData } from "../hooks/getInitData";

export default function Todos() {
  const { isLoading, data, error } = getInitData("todos");

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <PulseLoader color={"red"} />}

      {data && !isLoading && (
        <div>
          <ul>
            {data.map((todo) => (
              <div key={todo.id + todo.title}>
                <h2>
                  {todo.id}. {todo.title}
                </h2>
                <p>
                  Completed: <input type="checkbox" checked={todo.completed} />
                </p>
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
