import { useContext } from "react"
import { CounterContext } from "../concepts/useContext/MyUseContext";

export default function Component5(){
    const counter = useContext(CounterContext);    
    return(
        <>
            <h1>Component 5 - Counter is {counter}</h1>
        </>
    )
}