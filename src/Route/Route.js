import { createBrowserRouter } from "react-router-dom";
import Mian from "../Layout/Mian";
import Home from "../Pages/Home/Home";
import AddCategory from "../Pages/AddCategory/AddCategory";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mian></Mian>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/add-category',
                element:<AddCategory></AddCategory>
            }
        ]

    }
])