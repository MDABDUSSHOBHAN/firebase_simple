import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home/Home.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Main from './Component/Main.jsx';
import Logine from './Component/login/Logine.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/home",
        element:<Home></Home>,
        // loader: () => fetch('http://localhost:5000/phone')
      },
      {
        path:"/login",
        element:<Logine></Logine>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
