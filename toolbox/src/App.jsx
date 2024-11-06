import { useDispatch, useSelector } from "react-redux"



const App=()=>{
  const myclr=useSelector((state)=>state.mycolor.bgclr);
  const dispatch=useDispatch()
}