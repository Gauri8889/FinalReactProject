import {Link, Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <>
       <Link to = "home">Home</Link>  || 
    <Link to = "about">About</Link>   ||
    <Link to = "blog">Blog</Link>    ||
    <Link to = "math">Math</Link>    ||
    

    <hr/>
     <Outlet/>
     <hr/>
        </>
    )
}
export default Layout;
