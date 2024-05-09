
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Library from "./Library";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/Library',
        element: <Library/>
    }
])

export default router