import { useState } from "react";
const orders = [100, 200, 300];
function App() {
  
  const [couter, setCouter] = useState(()=>{
    const total = orders.reduce((total, cur) => total+cur);
    return total;
  })
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
