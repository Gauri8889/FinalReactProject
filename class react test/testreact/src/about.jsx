

import axios from "axios";
import { useState, useEffect } from "react";

const About=()=>{
    const[data,setData]=useState([])

    const LoadData=()=>{
    let api="http://localhost:3000/students";
    axios.get(api).then((res)=>{
       setData(res.data)
    })
    }

    useEffect(()=>{
        LoadData()
    },[])

    const ans=data.map((key)=>{
return(
    <>
    <tr>
        <td>{key.rollno} </td>
        <td>{key.name} </td>
        <td>{key.city} </td>
        <td>{key.mobileno} </td>
        
    </tr>
    </>
)
    })
  
    return(
        <>
     <center>
       <h1>Contact page</h1> 
       <table border={2}>
        <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>City</th>
            <th>Mobile No.</th>
        </tr>
        {ans}
       </table>

        </center>   
        </>
    )
}
export default About;

