import {useState} from "react";
import Todos from "../components/Todos";
export default function Home(){
    const [todos,setTodos] = useState(['todo 1','todo 2']);
    const [counter,setCounter] = useState(0);

    function increment(){
        console.log('increment function called')
    }

    return(
        <div>
            <Todos todos={todos}/>
            counter {counter}
            <button onClick={increment}>Increment</button>
        </div>
    )
}