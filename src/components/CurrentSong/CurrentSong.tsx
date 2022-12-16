import React, { useEffect, useState } from 'react'
import { IoPause,IoPlayBack,IoPlay,IoPlayForward } from "react-icons/io5";
import { TbArrowsCross } from "react-icons/tb";
import { RiRepeat2Line } from "react-icons/ri";

export default function CurrentSong({currentSong,setCurrentSong}:any) {
    const [isPlay,setPlay] = useState<Boolean>(false);
    const [diskPlay,setDiskPlay] = useState<String>("on-disk");
    const [isSuffle,setSuffle] = useState<Boolean>(false);
    const [isLoop,setLoop] = useState<Boolean>(false);
    const playTrack = ()=>{
        console.log("Play")
        setPlay(false);
    }
    const pauseTrack = ()=>{
        console.log("Pause")
        setPlay(true);
    }
    const controlSuffle =()=>{
        if(isSuffle){
            setSuffle(false)
            console.log("suffle off")
        }else{
            setSuffle(true);
            console.log("suffle on")
        }
    }
    const controlLoop =()=>{
        if(isLoop){
            setLoop(false)
            console.log("loop off")
        }else{
            setLoop(true);
            console.log("loop on")
        }
    }
    useEffect(()=>{
        if(isPlay){
            setDiskPlay("stop-disk")
        }else{
            setDiskPlay("on-disk");
        }
    },[isPlay])

    return (
        <div className='current-song'>
            <div className="song-disk">
                <div className="disk">
                    <div className="disk-plate">
                        <img src="logo512.png" alt="" />
                    </div>
                    <div className={`disk-image `+diskPlay}>
                    </div>
                </div>
            </div>
            <div className="song-player">
                <p>{currentSong.name}</p>
                <div className="play-options">
                    <RiRepeat2Line className={isLoop?'loop-on':'loop-off'} onClick={controlLoop}/>
                    <IoPlayBack />
                    {isPlay?<IoPlay onClick={playTrack}/>:<IoPause onClick={pauseTrack}/>}
                    <IoPlayForward />
                    <TbArrowsCross className={isSuffle?'suffle-on':'suffle-off'} onClick={controlSuffle}/>
                </div>
            </div>
            <div className="song-details">
                <p>app is in developement mode</p>
            </div>
        </div>
    )
}
