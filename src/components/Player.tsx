import React,{useState} from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Body from './Body/Body'
import Header from './Header/Header'

export default function Player() {
    let [activeBodyslide,setBodyslide] = useState<Boolean>(true);
    let [displayTrack,setTrack] = useState<Boolean>(false);
    let [transColor,setTransColor] = useState("#ffc835c2");
    let [allColor,setAllColor] = useState("#ffc835")
    return (
        <div style={{"background":allColor}} className="song">
            <Router>
                <Header allColor={allColor} setTrack={setTrack} setBodyslide={setBodyslide}/>
                <Body allColor={allColor} transColor={transColor} setTransColor={setTransColor} setAllColor={setAllColor} displayTrack={displayTrack} activeBodyslide={activeBodyslide}/>
            </Router>
        </div>
    )
}
