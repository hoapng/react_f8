import { useState, useEffect, useLayoutEffect } from "react";

function Content (){
  const [count, setScount] = useState(0);
  const handleRun = () => {
    setScount(count + 1);
  };

    useLayoutEffect(()=>{
      if(count > 3) setScount(0)
    },[count])
    
    return (
      <div className="App">
      <h1>{count}</h1>
      <button onClick={handleRun}>Click</button>
    </div>
      );
}
export default Content