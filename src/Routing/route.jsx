import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Library from "./Library";
import LandingPage from "./LandingPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/Home',
        element: <Home/>
    },
    
])

export default router;