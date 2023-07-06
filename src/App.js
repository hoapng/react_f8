import { useReducer, useRef } from "react";

//init state
const initState = {
  job: '',
  list: []
}

//action
const SET_JOB ='set_job'
const ADD_JOB ='add_job'
const DEL_JOB ='del_job'

const set_job = payload =>{
  return{
    type: SET_JOB,
    payload
  }
}

const add_job = payload =>{
  return{
    type: ADD_JOB,
    payload
  }
}

const del_job = payload =>{
  return{
    type: DEL_JOB,
    payload
  }
}

//reducer
const reducer =(state, action)=>{
  console.log('action', action)
  console.log('Pre state', state)
  let newState
  switch(action.type){
    case SET_JOB:
      newState = {
        ...state, job: action.payload
      }
      break
    case ADD_JOB:
      newState ={
        ...state, list : [...state.list, action.payload]
      }
      break

    case DEL_JOB:
      const newList = [...state.list]
      newList.splice(action.payload, 1)
      newState = {
        ...state, list: newList
      }
      break
    default:
      throw new Error('Invalid')
  }
  return newState
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const {job, list} = state

  const inputRef = useRef()

  const handleAdd =()=>{
    dispatch(add_job(job))
    dispatch(set_job(''))
    inputRef.current.focus()
  }
  console.log(initState)
  return (
    <div>
      <h3>Todo</h3>
      <input
      ref={inputRef}
        value={job}
        placeholder="Enter job name..."
        onChange={e => {
          dispatch(set_job(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((job, index) => (
          <li key={index}>{job} <button onClick={()=>dispatch(del_job(index))}>X</button></li>
        ))}
      </ul>
    </div>
  );
}

export default (App);
