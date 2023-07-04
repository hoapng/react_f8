import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML,CSS"
  },
  {
    id: 2,
    name: "JS"
  },
  {
    id: 3,
    name: "ReactJS"
  }
]
function App() {
  const [check, setCheck] = useState()
  const handleSubmit = ()=>{
    //call api
    console.log({id: check})
  }
  return (
    <>
    <div>
      {courses.map(courses => (
        <div key={courses.id}>
          <input type="radio" checked={check === courses.id} onChange={()=>setCheck(courses.id)}/>{courses.name}
        </div>
      ))}
      <button onClick={handleSubmit}>DK</button>
    </div>
    </>
  );
}

export default App;
