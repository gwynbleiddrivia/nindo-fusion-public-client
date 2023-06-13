import useAllUsers from '../../customHooks/useAllUsers'
const ManageUsers = () => {
	const [allUsersData] = useAllUsers()
	console.log(allUsersData)
	return (
		<div>

			<h1>Total users: {allUsersData.length}</h1>
		</div>
	);
};

export default ManageUsers;
