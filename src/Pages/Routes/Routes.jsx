import React from 'react';
import App from '../../App'
import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../../Body/Home'
import Apps from '../Apps/Apps'
import Installation from '../Installation/Installation';
import ErrorsPage from '../ErrorHandle/ErrorHandle'
import AppDetails from '../AppDetails/AppDetails';
import ErrorsApp from '../ErrorsApp/ErrorsApp';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
     children: [
      {  index: true,
        path: "",
        loader : ()=>fetch('/HomeBodyDataApp.json'),
        Component: Home,},
       {
        path:"app",
        loader: ()=>fetch('/AllAppData.json'),
        Component:Apps,
       },
       {
        path:"Installation",
        loader: ()=>fetch('/AllAppData.json'),
        Component:Installation,
       },{
        path:'AppDetails/:id',
        loader: ()=>fetch('/AllAppData.json'),
        Component:AppDetails,
        errorElement: <ErrorsApp />
       },
       {
        path:'*',
        Component:ErrorsPage,
       },
  
    ]
  },
]);

