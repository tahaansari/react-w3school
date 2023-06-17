export default function UseCallback({todos,addTodo}) {
  const style = {
    backgroundColor: "blue",
    color:"white",
    padding:"1rem"
  }
  return (
    <div style={style}>
      My Todos
      <ul>
        {
          todos.length ?  todos.map((todo,id)=>{
              return <li key={id}>{todo}</li>
            })
           : "No Todo"
        }
      </ul>
      <button onClick={addTodo}>Button</button>
    </div>
  )
}