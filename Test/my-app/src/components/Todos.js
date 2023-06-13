import { memo } from "react"

function Todos({todos}){
    console.log('todo component re-rendered')
    return(
        <>
            <ul>
                {todos.map((todo,index)=>{
                     return <li key={index}>{todo}</li>
                })}
            </ul>
        </>
    )
}

export default memo(Todos);