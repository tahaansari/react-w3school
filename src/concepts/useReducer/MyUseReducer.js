import HookUseReducerCounter from './HookUseReducerCounter'
import HookUseReducerTodos from './HookUseReducerTodos';

export default function MyUseReducer(){
    return(
        <>
            <h1>UseReducer</h1>
            <HookUseReducerCounter/>
            <br />
            <HookUseReducerTodos/>
        </>
    )
}