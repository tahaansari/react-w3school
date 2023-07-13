import { useState, useMemo } from "react";

export default function MyUseMemo() {
  console.log("MyUseMemo render");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const calculation = useMemo(() => {
    for (var i = 0; i < 1000; i++) {
      i += 1;
      console.log(i);
    }
    return i;
  }, [count]);

  return (
    <>
      <h1>My UseMemo</h1>
      <div>
        My Todos
        <br />
        <button
          onClick={() => {
            setTodos([...todos, "todo 1"]);
          }}
        >
          Add Todo
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add Count
        </button>
        <ul>
          {todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
      <div>
        Count: {count}
        <br />
        Expensive Calculation : {calculation}
      </div>
    </>
  );
}
