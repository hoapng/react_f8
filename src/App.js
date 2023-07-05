import { memo, useState } from "react";
import Content from "./Content";
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const increase = ()=>{
    setCount(count + 1)
  }
  const increase2 = ()=>{
    setCount2(count2 + 1)
  }
  return (
    <>
    <div>
      <Content count2 = {count2}></Content>
      <h1>{count}</h1>
      <button onClick={increase}>Click</button>
      <button onClick={increase2}>Click2</button>
    </div>
    </>
  );
}

export default memo(App);
