import React from 'react';
import { createBrowserRouter } from "react-router";
import Roots from '../Components/Roots/Roots';
import Home from '../Pages/Home/Home';
import NotFound from '../Components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <NotFound></NotFound>,
    children: [
        {index: true, Component: Home},

    ]
  },
]);

export {router};