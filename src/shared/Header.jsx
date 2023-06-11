import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
	<div>
		<div className="flex flex-col lg:flex-row justify-between align-items mx-auto w-fit text-black bg-[rgb(98,81,48)]">
			<Link to="/" className="w-1/12">
				<img src="https://i.ibb.co/KjzkX9d/Nindo-Logo.jpg" alt=""/>
			</Link>
			
			<p className="text-5xl m-auto">Nindo Fusion Camp|</p>

			<div className="flex m-auto">
				<NavLink to="/" className={({ isActive }) =>isActive ? "btn btn-black lowercase text-xl" : "btn btn-ghost lowercase text-xl"}>Home</NavLink>
				<NavLink to="/instructors" className={({ isActive }) =>isActive ? "btn btn-black lowercase text-xl" : "btn btn-ghost lowercase text-xl"}>Instructors</NavLink>
				<NavLink to="/classes" className={({ isActive }) =>isActive ? "btn btn-black lowercase text-xl" : "btn btn-ghost lowercase text-xl"}>Classes</NavLink>
				<NavLink to="/dashboard" className={({ isActive }) =>isActive ? "btn btn-black lowercase text-xl" : "btn btn-ghost lowercase text-xl"}>Dashboard</NavLink>
			</div>

		</div>
		<div className="flex justify-around mx-auto backdrop-sepia backdrop-opacity-100 text-white mt-1">
			<NavLink className= {({isActive}) => isActive? "bg-[rgb(10,12,15)] rounded px-3 py-1 text-white" : "bg-[rgb(98,81,48)] rounded px-3 py-1 text-black" } to ="/login">  <p>Login</p>    </NavLink> 
			<NavLink className= {({isActive}) => isActive? "bg-[rgb(10,12,15)] rounded px-3 py-1 text-white" : "bg-[rgb(98,81,48)] rounded px-3 py-1 text-black" } to ="/register">  <p>Register</p>    </NavLink> 
		</div>

	</div>
	);
};

export default Header;
