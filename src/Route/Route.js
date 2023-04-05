import { createBrowserRouter } from "react-router-dom";
import Mian from "../Layout/Mian";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mian></Mian>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            }
        ]

    }
])