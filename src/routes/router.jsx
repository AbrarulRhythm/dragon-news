import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
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