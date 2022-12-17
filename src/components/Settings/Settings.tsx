import React from 'react'
import { BsPaletteFill,BsCircleFill } from "react-icons/bs";

export default function Settings({transColor,setTransColor,allColor,setAllColor}:any) {
    const getsetColor = (e:any)=>{
        e.preventDefault()
        e.stopPropagation()
        let rgblist = (e.currentTarget.style.color.split(","));
        let r = parseInt(rgblist[0].split("(")[1]);
        let g = parseInt(rgblist[1]);
        let b = parseInt(rgblist[2].split(")")[0]);
        let hexcolor = ("#"+r.toString(16)+g.toString(16)+b.toString(16)+"70");
        setAllColor(e.currentTarget.style.color)
        setTransColor(hexcolor)
    }
    return (
        <div className='app-settings' style={{"background":transColor}}>
            <h2>App Settings</h2>
            <div className="user-settings">
                <div className="color-palette">
                    <BsPaletteFill />
                    <div className="colors">
                        <BsCircleFill id='color1' style={{"color":"#dd35ff"}} onClick={getsetColor}/>
                        <BsCircleFill id='color2' style={{"color":"#35aaff"}} onClick={getsetColor}/>
                        <BsCircleFill id='color3' style={{"color":"#35ffbf"}} onClick={getsetColor}/>
                        <BsCircleFill id='color4' style={{"color":"#35ff67"}} onClick={getsetColor}/>
                        <BsCircleFill id='color4' style={{"color":"#ffc835"}} onClick={getsetColor}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
