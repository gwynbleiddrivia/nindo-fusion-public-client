import useEnrollStudClassesData from '../../customHooks/useEnrollStudClassesData'
import useUserData from '../../customHooks/useUserData'
import axios from "axios"
const MyEnrolledCLasses = () => {
	const [enrollClassesData,refetch] = useEnrollStudClassesData()
	return (
		<div className="backdrop-blur mt-2 p-5 rounded text-white">
			<h1 className="text-5xl font-xl">My Enrolled Classes</h1>
			<div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
			{
			enrollClassesData.map(singleclass=>{
				return <div key={singleclass._id} className="rounded border border-black p-5">
					<p>{singleclass.classname}</p>
					<img className="w-52 h-48" src={singleclass.classimage} alt=""/>
					<p>Available Seats:{singleclass.availableseats}</p>
					<p>Enrolled :{singleclass.enrolled}</p>
					<p>Instructor: {singleclass.instructorname}</p>
					<p className="text-3xl font-xl">ENROLLED</p>
				</div>
			})
			}
			
			
		</div>
		</div>
	);
};

export default MyEnrolledCLasses;
