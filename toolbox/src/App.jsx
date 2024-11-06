import { useDispatch, useSelector } from "react-redux"
import { colorChange } from "./bgcolorSlice";



const App=()=>{
  const myclr=useSelector((state)=>state.mycolor.bgclr);
  const dispatch=useDispatch();
  console.log(myclr);
  return(
    <>
    <h1> This is my Counter Program</h1>
    <button onClick={()=>{dispatch(colorChange())}}>click here</button>
    <div style={{width:"300px", height:"200px", backgroundColor:myclr}}>

    </div>
    </>
  )
}
export default App;