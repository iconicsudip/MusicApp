import React,{useState,useEffect} from 'react'
import CurrentSong from '../CurrentSong/CurrentSong'
import Tracks from '../Tracks/Tracks'


export default function Home({audio,setAudio,transColor,allColor,displayTrack}:any) {
    const initialItems = [
        {
            id:0,
            name:"Apna Bana Le",
            artist: "Arijit Singh",
            src:"static/Apna-Bana-Le.mp3"
        }, 
        {
            id:1,
            name:"Deva Deva",
            artist: "Arijit Singh",
            src:"static/Deva_Deva.mp3"
        },
        {
            id:2, 
            name:"Kesariye Tera",
            artist: "Arijit Singh",
            src:"static/Kesariya_Tera.mp3"
        },
        {
            id:3,
            name:"Makhmali",
            artist: "Arijit Singh",
            src:"static/Makhmali.mp3"
        }
    ];
    const [currentSong,setCurrentSong] = useState(initialItems[1]);
    const [trackSongs,setTrackSongs] = useState(initialItems);
    useEffect(()=>{
        const updateSongs = initialItems.filter((item)=>{
            return item.id!==currentSong.id;
        })
        setTrackSongs(updateSongs);
    },[]);
    // console.log(trackSongs)
    return (
        <>
            <CurrentSong transColor={transColor} audio={audio} setAudio={setAudio} trackSongs={trackSongs} setTrackSongs={setTrackSongs} allColor={allColor} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
            <Tracks transColor={transColor} nowPlaying={currentSong} trackSongs={trackSongs} setTrackSongs={setTrackSongs} displayTrack={displayTrack}/>
        </>
    )
}
