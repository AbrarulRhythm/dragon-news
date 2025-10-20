import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import LoadingOne from "../components/LoadingEffect/LoadingOne";
import VerifySuccess from "../pages/VerifySuccess/VerifySuccess";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                element: <CategoryNews></CategoryNews>,
                hydrateFallbackElement: <LoadingOne></LoadingOne>,
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news-details/:id',
        loader: () => fetch('/news.json'),
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        hydrateFallbackElement: <LoadingOne></LoadingOne>,
    },
    {
        path: '/verify-success',
        element: <VerifySuccess></VerifySuccess>
    },
    {
        path: '*',
        element: <div>Error 404 - Page</div>,
    },
]);