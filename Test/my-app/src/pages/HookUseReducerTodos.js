// MAKE A REACT COMPONENT WHICH ACCEPT A TASK FROM A INPUT FIELD 
// ADD THAT TASK AS TODO ARRAY AND PRINCE THAT ON THE SCREEN USING REDUCER CONCEPT

import { useReducer, useState } from "react";

function HookUseReducerTodos(){

    const [task,setTask] = useState('')
    const [todos,dispatch] = useReducer((todos,action) =>{
        switch(action.type){
            case "addTodo":
                return [...todos, {id:Date.now(), task: action.payload.task, completed:true }]
            case "updateTodo":
                return todos.map((todo)=>{
                        if(todo.id == action.payload.id){
                            return [...todos, todo.completed = !todo.completed]
                        }else{
                            return todos;
                        }
                    })
            default:
                break
        }
    },[]);

    return(
        <>
            <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} />
            <button onClick={()=>{dispatch({ type:"addTodo",payload:{task:task} })}}>Add Todo</button>
            <ul>
                {todos.map((todo)=>{
                    return (
                        <li key={todo.id} style={{color: !todo.completed ? "red" : "green"}} >
                            {todo.task}
                            <button onClick={()=>{dispatch({ type:"updateTodo",payload:{id:todo.id} })}}>Toggle</button>
                            <button>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default HookUseReducerTodos;