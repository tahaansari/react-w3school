import { useState } from "react";
function HookUseStateCounter(){
    const [counter,setCounter] = useState(0);
    const updateCounter = (option) => {
        console.log("please update the counter");
        switch(option){
            case "minus":
                setCounter((counter)=>counter-1)
                break;
            case "plus":
                setCounter((counter)=>counter+1)
                break;
            default:
                break;
        }
    }
    return(
        <>
            <button onClick={()=>{updateCounter("minus")}}>-</button>
                {counter}
            <button onClick={()=>{updateCounter("plus")}}>+</button>
        </>
    )
}
export default HookUseStateCounter;