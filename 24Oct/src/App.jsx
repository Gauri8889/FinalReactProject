import AuthApp from "./AuthApp.jsx";
import UnAuthApp from "./UnAuthApp.jsx";
import { useContext } from "react";
import { myloginContext } from "./LoginContext.jsx";
const App=()=>{
  const {user}= useContext(myloginContext);

  return(
    <>
      <h1> Welcome To Login Syatem!</h1>
      {user.auth?<UnAuthApp/>:<AuthApp/>}

    </>
  )

}
export default App;