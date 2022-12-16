import React, { useEffect, useState } from 'react'
import {HiTrendingUp} from 'react-icons/hi'
import {FcMusic} from 'react-icons/fc'
import {MdFavorite} from 'react-icons/md'
import {IoLibrary} from 'react-icons/io5'
import {GoSettings} from 'react-icons/go'
import {Link,useLocation} from 'react-router-dom';


export default function Header({allColor,setBodyslide,setTrack}:any) {
    let location = useLocation();
    let [activeTrendings,setTrendings] = useState<Boolean>(false);
    let [activePlayer,setPlayer] = useState<Boolean>(false);
    let [activeFavorites,setFavorites] = useState<Boolean>(false);
    let [activeLibrary,setLibrary] = useState<Boolean>(false);
    let [activeSettings,setSettings] = useState<Boolean>(false);
    useEffect(()=>{
        if(location.pathname==='/'){
            setPlayer(true);
            setTrendings(false);
            setFavorites(false);
            setLibrary(false);
            setSettings(false);
        }
        if(location.pathname==='/trendings'){
            setTrendings(true);
            setPlayer(false);
            setFavorites(false);
            setLibrary(false);
            setSettings(false);
        }
        if(location.pathname==='/favorites'){
            setFavorites(true);
            setTrendings(false);
            setPlayer(false);
            setLibrary(false);
            setSettings(false);
        }
        if(location.pathname==='/library'){
            setLibrary(true);
            setTrendings(false);
            setPlayer(false);
            setFavorites(false);
            setSettings(false);
        }
        if(location.pathname==='/settings'){
            setSettings(true);
            setTrendings(false);
            setPlayer(false);
            setFavorites(false);
            setLibrary(false);
        }
        setBodyslide(true);
        setTimeout(() => {
            setBodyslide(false)
            setTrack(true);
        }, 1000);
    },[location.pathname,setBodyslide,setTrack])
    return (
        <div className='header' style={{"background":allColor}}>
            <Link to='/trendings' className={activeTrendings===true?"trendings active":"trendings"}>
                <HiTrendingUp/>
                <p>Trendings</p>
            </Link>
            <Link to='/favorites' className={activeFavorites===true?"favorites active":"favorites"}>
                <MdFavorite />
                <p>Favorites</p>
            </Link>
            <Link to='/' className={activePlayer===true?"player active":"player"}>
                <FcMusic />
                <p>Player</p>
            </Link>
            <Link to='/library' className={activeLibrary===true?"library active":"library"}>
                <IoLibrary />
                <p>Library</p>
            </Link>
            <Link to='/settings' className={activeSettings===true?"settings active":"settings"}>
                <GoSettings />
                <p>Settings</p>
            </Link>
        </div>
    )
}
