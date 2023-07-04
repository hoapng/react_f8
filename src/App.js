import { useState } from "react";

const gifts = [
  'i9',
  'ram 32g',
  'keyboard'
]

function App() {
  const [gift, setGift]= useState();
  const random =()=>{
    const index =Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }
  return (
    <>
    <div>
      <h1>{gift || 'Chua lay thuong'}</h1>
      <button onClick={random}>Lay thuong</button>
    </div>
    </>
  );
}

export default App;
