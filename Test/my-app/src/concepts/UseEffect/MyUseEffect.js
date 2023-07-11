import {useEffect, useState} from "react";
export default function MyUseEffect(){
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCounter(()=>counter+1)
        },1000)
    },[counter])
    return(
        <>
            <h1>My UseEffect</h1>
            Counter is {counter}
        </>
    )
}