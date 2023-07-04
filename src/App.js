import { useState } from "react";


function App() {
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const handleSubmit = ()=>{
    //call api
    console.log(name, email);
  }
  return (
    <>
    <div>
      <input value={name} onChange={event => setName(event.target.value)}></input>
      <input value={email} onChange={event => setEmail(event.target.value)}></input>
      <button onClick={handleSubmit}>DK</button>
    </div>
    </>
  );
}

export default App;
