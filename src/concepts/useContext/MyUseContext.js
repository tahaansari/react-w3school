import { createContext, useState } from "react";
import Component1 from "../../components/Component1"

export const CounterContext = createContext();

export default function MyUseContext(){
    const [counter,setCounter] = useState(154);
    return(
        <>
            <h1>My UseContext</h1>
            <CounterContext.Provider value={counter}>
                <Component1/>
            </CounterContext.Provider>
        </>
    )
}