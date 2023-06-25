import {useCallback, useState} from "react";
import {useEffect, createContext, useRef} from "react";
import Todos from "../components/Todos";
// import Component1 from "../components/Component1";
// export const CounterContext = createContext();

export default function Home(){

    console.log("Home.JS re-render");
    
    const [todos,setTodos] = useState(['todo1','todo2','todo3']); 

    const addTodo =  useCallback(()=>{
        setTodos((t)=>[...t,"Todo no 1"])
    },[todos]) 

    const [counter,setCounter] = useState(0);

    // const [val,setVal] = useState('');
    
    // const count = useRef(0);
    
    function increment(){
        setCounter((c => c+1))
    }

    // useEffect(()=>{
    //     console.log('hello')
    //     count.current = count.current + 1;
    // })

    return(
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <br />
            counter {counter} <button onClick={increment}>Increment</button>
            {/* <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            render count is - {count.current}  */}

            {/* <CounterContext.Provider value={counter}>
                <Component1/>
            </CounterContext.Provider> */}

        </div>
    )
}