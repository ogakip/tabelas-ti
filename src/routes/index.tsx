import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardPage/>
    }
]);