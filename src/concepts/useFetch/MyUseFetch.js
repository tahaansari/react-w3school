import { useState } from "react";
import useFetch from "./useFetch";
export default function MyUseFetch() {
  const [todos] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <h2>MyUseFetch</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
