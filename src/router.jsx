import { createBrowserRouter } from "react-router-dom";
import MainLaout from "./Components/laout/mainLaout";

const router=createBrowserRouter([
    {
     path:"/",element:<MainLaout/>
    }
])
export default router