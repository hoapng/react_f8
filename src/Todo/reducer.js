import { ADD_JOB, DEL_JOB, SET_JOB } from "./constain"

//init state
export const initState = {
    job: '',
    list: []
  }
  
  
  
  //reducer
  const reducer =(state, action)=>{

    switch(action.type){
      case SET_JOB:
        return{
          ...state, job: action.payload
        }
        
      case ADD_JOB:
        return{
          ...state, list : [...state.list, action.payload]
        }
        
  
      case DEL_JOB:
        const newList = [...state.list]
        newList.splice(action.payload, 1)
        return{
          ...state, list: newList
        }
        
      default:
        throw new Error('Invalid')
    }
    
  }
  export default reducer