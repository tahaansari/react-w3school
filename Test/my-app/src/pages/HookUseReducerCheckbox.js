import { useReducer } from "react";

function HookUseReducerCheckbox(){

    const [state,dispatch] = useReducer((state,action)=>{
        switch(action.type){
            case "COMPLETED":
                return state.map((todo)=>{
                    if(todo.id == action.id){
                        return {...todo,complete: !todo.complete}
                    }else{
                        return todo;
                    }
                })
            default:
                return state;
        }
    },[
        {
            id:1,
            title: "todo 1",
            complete:false
        },
        {
            id:2,
            title: "todo 2",
            complete:false
        }
    ]
    );

    function handleChange(todo){
        dispatch({type:"COMPLETE",id:todo.id})
    }

    return (
        <>
        {
            state.map((todo)=>(
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.checked} onChange={()=>handleChange(todo)} />
                    <label htmlFor="">{todo.title}</label>
                </div>    
            ))
        }
            
        </>
    )
}

export default HookUseReducerCheckbox;