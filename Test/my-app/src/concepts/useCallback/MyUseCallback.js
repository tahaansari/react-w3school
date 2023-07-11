import { useCallback, useState } from "react";
import Todos from "./Todos";

export default function MyUseCallback() {
  console.log("MyUseCallback.JS render");

  const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);

  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "Todo no 1"]);
  }, [todos]);

  return (
    <>
      <h1>My UseCallback</h1>
      <Todos todos={todos} addTodo={addTodo} />
      <br />
      <br />
      Counter - {counter}
      <button onClick={addCounter}>Add</button>
    </>
  );
}
