import React,{useState,useEffect} from 'react'
import CurrentSong from '../CurrentSong/CurrentSong'
import Tracks from '../Tracks/Tracks'

export default function Home({transColor,displayTrack}:any) {
    const initialItems = [
        {
            id:0,
            name:"🍅 Tomato"
        }, 
        {
            id:1,
            name:"🥒 Cucumber"
        },
        {
            id:2, 
            name:"🧀 Cheese"
        },
        {
            id:3,
            name: "🥬 Lettuce"
        }
    ];
    const [currentSong,setCurrentSong] = useState(initialItems[0]);
    const [trackSongs,setTrackSongs] = useState(initialItems);
    useEffect(()=>{
        const updateSongs = initialItems.filter((item)=>{
            return item.id!==currentSong.id;
        })
        setTrackSongs(updateSongs);
    },[currentSong]);
    console.log(trackSongs)
    return (
        <>
            <CurrentSong currentSong={currentSong} setCurrentSong={setCurrentSong}/>
            <Tracks transColor={transColor} nowPlaying={currentSong} trackSongs={trackSongs} setTrackSongs={setTrackSongs} displayTrack={displayTrack}/>
        </>
    )
}
