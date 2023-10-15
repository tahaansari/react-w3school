// USECALLBACK CONCEPT
import { memo, useCallback, useState } from "react";
import Todos from "../components/Todos";

function About() {
  console.log('About.js re-rendered');
  const [todos,setTodos] = useState([]);
  const addTodo = () => {
    setTodos( (t) => [...t,"new todo"] )
  }
  return (
    <div>
      <h1>My Todos</h1>
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  )
}

export default memo(About);