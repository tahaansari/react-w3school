export default function Todos({todos}){
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