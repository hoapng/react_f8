import { useState, useEffect } from "react";
const tabs = ['posts', 'comments', 'albums']
function Content (){
    // const [title, setTitle] = useState('')
    const [content, setcontent] = useState([])
    const [type, setType] = useState('')

    console.log(type)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(content => {
            setcontent(content)
        })
    },[type])
    return(
        <>
        {tabs.map(tab => (
            <button 
            key={tab}
            style={type === tab ? {backgroundColor: "yellow"} : {}}
            onClick={() => setType(tab)}>
                {tab}
            </button>
        ))}
        <ul>
            {content.map(i =>(<li key={i.id}>{i.title || i.name}</li>))}
        </ul>
        </>
    )
}
export default Content