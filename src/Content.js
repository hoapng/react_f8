import { useEffect, useRef, useState } from 'react';
let timerId
function Content (){
  const [count, setCount] = useState(60);
  const timerId = useRef()
  const preCount = useRef()
  const h1ref = useRef()
  useEffect(()=>{
    preCount.current =count
  },[])
  useEffect(()=>{
    const rect = h1ref.current.getBoundingClientRect()
    console.log(rect)
    console.log(h1ref.current)
  })

  const handleStart = () => {
    timerId.current = setInterval(()=>{
      setCount(pre => pre -1)
    },1000)
    console.log('Start',timerId.current)
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log('Stop',timerId.current)
  };
  console.log(count, preCount.current)

    useEffect(()=>{
      
    },[])
    
    return (
      <div>
        <h1 ref={h1ref}>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    );
}
export default Content