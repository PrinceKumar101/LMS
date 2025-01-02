import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/pages/MainLayout"
import Home from "../src/pages/Home";
import Dashboard from "./pages/courses_pages/Dashboard";
import Assignment from "./pages/courses_pages/Assignment";
import Discussion from "./pages/courses_pages/Discussion";
import Login from "./pages/authincate_page/Login";
import Signup from "./pages/authincate_page/Signup";
import Schedule from "./pages/courses_pages/Schedule";
import Recording from "./pages/courses_pages/Recording";
import Resources from "./pages/courses_pages/Resources";
import Notes from "./pages/courses_pages/Notes";
import Download from "./pages/courses_pages/Download";
import Classes from "./pages/courses_pages/Classes";
import Courses from "./pages/courses_pages/Courses";
import Setting from "./pages/Setting";
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
                path:"/schedule",
                element:<Schedule/>,
            },
            {
                path:"/recording",
                element:<Recording/>,
            },
            {
                path:"/discussion",
                element:<Discussion/>,
            },
            {
                path:"/resources",
                element:<Resources/>,
            },
            {
                path:"/notes",
                element:<Notes/>,
            },{
                path:"/download",
                element:<Download/>,
            },{
                path:"/classes",
                element:<Classes/>,
            },{
                path:"/courses",
                element:<Courses/>,
            },{
                path:"/settings",
                element:<Setting/>,
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