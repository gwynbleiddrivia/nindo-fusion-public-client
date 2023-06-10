import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className="flex justify-between mx-auto w-fit">
			<Link to="/" className="w-1/12">
				<img src="https://i.ibb.co/KjzkX9d/Nindo-Logo.jpg" alt=""/>
			</Link>
			
			<p>Nindo Fusion Camp</p>

			<div>
				<NavLink to="/" className ></NavLink>
			</div>

		</div>
	);
};

export default Header;
