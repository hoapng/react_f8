import { useStore, actions } from "./store";


function App (){
  const [state, dispatch] = useStore()
  const {list, input} = state

  const handleAdd = ()=>{
    dispatch(actions.add(input))
  }

  return (
    <div style={{ padding: 20 }}>
        <input 
          value={input} 
          onChange={e => {
            dispatch(actions.setInput(e.target.value))}}
          />
          <button onClick={handleAdd}>Add</button>
          {list.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
    </div>
  );
}
export default App