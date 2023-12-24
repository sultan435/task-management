import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/DashboardLayout/Dashboard";
import Task from "../layout/DashboardLayout/Task";
import UpdateTask from "../layout/DashboardLayout/UpdateTask";
import MyProfile from "../layout/DashboardLayout/MyProfile";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:'task',
                element:<Task/>
            },
            {
                path:'profile',
                element:<MyProfile/>
            },
            {
                path:'updateTask/:id',
                element:<UpdateTask/>,
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default routes;