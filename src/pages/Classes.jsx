import useApprovedClasses from '../customHooks/useApprovedClasses'
import useUserData from '../customHooks/useUserData'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const Classes = () => {
	const [appClassesData, refetch] = useApprovedClasses()
	const [userData] = useUserData()
	let checkSeat;
	const checkUser = parseInt(userData.length)
	console.log(userData[0]?._id)
	const handleSelect = (classid) =>{
		if(checkUser === 0){
			Swal.fire(
  				'Warning!',
  				'You cannot select a class without logging in!',
  				'warning')
		}else{
			console.log(classid)
			axios.get(`https://server-side-self.vercel.app/classes/${classid}`)
			.then(data=>{
				console.log(data.data[0])
				const newSelect = data.data[0]
				newSelect['studentId'] = userData[0]?._id
				newSelect['classid'] = classid
				axios.post(`https://server-side-self.vercel.app/selectclasses`,newSelect)
				.then(res=>console.log(res))
				.catch(err=>console.log(err))
				})
			.catch(err=>console.log(err))
		}
	}
	return (
		<div className="backdrop-blur mt-2 p-5 rounded text-white">
		<h1 className="text-5xl font-xl">All Classes</h1>
		<div className="grid md:grid-cols-3 grid-cols-1 gap-10">
			{
			appClassesData.map(singleclass=>{
				checkSeat = parseInt(singleclass.availableseats)
				return <div key={singleclass._id} className={
					(checkSeat !== 0)?
					"":
					"bg-red-700 p-4 rounded"
					}>
					<p>{singleclass.classname}</p>
					<img className="w-52 h-48" src={singleclass.classimage} alt=""/>
					<p>Available Seats:{singleclass.availableseats}</p>
					<p>Enrolled:{singleclass.enrolled}</p>
					<p>Instructor: {singleclass.instructorname}</p>
					<p>Price: {singleclass.price}</p>
					{
						(userData[0]?.role !== 'instructor' && userData[0]?.role !== 'admin' && checkSeat !== 0) ?
						<>
					<button onClick={()=>handleSelect(singleclass._id)} className="btn btn-black">Select this class</button>

						</>:
						<>
					<button className="btn btn-black btn-disabled">Select this class</button>

						</>

					}
				</div>
			})
			}
			
			
		</div>	

		</div>
	);
};

export default Classes;
