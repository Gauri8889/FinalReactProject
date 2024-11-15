import { BrowserRouter, Routes , Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./about";
import Blog from "./blog";
import Math from "./math";


const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index  element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="blog" element={<Blog/>}/>
    <Route path="math" element={<Math/>}/>
    
 
</Route>
   </Routes>
   </BrowserRouter>

    </>
  )

}
export default App;