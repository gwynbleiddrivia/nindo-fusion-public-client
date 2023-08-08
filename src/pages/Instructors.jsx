import useAllInstructors from '../customHooks/useAllInstructors'
const Instructors = () => {
	const [allInstructorData] = useAllInstructors()
	console.log(allInstructorData)
	return (
		<div>
			<h2 className="text-5xl font-xl">Instructors</h2>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-10">
				{
					allInstructorData.map(singleIns=>{
						return <div key={singleIns._id} className="rounded border border-black p-5">
							<p>{singleIns.userName}</p>
							<img className="w-52 h-48" src={singleIns.userPhoto} alt=""/>
							<p>Email:{singleIns.email}</p>

						</div>
					})
				}
			</div>

		</div>
	);
};

export default Instructors;
