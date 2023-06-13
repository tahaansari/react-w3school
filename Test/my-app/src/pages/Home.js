import {useState} from "react";
import Todos from "../components/Todos";
export default function Home(){
    
    console.log('home component re-rendered')

    const [todos,setTodos] = useState(['todo 1','todo 2']);
    const [counter,setCounter] = useState(0);

    function increment(){
        setCounter((c => c+1))
    }

    return(
        <div>
            <Todos todos={todos}/>
            counter {counter}
            <br />
            <button onClick={increment}>Increment</button>
        </div>
    )
}