import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Favorites from '../Favorites/Favorites'
import Home from '../Home/Home'
import Library from '../Library/Library'
import Settings from '../Settings/Settings'
import Trendings from '../Trendings/Trendings'

export default function Body({transColor,setTransColor,allColor,setAllColor,activeBodyslide,displayTrack}:any) {
    return (
        <div className={activeBodyslide===false?"body":"body bodyanimate"}>
            <Routes>
                <Route path="/" element={<Home transColor={transColor} allColor={allColor} displayTrack={displayTrack}/>}/>
                <Route path="/trendings" element={<Trendings/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/settings" element={<Settings transColor={transColor} setTransColor={setTransColor} allColor={allColor} setAllColor={setAllColor}/>}/>
            </Routes>
        </div>
    )
}
