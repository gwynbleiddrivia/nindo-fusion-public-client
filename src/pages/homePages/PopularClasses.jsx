import usePopularClasses from '../../customHooks/usePopularClasses'
const PopularClasses = () => {
	let [popClassesData] = usePopularClasses()
	if(popClassesData.length>6){
		popClassesData = popClassesData.slice(0,6)
	}
	console.log(popClassesData,"popcls")
	return (
		<div className="">
			<h2 className="text-5xl font-xl">Popular Classes</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
				{
					popClassesData.map(singleclass=>{
						return <div key={singleclass._id} className="rounded border border-black p-5">
							<p>{singleclass.classname}</p>
							<img src={singleclass.classimage} className="w-52 h-48" alt=""/>
							                                        							     <p>Available Seats:{singleclass.availableseats}</p>
                                        	 	<p>Enrolled :{singleclass.enrolled}</p>                          
                                        		<p>Instructor: {singleclass.instructorname}</p>

						</div>
					})
				}
			</div>
		</div>
	);
};

export default PopularClasses;
