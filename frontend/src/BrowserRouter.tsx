import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/pages/MainLayout"
import Home from "../src/pages/Home";
import Dashboard from "./pages/Dashboard";
import Assignment from "./pages/Assignment";
import Discussion from "./pages/Discussion";
import Login from "./pages/Login";
import Signup from "./pages/signup";
export const BrowserRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/dashboard",
                element:<Dashboard/>,
            },
            {
                path:"/assignment",
                element:<Assignment/>,
            },
            {
                path:"/discussion",
                element:<Discussion/>,
            },
            {
                path:"/login",
                element:<Login/>,
            },
            {
                path:"/signup",
                element:<Signup/>,
            },
        ]
    }
])