function logger(reducer){
    return (preState, action) =>{
        console.group(action.type)

        console.log('preState', preState)
        console.log('action', action)
        const newState = reducer(preState, action)

        console.log('preState', preState)

        console.groupEnd()
        return newState
    
    }
}
export default logger