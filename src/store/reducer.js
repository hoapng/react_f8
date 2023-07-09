import { ADD, INPUT } from "./constants"

const initState ={
    list: [],
    input: '',
}
function reducer(state, action){
    switch(action.type){
        case INPUT:
            return {
                ...state,
                input: action.payload
            }
        case ADD:
            return{
                ...state,
                list: [...state.list, action.payload]
            }
        default: 
            throw new Error('Invalid')
    }
}
export {initState}
export default reducer