import { useState, useEffect } from "react";

function Content (){
    const [countDown, setCountDown] = useState(180)

    useEffect(()=>{
        const timeId = setInterval(()=>{
            setCountDown(pre => pre -1)
            console.log('countDown')
        }, 1000)
        return () => clearInterval(timeId)
    },[])
    return(
        <>
        <h1>{countDown}</h1>
        </>
    )
}
export default Content