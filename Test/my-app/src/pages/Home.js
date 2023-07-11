export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

// import {useCallback, useState} from "react";
// import {useEffect, useRef} from "react";
// import Todos from "../components/Todos";

// export default function Home(){

//     console.log("Home.JS re-render");

//     const [todos,setTodos] = useState(['todo1','todo2','todo3']);

//     // const [val,setVal] = useState('');

//     // const count = useRef(0);

//     function increment(){
//         setCounter((c => c+1))
//     }

//     // useEffect(()=>{
//     //     console.log('hello')
//     //     count.current = count.current + 1;
//     // })

//     return(
//         <div>
//             <Todos todos={todos} addTodo={addTodo} />
//             <br />
//             counter {counter} <button onClick={increment}>Increment</button>
//             {/* <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
//             render count is - {count.current}  */}
//         </div>
//     )
// }
