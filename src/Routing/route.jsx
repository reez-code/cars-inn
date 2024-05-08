
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Library from "./Library";
import AddCar from "./AddCar";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/AddCar',
        element: <AddCar/>
    },
    {
        path: '/Library',
        element: <Library/>
    }
])

export default router