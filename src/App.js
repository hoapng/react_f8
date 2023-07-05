import { memo, useCallback, useState } from "react";
import Content from "./Content";
function App() {
  const [count, setCount] = useState(0);
  
  const increase = useCallback(()=>{
    setCount(pre => pre +1)
  },[])
  
  return (
    <>
    <div>
      <Content onIncrease={increase}></Content>
      <h1>{count}</h1>
      
      
    </div>
    </>
  );
}

export default memo(App);
