import useAllUsers from '../../customHooks/useAllUsers'
import { FaUserTie } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import Swal from 'sweetalert2'


const ManageUsers = () => {
	const [allUsersData, refetch] = useAllUsers()
	console.log(allUsersData)
	
	const handleMakeInstructor = user =>{
		Swal.fire({
		  title: 'Are you sure you want to make this user instructor?',
		  showDenyButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Yes',
		  denyButtonText: `No`,
		}).then((result) => {
		  if (result.isConfirmed) {
			fetch(`https://server-side-self.vercel.app/users/instructor/${user._id}`,{
			method: 'PATCH'
			})
			.then(res => res.json())
			.then(data =>{
				if(data.modifiedCount){
					refetch()
		    			Swal.fire('This user has been made instructor!', '', 'success')
			}
			})
		  } else if (result.isDenied) {
		    Swal.fire('This user has not been made instructor', '', 'info')
		  }
		})
	
	}
	const handleMakeAdmin = user =>{
		Swal.fire({
		  title: 'Are you sure you want to make this user admin?',
		  showDenyButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Yes',
		  denyButtonText: `No`,
		}).then((result) => {
		  if (result.isConfirmed) {
			fetch(`https://server-side-self.vercel.app/users/admin/${user._id}`,{
			method: 'PATCH'
			})
			.then(res => res.json())
			.then(data =>{
				if(data.modifiedCount){
					refetch()
		    			Swal.fire('This user has been made admin!', '', 'success')
			}
			})
		  } else if (result.isDenied) {
		    Swal.fire('This user has not been made admin', '', 'info')
		  }
		})
	
	}

	const handleDelete = singleUser =>{
		Swal.fire({
		  title: 'Are you sure you want to delete this user?',
		  showDenyButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Yes',
		  denyButtonText: `No`,
		}).then((result) => {
		  /* Read more about isConfirmed, isDenied below */
		  if (result.isConfirmed) {
		    fetch(`https://server-side-self.vercel.app/users/${singleUser._id}`,{
			method: 'DELETE'
		    })
		    .then(res=>res.json())
		    .then(data=>{
			if(data.deletedCount>0){
				refetch();
		    		Swal.fire('User deleted!', '', 'success')
			}
		    })
		  } else if (result.isDenied) {
		    Swal.fire('User is Not deleted!', '', 'info')
		  }
		})
	}

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
					<th className="text-center">Delete User</th>
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
								<td className="text-center" title="Click to make this user Admin"> <button onClick={()=>handleMakeAdmin(singleUser)} className="btn btn-ghost">  <FaUserShield/></button>  </td>
								<td className="text-center" title="Click to make this user Instructor"> <button onClick={()=>handleMakeInstructor(singleUser)} className="btn btn-ghost">  <FaUserTie/></button>  </td>
								<td className="text-center" title="Click to delete this user"> <button onClick={()=>handleDelete(singleUser)} className="btn btn-ghost">  <FaPowerOff/></button>  </td>
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
