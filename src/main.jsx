import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children : [
      {
        index : true,
        Component : Home,
        loader : () => fetch('http://localhost:5000/coffees')
      },
    {path : 'addCoffee', Component : AddCoffee,},
    {path : 'coffee/:id', Component : CoffeeDetails,},
    {
      path : 'updateCoffee/:id',
      Component : UpdateCoffee,
      loader : ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
    }
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
