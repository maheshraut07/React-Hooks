import React,{useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}


const UseReduceCounter2 = () => {

  const [count,dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <div>First Counter  : {count.firstCounter}</div>
        <div>second Counter  : {count.secondCounter}</div>

        <div style={{display:"flex", justifyContent:"space-between",marginTop:'5vh'}}>
            <button onClick={() => dispatch({type:'increment',value:1})}>Increment first Counter</button>
            <button onClick={() => dispatch({type:'decrement',value:1})}>Decrement first Counter</button>
            <button onClick={() => dispatch({type:'increment',value:5})}>Increment first Counter by 5</button>
            <button onClick={() => dispatch({type:'decrement',value:5})}>Decrement first Counter by 5</button>
            <button onClick={() => dispatch({type:'increment2',value:1})}>Increment second Counter</button>
            <button onClick={() => dispatch({type:'decrement2',value:1})}>Decrement second Counter</button>
            <button onClick={() => dispatch({type:'increment2',value:5})}>increment second Counter by 5 </button>
            <button onClick={() => dispatch({type:'decrement2',value:5})}>Decrement second Counter by 5 </button>
            <button onClick={() => dispatch({type:'reset'})}>Reset both the Counters</button> 
        </div>
    </div>
  )
}

export default UseReduceCounter2