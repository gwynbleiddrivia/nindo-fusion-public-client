import { NavLink, Link, Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserEdit } from "react-icons/fa";

const Dashboard = () => {
	return (
		<div>
			<Header></Header>
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
			<Footer></Footer>
		</div>
	);
};

export default Dashboard;
