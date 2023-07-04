import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState()
  return (
    <>
    <div>
      <button onClick={()=>setShow(!show)}>show</button>
      {show && <Content/>}
    </div>
    </>
  );
}

export default App;
