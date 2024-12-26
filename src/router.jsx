import { createBrowserRouter } from "react-router-dom";
import MainLaout from "./Components/laout/mainLaout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";

const router=createBrowserRouter([
    {
     path:"/",element:<MainLaout/>,
     children:[
     {
        path:"/",element:<Home/>
     },
     {
        path:"/about",element:<About/>
     }, 
     {
        path:"/contact",element:<Contact/>
     },
     {
        path:"/services",element:<Service/>
     }
     ]
    }
])
export default router