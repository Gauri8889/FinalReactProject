import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog=()=>{
    const [input , setInput]=useState({})
const navigate=useNavigate();
    const HandlInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
    setInput(values=>({...values , [name]:value}))
    console.log(input)
    }

    const HandlSubmit=()=>{
        let api="http://localhost:3000/students";
        axios.post(api, input).then((res)=>{
            console.log(res)
            alert("Save Data Successful")
        })
        navigate("/about")
    }
 return(
        <>
        <center>
    <h1>Faculty page</h1>
    Enter Rollno: <input type="text" name="rollno"  onChange={HandlInput}/>
    Enter Name:   <input type="text" name="name" onChange={HandlInput}/><br/><br/>
    Enter City:   <input type="text" name="city" onChange={HandlInput}/>
    Enter Mobile No. :<input type="text" name="mobileno" onChange={HandlInput}/><br/><br/>
    <button onClick={HandlSubmit}>DataSave</button>
    </center>    
        </>
    )
}
export default Blog;