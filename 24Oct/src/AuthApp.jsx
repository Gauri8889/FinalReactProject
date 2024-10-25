import { useState } from "react";
import { useContext } from "react";
import { myloginContext } from "./LoginContext.jsx";
const AuthApp=()=>{
    const [username, setUsername]=useState("");
    const {login} = useContext(myloginContext);
    return(
        <>
          Enter name : 
          <input type="text" value={username} 
          onChange={(e)=>{setUsername(e.target.value)}} />
          <button onClick={()=>{login(username)}}> Login </button>
        </>
    )
}
export default AuthApp;