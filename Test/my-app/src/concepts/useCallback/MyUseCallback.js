import { useState } from "react";
import Todos from "./Todos";

export default function MyMemo() {
  console.log("MyMemo.JS render");

  const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);

  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Memo</h1>
      <Todos todos={todos} />
      Counter - {counter}
      <button onClick={addCounter}>Add</button>
    </>
  );
}
