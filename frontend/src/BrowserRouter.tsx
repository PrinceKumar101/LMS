import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/pages/MainLayout"
import Home from "../src/pages/Home";
export const BrowserRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            }
        ]
    }
])