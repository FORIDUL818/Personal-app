import { RouterProvider } from "react-router-dom";
import router from "../src/router"

const App = () => {
   
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;