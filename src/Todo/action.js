import { ADD_JOB, DEL_JOB, SET_JOB } from "./constain"


export const set_job = payload =>{
    return{
      type: SET_JOB,
      payload
    }
  }
  
   export const add_job = payload =>{
    return{
      type: ADD_JOB,
      payload
    }
  }
  
  export const del_job = payload =>{
    return{
      type: DEL_JOB,
      payload
    }
  }