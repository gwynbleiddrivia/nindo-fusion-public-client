import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


import AuthProvider from './authentication/AuthProvider'
import Main from './layout/Main'
import Home from './pages/Home'
import Instructors from './pages/Instructors'
import Classes from './pages/Classes'
import Dashboard from './pages/Dashboard'
import Login from './authentication/Login'
import Register from './authentication/Register'
const queryClient = new QueryClient()

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
  	<AuthProvider>
    		<QueryClientProvider client={queryClient}>
    			<div className="mx-auto w-fit max-w-6xl">
				      	<RouterProvider router={router} />
			</div>
    		</QueryClientProvider>
	</AuthProvider>
    </React.StrictMode>,
)
