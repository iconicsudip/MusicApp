import React, { useEffect, useState } from 'react'
import { IoPause,IoPlayBack,IoPlay,IoPlayForward } from "react-icons/io5";
import { TbArrowsCross } from "react-icons/tb";
import { RiRepeat2Line } from "react-icons/ri";
import * as mm from 'music-metadata';



export default function CurrentSong({setAudio,audio,transColor,allColor,currentSong,trackSongs,setTrackSongs,setCurrentSong}:any) {
    const [runAudio,setrunAudio] = useState(false);
    const [isPlay,setPlay] = useState<Boolean>(true);
    const [currentTime,setCurrentTime] = useState(audio.currentTime);
    const [progressTime,setProgressTime] = useState(0);
    const [diskPlay,setDiskPlay] = useState<String>("on-disk");
    const [isSuffle,setSuffle] = useState<Boolean>(false);
    const [isLoop,setLoop] = useState<Boolean>(false);
    const [seconds,setSeconds] = useState<any | String>(0);
    const [minutes,setMinutes] = useState(0)
    useEffect(()=>{
        if(audio.paused){
            setDiskPlay("stop-disk");
            setPlay(true);
        }
        if(!audio.paused){
            setDiskPlay("on-disk");
            setPlay(false);
            // audio.play()
        }
    },[diskPlay,isPlay])
    
    useEffect(()=>{
        audio.pause();
        audio.currentTime = 0;
        setAudio(new Audio(currentSong.src));
        
    },[currentSong])

    // useEffect(()=>{
    //     console.log(runAudio)
    //     audio.pause();
    //     audio.currentTime = 0;
    //     if(audio && runAudio){
    //         audio.play();
    //     }
    // },[runAudio,audio])
    const playTrack = ()=>{
        setPlay(false);
        setDiskPlay("on-disk");
        audio.play();
    }
    const pauseTrack = ()=>{
        setPlay(true);
        setDiskPlay("stop-disk");
        audio.pause();
    }
    const controlSuffle =()=>{
        if(isSuffle){
            setSuffle(false)
        }else{
            setSuffle(true);
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
    const prevTrack = ()=>{
        audio.pause();
        audio.currentTime = 0;
        if(isSuffle){
            let filterTrack = trackSongs.filter((song:any)=>{
                return song.id!==currentSong.id;
            })
            let rand = Math.random() * filterTrack.length;
            let index = Math.floor(rand)
            let newSong = trackSongs[index];
            let tempSongs = [currentSong,...trackSongs];
            let newTrack = tempSongs.filter((song)=>{
                return song.id!==newSong.id;
            })
            setTrackSongs(newTrack)
            setCurrentSong(newSong)
        }else{
            let tempSongs = [currentSong,...trackSongs];
            let newSong = tempSongs[tempSongs.length-1];
            let newTrack = tempSongs.filter((song)=>{
                return song.id!==newSong.id;
            })
            setTrackSongs(newTrack)
            setCurrentSong(newSong)
        }
    }
    const nextTrack = ()=>{
        if(isSuffle){
            let filterTrack = trackSongs.filter((song:any)=>{
                return song.id!==currentSong.id;
            })
            let rand = Math.random() * filterTrack.length;
            let index = Math.floor(rand)
            let newSong = trackSongs[index];
            let tempSongs = [...trackSongs,currentSong];
            let newTrack = tempSongs.filter((song)=>{
                return song.id!==newSong.id;
            })
            setTrackSongs(newTrack)
            setCurrentSong(newSong)
        }else{
            let tempSongs = [...trackSongs,currentSong];
            let newSong = tempSongs[0];
            let newTrack = tempSongs.filter((song)=>{
                return song.id!==newSong.id;
            })
            setTrackSongs(newTrack)
            setCurrentSong(newSong)
        }
        playTrack()
    }
    const audioPosition = (e:any)=>{
        const audioPos = (e.nativeEvent.offsetX/e.target.clientWidth)*audio.duration;
        audio.currentTime = audioPos;
    }
    audio.addEventListener('timeupdate',()=>{
        if(audio.currentTime===audio.duration){
            if(isLoop){
                console.log('loop on')
                audio.currentTime = 0;
                playTrack()
            }else{
                nextTrack()
                playTrack()
            }
        }
        setCurrentTime(audio.currentTime);
        setProgressTime((audio.currentTime/audio.duration)*100)
        if(Math.floor(audio.currentTime%60)<=9){
            setSeconds("0"+Math.floor(audio.currentTime%60).toString());
        }else{
            setSeconds(Math.floor(audio.currentTime%60));
        }
        setMinutes(Math.floor(audio.currentTime/60));
    })

    return (
        <div className='current-song'>
            <div className="song-player">
                <div className="song-details" style={{"background":transColor}}>
                    <div className={`disk-image `+diskPlay}></div>
                </div>
                <h1>{currentSong.name}</h1>
                <h3>{currentSong.artist}</h3>
                <audio id={"song"+currentSong.id} src={currentSong.src}></audio>
                <div id="time-stramp">
                    <span id="start-time">{minutes}:{seconds}</span>
                    <span id="end-time">{currentTime?
                        <>
                            {Math.floor(audio.duration/60)}:{Math.floor(audio.duration%60)<=9?"0"+Math.floor(audio.duration%60):Math.floor(audio.duration%60)}
                        </>
                        :'0:00'}</span>
                </div>
                <div id="progress-bar" onClick={audioPosition}>
                    <div id="progress" style={{"background":allColor,"width":progressTime+"%"}}></div>
                </div>
                <div className="play-options">
                    <RiRepeat2Line className={isLoop?'loop-on':'loop-off'} onClick={controlLoop}/>
                    <IoPlayBack onClick={prevTrack}/>
                    {isPlay?<IoPlay onClick={playTrack}/>:<IoPause onClick={pauseTrack}/>}
                    <IoPlayForward onClick={nextTrack}/>
                    <TbArrowsCross className={isSuffle?'suffle-on':'suffle-off'} onClick={controlSuffle}/>
                </div>
            </div>
            
        </div>
    )
}
