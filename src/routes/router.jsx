import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                element: <CategoryNews></CategoryNews>
            }
        ]
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