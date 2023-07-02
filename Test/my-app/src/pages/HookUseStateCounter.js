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
        <div style={{fontSize:"20px"}}>
            <button style={{padding:"1rem"}} onClick={()=>{updateCounter("minus")}}>-</button>
             {counter}
            <button style={{padding:"1rem"}} onClick={()=>{updateCounter("plus")}}>+</button>
        </div>
        </>
    )
}
export default HookUseStateCounter;