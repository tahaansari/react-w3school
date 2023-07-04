// MAKE A REACT COMPONENT WHICH ACCEPT A TASK FROM A INPUT FIELD 
// ADD THAT TASK AS TODO ARRAY AND PRINCE THAT ON THE SCREEN USING REDUCER CONCEPT

import { useReducer, useState } from "react";

function HookUseReducerTodos(){

    const initialTodos =  { todos: [] }

    const reducer = (state,action) =>{
        switch(action.type){
            case "addTodo":
                return (todo)=>{ [...todo,action.payload.task] }
        }
        
    }

    const [task,setTask] = useState('')

    const [state,dispatch] = useReducer(reducer,initialTodos);

    const addTodo = (task) => {
        dispatch({type:"addTodo",payload:task})
    }

    return(
        <>
            <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} />
            <button onClick={()=>{addTodo(task)}}>Add Todo</button>
        </>
    )
}

export default HookUseReducerTodos;