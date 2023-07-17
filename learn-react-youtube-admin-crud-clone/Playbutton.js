import { useState } from "react"

function Playbutton({message,onSmash,children,onPlay,onPause}){
    const [playingStatus,setPlayingStatus]=useState(false)
    function handleClick({target}){
        setPlayingStatus(playingStatus=>!playingStatus)
       
    }
    return (
        <>
    <button className="btn btn-primary" onClick={handleClick}>{playingStatus?'pause':'play'} {children}</button>
        </>
    )

}
export default Playbutton