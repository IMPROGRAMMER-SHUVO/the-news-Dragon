import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Mainhome from "../Pages/Home/MainHome/Mainhome";
import About from "../About/About";

import Catagory from "../Pages/Home/Catagory/Catagory";
import News_layout from "../layout/News_layout";
import News from "../Pages/News/News/News";
import Loginlayout from "../layout/Loginlayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/TermsCondtions/Terms";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Loginlayout></Loginlayout>,
        children:[
            {
path:'/',
element:<Navigate to='/catagory/0'></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>
        
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]
                    },
    {
        path: 'catagory',
        element: <Main></Main>,
        children: [ 
             {
                path: ':id',
                element: <Catagory></Catagory>,
                loader:({params})=>fetch(`https://myappfordragonserver-bxz1rmgy9-improgrammer-shuvos-projects.vercel.app/Cetagorys/${params.id}`)
            },
            {
                path: 'About',
                element: <About></About>
            }

        ]
    },
    {
        path:'news',
        element:<News_layout></News_layout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`https://myappfordragonserver-bxz1rmgy9-improgrammer-shuvos-projects.vercel.app/news/${params.id}`)
                
            }
        ]
    }
])

export default router