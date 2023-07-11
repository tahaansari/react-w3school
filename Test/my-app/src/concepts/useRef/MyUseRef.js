import {useRef, useEffect, useState} from "react"
export default function MyUseRef(){
    console.log('component got re-rendered')
    const [name,setName] = useState("")
    const counter = useRef(0);
    const inputElement = useRef();
    useEffect(()=>{
        console.log('useEffect hook called')
        counter.current = counter.current+1;
    })
    const focusInput = () => {
        inputElement.current.focus();
    }


    const previousValue = useRef("");
    const [currentValue,setCurrentValue] = useState("")
    
    useEffect(()=>{
        console.log('use effect called')
        previousValue.current = currentValue;
    },[currentValue])
    
    return(
        <>
            <h1>My UseRef</h1> 
            
            <br />
            <br />

            <div>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <h2>Render Count: {counter.current}</h2>
            </div>
         
            <br />
            <br />

            <div>
                <input type="text" ref={inputElement} />
                <button onClick={focusInput}>Focus</button>
            </div>

            <br />
            <br />
            
            <div>
                <input type="text" placeholder="change value" value={currentValue} onChange={(e)=>{setCurrentValue(e.target.value)}} />
                <br />
                Current Value: {currentValue}
                <br />
                Previous Value: {previousValue.current}
            </div>
        </>
    )
}