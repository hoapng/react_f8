import { useState } from "react";

function App() {
  const [couter, setCouter] = useState(1)
  const handleIncrease =()=>{
    setCouter(pre => pre +1);
  }

  return (
    <>
    <div>
      <h1>{couter}</h1>
      <button onClick={handleIncrease}>Tang</button>
    </div>
    </>
  );
}

export default App;
