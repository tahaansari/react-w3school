import { memo } from "react";
function Todos({todos,addTodo}){
    console.log("Todo.JS re-render");
    return(
        <>
            <ul>
                {todos.map((todo,index)=>{
                     return <li key={index}>{todo}</li>
                })}
            </ul>
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default memo(Todos);