import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/log-in',
                element: <LogIn />
            },
            {
                path:'/sign-up',
                element: <SignUp />
            }
        ]
    }
])