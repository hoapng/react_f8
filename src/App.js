import { useReducer } from "react";

//init state
const initState = 0;

//action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//reducer
const reducer = (state, action)=>{
  console.log('check')
  switch(action){
    case UP_ACTION:
      return state +1
    case DOWN_ACTION:
      return state -1
    default:
      throw new Error('Invalid')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  
  return (
    <div style={{ padding: '0 20px' }}>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={()=>dispatch(UP_ACTION)}>Up</button>
    </div>
    )
}

export default (App);
