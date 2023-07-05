import { useState, useEffect } from "react";

function Content (){
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        console.log('addEventListener')
        //Cleanup function
        return ()=>{
            window.removeEventListener('scroll', handleResize)
            console.log('removeEventListener')
        }
    },[])
    return(
        <>
        <h1>{width}</h1>
        </>
    )
}
export default Content