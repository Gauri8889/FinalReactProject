import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { colorChange } from "./bgcolorSlice";

const App=()=>{
    const [color,setColor]=useState("");
    const bgclr=useSelector((state)=>state.mycolor.bgcolor);
    const dispatch=useDispatch();
    return(
        <>
        <h1> Bg change program </h1>
        Enter Color : <input type="text" value={color}
        onChange={(e)=>{setColor(e.target.value)}}/>
        <button onClick={()=>dispatch(colorChange(color))}> Click </button>
        <br/> <br/>
        <div style={{width:"300px", height:"200px", border:"1px solid black",backgroundColor:bgclr}}>

        </div>
        </>
    )
}
export default App;