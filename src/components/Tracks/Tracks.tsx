import React,{useState,useEffect} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx';
import {Reorder, useDragControls } from "framer-motion";
import {MdOutlineDragHandle} from 'react-icons/md';

export default function Tracks({transColor,nowPlaying,trackSongs,setTrackSongs,displayTrack}:any) {
    const [openTrack,setOpenTrack] = useState<Boolean>(false);
    const [items, setItems] = useState(trackSongs);
    const dragControls = useDragControls()
    const openTracks = (e:any)=>{
        e.stopPropagation()
        if(openTrack===false){
            setOpenTrack(true);
        }else{
            setOpenTrack(false);
        }
    }
    const printList = ()=>{
        setTrackSongs(items)
    }
    useEffect(()=>{
        setItems(trackSongs)
    },[trackSongs])
    return (
        <>
        <div className='trackbutton' style={{"background":transColor}} onClick={openTracks}>
            <p>Your Tracks</p>
            <div className="hamburger">
                {openTrack===false?<GiHamburgerMenu />:<RxCross1 />}
            </div>
        </div>
        <div id={displayTrack?"display-track":"hide-track"} className="tracks" >
            <div className={openTrack?"trackpad":"trackpad trackanimate"} style={{"background":transColor}}>
                <h2>Your Tracks</h2>
                <div className="your-tracks">
                    <h3>Now Playing</h3>
                    <ul>
                        <li>{nowPlaying.name}</li>
                    </ul>
                    <h3>Next Tracks</h3>
                    <Reorder.Group axis="y" values={items} onReorder={setItems} >
                        {items.map((item:any) => (
                            <Reorder.Item key={item.id} value={item} dragControls={dragControls} onPointerUp={printList}>
                                <p>{item.name}</p>
                                <MdOutlineDragHandle onPointerDown={(event) => {dragControls.start(event);console.log(event)}} />
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </div>
            </div>
        </div>
        </>
    )
}
