import { useState, useEffect } from "react";
function Content (){
    // const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts => {
            setPosts(posts)
        })
    },[])
    return(
        <>
        {/* <input 
        value={title}
        onChange={e=>setTitle(e.target.value)}/> */}
        <ul>
            {posts.map(i =>(<li key={i.id}>{i.title}</li>))}
        </ul>
        </>
    )
}
export default Content