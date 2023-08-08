import useInstructorClassesData from '../../customHooks/useInstructorClassesData'
import {Link} from 'react-router-dom'

const MyClasses = () => {
	const [instructorClassesData] = useInstructorClassesData()
	console.log(instructorClassesData)
	return (
	<div className="backdrop-blur mt-2 p-5 rounded text-white">
	<h1 className="text-5xl font-xl">My Classes</h1>
		<div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
			{
			instructorClassesData.map(singleclass=>{
				return <div key={singleclass._id} className="">
					<p>{singleclass.classname}</p>
					<img className="w-52 h-48" src={singleclass.classimage} alt=""/>
					<p>Available Seats:{singleclass.availableseats}</p>
					<p>Status:{singleclass.status}</p>
					<p>Enrolled:{singleclass.enrolled}</p>
{
					(singleclass.status === 'denied')?
					<>

					<p>Feedback: {singleclass.feedback}</p>
					</>:
					<></>
}
					<button className="btn btn-black">Update</button>
				</div>
			})
			}
			
			
		</div>
		</div>
	);
};

export default MyClasses;
