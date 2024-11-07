import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {colorChange} from "./bgcolorSlice";

const App=()=>{
    const [color,setColor]=useState("");
    const bgclr=useSelector((state)=>state.mycolor.bgcolor);
    const dispatch=useDispatch;
    return(
        <>
        <h1> Bg change program </h1>
        Enter Color : <input type="text" value={color}
        onChange={(e)=>{setColor(e.target.value)}}/>
        <button onClick={()=>{dispatch(colorChange)}}>Click here</button>
        </>
    )
        
}
export default App;