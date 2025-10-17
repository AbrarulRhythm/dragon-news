import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "auth",
        element: <div>Auth Page</div>,
    },
    {
        path: "news",
        element: <div>Nerws Page</div>,
    },
    {
        path: "*",
        element: <div>Error 404 - Page</div>,
    },
]);