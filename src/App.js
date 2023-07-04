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
  const [checked, setchecked] = useState([])
  console.log(checked)
  const handleSubmit = ()=>{
    //call api
    console.log({ id: checked})
  }
  const handelchecked = (id)=>{
    setchecked(prev =>{
    const isChecked = checked.includes(id)
    if(isChecked){
      return checked.filter(item => item !== id)
    }else {
      return [...prev, id]
    }})
  }
  return (
    <>
    <div>
      {courses.map(courses => (
        <div key={courses.id}>
          <input type="checkbox" checked={checked.includes(courses.id)} onChange={()=>handelchecked(courses.id)}/>{courses.name}
        </div>
      ))}
      <button onClick={handleSubmit}>DK</button>
    </div>
    </>
  );
}

export default App;
