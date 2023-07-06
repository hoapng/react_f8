import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { add_job, del_job, set_job } from "./action";
import logger from './logger'


function TodoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
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

export default (TodoApp);
