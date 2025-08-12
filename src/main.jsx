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
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './components/Users.jsx';

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
    },
    {
      path : 'signin',
      Component : Signin,
    },
    {
      path : 'signup',
      Component :  Signup,
    },
    {
      path : 'users',
      Component : Users,
      loader : () => fetch('http://localhost:5000/users')
    }
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
  </StrictMode>,
)
