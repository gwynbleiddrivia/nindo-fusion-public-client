import useAllUsers from '../../customHooks/useAllUsers'
import { FaUserTie } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";

const ManageUsers = () => {
	const [allUsersData] = useAllUsers()
	console.log(allUsersData)
	return (
		<div className="backdrop-blur w-full h-full p-10 text-white">

			<h1 className="mb-5">Total Registered Users: {allUsersData.length}</h1>

			<div className="overflow-x-auto">
				  <table className="table">
				    {/* head */}
				    <thead>
				      <tr className="text-white">
				      	<th></th>
					<th>Name</th>
					<th>Email</th>
					<th>Role</th>
					<th className="text-center">Make Admin</th>
					<th className="text-center">Make Instructor</th>
				      </tr>
				    </thead>
				    <tbody>
				      {/* row 1 */}

					{
						allUsersData.map((singleUser,ix) =>
							 <tr key={singleUser._id} className="">
							 	<th>{ix+1}</th>
								<td>{singleUser.userName}</td>
								<td>{singleUser.email}</td>
								<td>{singleUser.role}</td>
								<td className="text-center" title="Click to make this user Admin"> <button className="btn btn-ghost">  <FaUserShield/></button>  </td>
								<td className="text-center" title="Click to make this user Instructor"> <button className="btn btn-ghost">  <FaUserTie/></button>  </td>
							      </tr>

						)

					}
				     
				    </tbody>
				  </table>
				</div>
		</div>
	);
};

export default ManageUsers;
