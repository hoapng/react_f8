import { useState } from "react";

function App() {
  const [info, setInfo] = useState({name: 'Hoa', age: '25'});
    const handleUpdate=()=>{
      setInfo({
        ...info,
        bio: 'aaaa' 
      })
    }
  return (
    
    <>
    <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
    </>
  );
}

export default App;
