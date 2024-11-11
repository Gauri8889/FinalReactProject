import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import{ addTask,deleteTask,completeTask,uncompleteTask,EditTaskData} from "./todoSlice";

const APP=()=>{
  const [mywork,setMyWork]=useState("");
  const [btnStatus,setBtnStatus]=useState(true);
  const [myid,setMyid]=useState("");
  const dispatch=useDispatch();
  const workData=useSelector((state)=>state.todo.task);
  console.log(workData);
  const handleSubmit=()=>{
    dispatch(addTask({id:Date.now(),work:mywork,satus:false}))
  }
  const deletework=(id)=>{
    dispatch(deleteTask(id))
  }
  const completework=(id)=>{
    dispatch(completeTask(id))
  }
  const uncompletework=(id)=>{
    dispatch(uncompleteTask(id))
  }
  const EditTaskwork=(id,wrk)=>{
    dispatch(EditTaskData(myid,mywork))
    setMyWork("");
    setBtnStatus(true);
  }
  let sno=0;
  const ans=workData.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td> {sno} </td>
        <td>
          {key.status?
          <span style={{color:'red',textDecoration:'line-through'}}>
            {key.work}
          </span>:
          <span style={{color:'black',textDecoration:'none'}}>
            {key.work}
            </span> }
        </td>

        <td>
          <button onClick={()=>{deletework(key.id)}}>Delete</button>
        </td>

        <td>
          <button onClick={()=>{completework(key.id)}}>Complete</button>
        </td>
             
        <td>
          <button onClick={()=>{uncompletework(key.id)}}>uncomplete</button>
        </td>

        <td>
          <button onClick={()=>{EditTaskwork(key.id)}}>Edit</button>
        </td>
      </tr>
      </>
    )
  })
  return(
    <>
    <h1> To Do App </h1>
    <hr size="1" color="blue"/>
    Enter your Task :<input type="text" value={mywork} onChange={(e)=>setMyWork(e.target.value)}/>
    {btnStatus?
    <button onClick={handleSubmit}>Add</button> :
    <button onClick={editDataSave}> EditSave </button> }

    <table>
      <tr>
        <th> S.No </th>
        <th> Work </th>
        <th> </th>
        <th> </th>
      </tr>
      {ans}
    </table>
    </>
  )
}
export default App;