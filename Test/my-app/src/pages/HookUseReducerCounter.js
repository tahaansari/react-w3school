import { useReducer } from "react";

function HookUseReducerCounter(){

    const [state,dispatch] = useReducer((state,action)=>{
        return {counter:state.counter+1}
    },{counter:0})

    const handleClick = ()=>{
        dispatch();
    }

    return (
        <>
            <button onClick={()=>handleClick("minus")}>-</button>
            {state.counter}
            <button onClick={()=>handleClick("plus")}>+</button>
        </>
    )
}

export default HookUseReducerCounter;