import { useState, useEffect } from "react";
function Content (){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        
        document.title = title
    })
    return(
        <>
        <input 
        value={title}
        onChange={e=>setTitle(e.target.value)}/>
        
        </>
    )
}
export default Content