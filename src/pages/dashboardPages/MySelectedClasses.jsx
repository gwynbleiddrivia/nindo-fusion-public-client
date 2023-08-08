import useSelectStudClassesData from '../../customHooks/useSelectStudClassesData'
import useUserData from '../../customHooks/useUserData'
import axios from "axios"
const MySelectedClasses = () => {
	const [selectClassesData, refetch] = useSelectStudClassesData()
	const [userData] = useUserData()
	console.log(selectClassesData)
	const handleDelete = (classid) =>{
		console.log(classid)
		axios.delete(`https://server-side-self.vercel.app/selectclasses?classid=${classid}`)
		.then(res=>console.log(res))
		.then(()=>refetch())
	}
	const handlePay = (classid) =>{
		console.log(classid)
		axios.delete(`https://server-side-self.vercel.app/selectclasses?classid=${classid}`)
		.then(res=>console.log(res))
		.then(()=>refetch())
		axios.get(`https://server-side-self.vercel.app/classes/${classid}`)
                        .then(data=>{
                                console.log(data.data[0])
				const newEnroll = data.data[0]
                                newEnroll['studentId'] = userData[0]?._id
                                newEnroll['classid'] = classid
				newEnroll['enrolled'] = parseInt(data.data[0].enrolled) + 1
				newEnroll['availableseats'] = parseInt(data.data[0].availableseats) - 1
                                axios.post(`https://server-side-self.vercel.app/enrclasses`,newEnroll)
				.then(()=>refetch())
				axios.put(`https://server-side-self.vercel.app/classes/enrolled/${classid}`,{enrolled:newEnrollNum})
				.then(()=>refetch())
				axios.put(`https://server-side-self.vercel.app/classes/availableseats/${classid}`,{availableseats:newAvailableseats})
				.then(()=>refetch())

				})
                        .catch(err=>console.log(err))

	}
	return (
		<div className="backdrop-blur mt-2 p-5 rounded text-white">
			<h1 className="text-5xl font-xl">My Selected classes</h1>
			<div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
			{
			selectClassesData.map(singleclass=>{
				return <div key={singleclass._id} className="rounded border border-black p-5">
					<p>{singleclass.classname}</p>
					<img className="w-52 h-48" src={singleclass.classimage} alt=""/>
					<p>Available Seats:{singleclass.availableseats}</p>
					<p>Instructor: {singleclass.instructorname}</p>
					<p>Price: {singleclass.price}</p>
					<div className="flex gap-1">
						<button onClick={()=>handleDelete(singleclass._id)} className="btn btn-black">Delete</button>
						<button onClick={()=>handlePay(singleclass._id)} className="btn btn-black">Pay</button>
	
					</div>
				</div>
			})
			}
			
			
		</div>

		</div>
	);
};

export default MySelectedClasses;
