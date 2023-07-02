import { useReducer } from "react";

const ACTIONS = {
    MINUS:"minus",
    PLUS:"plus",
}

function HookUseReducerCounter(){

    const [state,dispatch] = useReducer((state,action)=>{
        switch(action.type){
            case ACTIONS.MINUS:
                return {counter:state.counter-1}
            case ACTIONS.PLUS: 
                return {counter:state.counter+1}
            default:
                return state
        }
    },{counter:0})

    const handleClick = (option)=>{
        dispatch({type:option});
    }

    return (
        <>
            <button onClick={()=>handleClick(ACTIONS.MINUS)}>-</button>
            {state.counter}
            <button onClick={()=>handleClick(ACTIONS.PLUS)}>+</button>
        </>
    )
}

export default HookUseReducerCounter;