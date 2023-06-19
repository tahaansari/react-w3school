import { memo } from "react"

function Todos({todos,addTodo}){
    console.log('todo component re-rendered')
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