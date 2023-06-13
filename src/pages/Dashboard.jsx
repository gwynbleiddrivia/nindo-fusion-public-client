import { Link, Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const Dashboard = () => {
	return (
		<div>
			<Header></Header>
			<div className="drawer lg:drawer-open">
			  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			  <div className="drawer-content flex flex-col items-center justify-center">
			    {/* Page content here */}
			    <Outlet></Outlet>
			    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Sidebar</label>
			  
			  </div> 
			  <div className="drawer-side">
			    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
			    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
			      {/* Sidebar content here */}
			      <li>      <Link to="/dashboard/manageclasses">  Manage Classes</Link>        </li>
			      <li>      <Link to="/dashboard/manageusers">  Manage Users</Link>        </li>
			    </ul>
			  
			  </div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Dashboard;
