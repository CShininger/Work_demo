import About  from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import { Children } from "react";
import React from 'react';
// import { Navigate } from "react-router-dom";


 const routes=[
    {
        path:'/about',
        element:<About/>

    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'message',
        element:<Message/>,
     },
     {
        path:'news',
        element:<News/>,
    },
    {
        path:'/',
        
    }
]
export default routes;