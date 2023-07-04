import { useState } from "react";

function App() {
  
  const [job, setJob] = useState('')
  const [list, setList] = useState(()=>{
    const storageList = JSON.parse(localStorage.getItem('list'));
    return storageList ?? []
  }
    )
  const handleAdd=()=>{
    setList(prev => {
      const newList = [...prev,job];

      //Save to local storage
      const jsonList = JSON.stringify(newList);
      localStorage.setItem('list', jsonList)
      return newList;
    });
    setJob('')
  }
  return (
    <>
    <div>
      <input value={job} onChange={e => setJob(e.target.value)}/>
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {list.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
