import React from 'react';

import { createBrowserRouter } from "react-router";
import App from '../App';
import MainLayout from '../Layouts/MainLayout';
import home from '../Pages/home';
import Coffee from '../Pages/Coffee';
import Dashboard from '../Pages/Dashboard';
import CoffeeCards from '../components/CoffeeCards';
import CoffeeDetails from '../Pages/CoffeeDetails';
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: home,
        loader: () => fetch('/Categories.json'),
        children: [

          {
            path: '/',
            loader: () => fetch('/Coffees.json'),
            Component: CoffeeCards
          },
          {
            path: '/category/:category',
            loader: () => fetch('/Coffees.json'),
            Component: CoffeeCards
          }
        ]
      },
      {
        path: "/coffees",
        loader: () => fetch('/Coffees.json'),
        Component: Coffee
      },
      { path: "/dashboard", Component: Dashboard },
      {path:'/coffeedetails/:id',
      loader:()=>fetch(`/Coffees.json`),
      Component:CoffeeDetails
    }


    ]
  },








]);
export default router;