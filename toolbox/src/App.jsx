import { useDispatch, useSelector } from "react-redux"
import { colorChange } from "./bgcolorSlice";
const App=()=>{
  const myColor=useSelector((state)=>state.myclr.bgclr)
  const dispatch=useDispatch();
  // console.log(myColor);
return(
  <>
  <button onClick={()=>{dispatch(colorChange())}}>Click</button>
  <div style={{ width:"200px" ,height:"300px" ,backgroundColor:myColor}}></div>
  </>
)
}
export default App;