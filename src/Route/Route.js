import { createBrowserRouter } from "react-router-dom";
import Mian from "../Layout/Mian";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mian></Mian>

    }
])