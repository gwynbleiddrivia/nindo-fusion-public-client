import { NavLink, Link, Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserEdit } from "react-icons/fa";
import useUserData from '../customHooks/useUserData'
import { useState } from 'react'

const Dashboard = () => {
	const [userData] = useUserData()
	const userRole =  userData[0]?.role || 'student'
	console.log(userRole)
	let isAdmin = false
	let isInstructor = false
	if(userRole === 'admin'){
		isAdmin = true
	}
	else if(userRole === 'instructor'){
		isInstructor = true
	}

	return (
		<div>
			<Header></Header>
			{
				isAdmin?
				<>
			<div className="drawer lg:drawer-open">
			  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			  <div className="drawer-content flex flex-col items-center justify-center">
			    {/* Page content here */}
			    <Outlet></Outlet>
			    <label htmlFor="my-drawer-2" className="btn btn-warning drawer-button lg:hidden">Open Sidebar</label>
			  
			  </div> 
			  <div className="drawer-side">
			    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
			    <ul className="menu p-4 w-80 h-full bg-[rgb(98,81,48)]">
			      {/* Sidebar content here */}
			      <li><NavLink to="/dashboard/manageusers" className={({ isActive }) =>isActive ? "border border-black" : ""}>   <FaUserEdit/>  Manage Users</NavLink> </li>
			      <li><NavLink to="/dashboard/manageclasses" className={({ isActive }) =>isActive ? "border border-black my-5" : "my-5"}> <SiGoogleclassroom/>Manage Classes</NavLink> </li>
			    </ul>
			  
			  </div>
			</div>

				</>:
				isInstructor?
				<>
			<div className="drawer lg:drawer-open">
			  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			  <div className="drawer-content flex flex-col items-center justify-center">
			    {/* Page content here */}
			    <Outlet></Outlet>
			    <label htmlFor="my-drawer-2" className="btn btn-warning drawer-button lg:hidden">Open Sidebar</label>
			  
			  </div> 
			  <div className="drawer-side">
			    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
			    <ul className="menu p-4 w-80 h-full bg-[rgb(98,81,48)]">
			      {/* Sidebar content here */}
			      <li><NavLink to="/dashboard/addaclass" className={({ isActive }) =>isActive ? "border border-black" : ""}>   <FaUserEdit/>Add A Class</NavLink> </li>
			      <li><NavLink to="/dashboard/myclasses" className={({ isActive }) =>isActive ? "border border-black my-5" : "my-5"}> <SiGoogleclassroom/>My Classes</NavLink> </li>
			    </ul>
			  
			  </div>
			</div>


				</>:
				<>
			<div className="drawer lg:drawer-open">
			  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			  <div className="drawer-content flex flex-col items-center justify-center">
			    {/* Page content here */}
			    <Outlet></Outlet>
			    <label htmlFor="my-drawer-2" className="btn btn-warning drawer-button lg:hidden">Open Sidebar</label>
			  
			  </div> 
			  <div className="drawer-side">
			    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
			    <ul className="menu p-4 w-80 h-full bg-[rgb(98,81,48)]">
			      {/* Sidebar content here */}
			      <li><NavLink to="/dashboard/myselectedclasses" className={({ isActive }) =>isActive ? "border border-black" : ""}>   <FaUserEdit/>  My Selected Classes</NavLink> </li>
			      <li><NavLink to="/dashboard/myenrolledclasses" className={({ isActive }) =>isActive ? "border border-black my-5" : "my-5"}> <SiGoogleclassroom/>My ENrolled Classes</NavLink> </li>
			    </ul>
			  
			  </div>
			</div>



				</>
			}
					<Footer></Footer>
		</div>
	);
};

export default Dashboard;
