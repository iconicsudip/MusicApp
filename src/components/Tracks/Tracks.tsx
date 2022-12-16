import React,{useState,useEffect} from 'react'
import {BsArrowBarUp,BsArrowBarDown} from 'react-icons/bs';
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
        console.log(items);
        setTrackSongs(items)
    }
    useEffect(()=>{
        setItems(trackSongs)
    },[trackSongs])
    return (
        <>
        <div id={displayTrack?"display-track":"hide-track"} className={openTrack===false?"tracks":"tracks trackanimate"} >
            <div className='trackbutton' onClick={openTracks}>
                {openTrack===false?<BsArrowBarUp />:<BsArrowBarDown />}
            </div>
            <div className="trackpad" style={{"background":transColor}}>
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
