import { memo } from "react";
function MyUseCallback({ todos, addTodo }) {
  console.log("MyUseCallback.JS render");
  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}

export default memo(MyUseCallback);
