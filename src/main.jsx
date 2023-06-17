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
import Login from './authentication/Login'
import Register from './authentication/Register'
import Dashboard from './pages/Dashboard'
import ManageClasses from './pages/dashboardPages/ManageClasses'
import ManageUsers from './pages/dashboardPages/ManageUsers'
import AddAClass from './pages/dashboardPages/AddAClass'
import MyClasses from './pages/dashboardPages/MyClasses'
import MySelectedClasses from './pages/dashboardPages/MySelectedClasses'
import MyEnrolledCLasses from './pages/dashboardPages/MyEnrolledCLasses'
import Feedback from './pages/dashboardPages/Feedback'
import PrivateRoute from './PrivateRoute'
import ErrorPage from './ErrorPage'

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
		path: "/login",
		element: <Login></Login>
	},
	{
		path: "/register",
		element: <Register></Register>
	},
    ]
  },
  {
	path: "/dashboard",
	element: <PrivateRoute>   <Dashboard></Dashboard> </PrivateRoute> ,
	children: [
		{
			path: 'manageclasses',
			element: <ManageClasses></ManageClasses>
		},
		{
			path: 'manageusers',
			element: <ManageUsers></ManageUsers>
		},
		{
			path: 'addaclass',
			element: <AddAClass></AddAClass>
		},
		{
			path: 'myclasses',
			element: <MyClasses></MyClasses>
		},
		{
			path: 'myselectedclasses',
			element: <MySelectedClasses></MySelectedClasses>
		},
		{
			path: 'myenrolledclasses',
			element: <MyEnrolledCLasses></MyEnrolledCLasses>
		},
		{
			path: 'feedback/:id',
			element: <Feedback></Feedback>
		},
	]
  },
  {
	path: "*",
	element: <ErrorPage></ErrorPage>
  }
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
