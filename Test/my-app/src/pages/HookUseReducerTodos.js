import { useState } from "react";

function HookUseReducerTodos(){

    const [task,addTask] = useState('')

    const addTodo = () => {
        console.log('add todo called');

    }
    return(
        <>
            <input type="text" value={task} onChange={  addTask((e)=>{e.target.valu3e})    } />
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default HookUseReducerTodos;