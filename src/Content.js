import { useState, useEffect } from "react";

function Content (){
    const [avatar, setAvatar] = useState()

    useEffect(()=>{
        //Clean
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
        
    },[avatar])
    const handlePreviewAvatar =(e)=>{
        const file = e.target.files[0]
        file.preview=URL.createObjectURL(file);
        setAvatar(file)
    }
    return(
        <>
        <input
        type="file"
        onChange={handlePreviewAvatar}
        />
        <br/>
        {avatar && 
        <img src = {avatar.preview} width='80%'></img>}
        </>
    )
}
export default Content