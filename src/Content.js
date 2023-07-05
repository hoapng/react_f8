import { useState, useEffect } from "react";
const tabs = ['posts', 'comments', 'albums']
function Content (){
    // const [title, setTitle] = useState('')
    const [content, setcontent] = useState([])
    const [type, setType] = useState('')
    const [goTop, setGoTop] = useState(false)

    console.log(type)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(content => {
            setcontent(content)
        })
    },[type])

    useEffect(()=>{
        const handleScroll = ()=>{
            console.log(window.scrollY)
            if (window.scrollY>=200) setGoTop(true)
            else setGoTop(false)
        }
        window.addEventListener('scroll', handleScroll)
        console.log('addEventListener')
        //Cleanup function
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener')
        }
    },[])
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
        {goTop && (
            <button
            style={
                {position: 'fixed',
                right: 20,
                bottom: 20}
            }
            >Go Top</button>
        )}
        </>
    )
}
export default Content