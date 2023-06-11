import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main'
import Home from './pages/Home'
import Instructors from './pages/Instructors'
import Classes from './pages/Classes'
import Dashboard from './pages/Dashboard'
import Login from './authentication/Login'
import Register from './authentication/Register'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
	{
		path: "/",
		element: <Home></Home>
	},
	{
		path: "/instructors",
		element: <Instructors></Instructors>
	},
	{
		path: "/classes",
		element: <Classes></Classes>
	},
	{
		path: "/dashboard",
		element: <Dashboard></Dashboard>
	},
	{
		path: "/login",
		element: <Login></Login>
	},
	{
		path: "/register",
		element: <Register></Register>
	},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<div className="mx-auto w-fit max-w-6xl">
	      	<RouterProvider router={router} />
	</div>
  </React.StrictMode>,
)
