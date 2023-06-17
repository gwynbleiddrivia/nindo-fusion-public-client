import useSelectStudClassesData from '../../customHooks/useSelectStudClassesData'
const MySelectedClasses = () => {
	const [selectClassesData] = useSelectStudClassesData()
	console.log(selectClassesData)
	const handleDelete = (classid) =>{
		console.log(classid)
	}
	const handlePay = (classid) =>{
		console.log(classid)
	}
	return (
		<div className="backdrop-blur mt-2 p-5 rounded text-white">
			<h1 className="text-5xl font-xl">My Selected classes</h1>
			<div className="grid grid-cols-3 gap-10">
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
