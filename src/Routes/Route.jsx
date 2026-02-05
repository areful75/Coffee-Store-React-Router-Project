import React from 'react';

import { createBrowserRouter } from "react-router";
import App from '../App';
import MainLayout from '../Layouts/MainLayout';
import home from '../Pages/home';
import Coffee from '../Pages/Coffee';
import Dashboard from '../Pages/Dashboard';
const router = createBrowserRouter([
    {
      path: "/",
     Component:MainLayout,
     children: [
        { index: true, Component: home },
        { path: "/coffee", Component: Coffee },
        { path: "/dashboard", Component: Dashboard }

     ]
    },







   
  ]);
export default router;