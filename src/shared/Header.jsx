import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../authentication/AuthProvider'
import useUserData from '../customHooks/useUserData'

const Header = () => {
	const [userData] = useUserData();
	const { user, logOut } = useContext(AuthContext)
	const handleLogOut = () => {
		logOut()
		.then(()=>{})
		.catch(err => console.log(err))
	}
	return (
	<div>
		<div className="flex flex-col lg:flex-row justify-between align-items mx-auto w-fit text-black bg-[rgb(98,81,48)]">
			<Link to="/" className="w-1/12">
				<img src="https://i.ibb.co/KjzkX9d/Nindo-Logo.jpg" alt=""/>
			</Link>
			
			<p className="text-2xl m-auto">Nindo Fusion Camp|</p>

			<div className="flex m-auto">
				<NavLink to="/" className={({ isActive }) =>isActive ? "btn btn-black text-xl" : "btn btn-ghost text-xl"}>Home</NavLink>
				<NavLink to="/instructors" className={({ isActive }) =>isActive ? "btn btn-black text-xl" : "btn btn-ghost text-xl"}>Instructors</NavLink>
				<NavLink to="/classes" className={({ isActive }) =>isActive ? "btn btn-black text-xl" : "btn btn-ghost text-xl"}>Classes</NavLink>
				{
					user?
					<>
					<NavLink to="/dashboard/manageusers" className={({ isActive }) =>isActive ? "btn btn-black text-xl" : "btn btn-ghost text-xl"}>Dashboard</NavLink>
					<img 
					src=
					{
					userData[0]?.userPhoto?
					userData[0]?.userPhoto:
					"https://i.ibb.co/YRkVQM4/Nindo-default-pro-pic.jpg" 
					}
					className="w-10 h-10 rounded-3xl"
					/>
					
					</>:
					<></>
				}
			</div>

		</div>
		<div className="flex justify-around mx-auto backdrop-sepia backdrop-opacity-100 text-white mt-1">
			{
			user?
			<>
				<div className="flex flex-col lg:flex-row align-items gap-10">
				<small className="my-auto bg-[rgb(98,81,48)] text-black rounded px-3 py-1">Logged in user email: {user.email}</small>
				<Link className="bg-[rgb(98,81,48)] rounded px-3 py-1 text-black hover:text-white" onClick={handleLogOut}>LogOut</Link>

				</div>  

			</>:
			<>
			<NavLink className= {({isActive}) => isActive? "bg-[rgb(98,81,48)] rounded px-3 py-1 text-white" : "bg-[rgb(98,81,48)] rounded px-3 py-1 text-black" } to ="/register">  <p>Register</p>    </NavLink> 
			<NavLink className= {({isActive}) => isActive? "bg-[rgb(98,81,48)] rounded px-3 py-1 text-white" : "bg-[rgb(98,81,48)] rounded px-3 py-1 text-black" } to ="/login">  <p>Login</p>    </NavLink> 
			</>

			}
		</div>

	</div>
	);
};

export default Header;
