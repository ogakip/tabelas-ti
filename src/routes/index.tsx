import { createBrowserRouter } from "react-router-dom";
import { IPPrinters } from "../pages/IPPrinters/index";
import { Login } from "../pages/login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <IPPrinters/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]);