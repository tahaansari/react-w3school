import { memo } from "react";
function Todos({ todos }) {
  console.log("Todos.JS render");
  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  );
}

export default memo(Todos);
