import {useState, useEffect, createContext, useRef} from "react";
import Todos from "../components/Todos";
import Component1 from "../components/Component1";


export const CounterContext = createContext();

export default function Home(){
    
    const [todos,setTodos] = useState(['todo 1','todo 2']);
    const [counter,setCounter] = useState(0);
    const [val,setVal] = useState('');
    
    const count = useRef(0);
    
    function increment(){
        setCounter((c => c+1))
    }

    useEffect(()=>{
        console.log('hello')
        count.current = count.current + 1;
    })

    return(
        <div>
            <Todos todos={todos}/>
            counter {counter}
            <br />
            <button onClick={increment}>Increment</button>
            <CounterContext.Provider value={counter}>
                <Component1/>
            </CounterContext.Provider>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            render count is - {count.current} 
        </div>
    )
}