import useAllInstructors from '../../customHooks/useAllInstructors'
const PopularInstructors = () => {
	let [allInstructorData] = useAllInstructors()
	if(allInstructorData.length > 6){
		allInstructorData = allInstructorData.slice(0,6)
	}
	return (
		<div>
			<h2 className="text-5xl font-xl">Popular Instructors</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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

export default PopularInstructors;
