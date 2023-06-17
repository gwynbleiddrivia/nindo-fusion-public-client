import useAllClasses from '../../customHooks/useAllClasses'
import Swal from 'sweetalert2'
import {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'

const ManageClasses = () => {
	const [isPressed, setIsPressed] = useState(false)
	const [allClassesData, refetch] = useAllClasses()
	console.log(allClassesData,"whyy")
	
		const handleApprove = user =>{
		setIsPressed(!isPressed)
		console.log("isPressed",isPressed)
		Swal.fire({
		  title: 'Are you sure you want to approve this class?',
		  showDenyButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Yes',
		  denyButtonText: `No`,
		}).then((result) => {
		  if (result.isConfirmed) {
			fetch(`https://server-side-self.vercel.app/classes/approved/${user._id}`,{
			method: 'PATCH'
			})
			.then(res => res.json())
			.then(data =>{
				if(data.modifiedCount){
					refetch()
		    			Swal.fire('This class has been approved!', '', 'success')
			}
			})
			refetch()
		  } else if (result.isDenied) {
		    Swal.fire('This class has not been approved', '', 'info')
		  }
		})
	
	}
	const handleDeny = user =>{
		Swal.fire({
		  title: 'Are you sure you want to deny this class?',
		  showDenyButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Yes',
		  denyButtonText: `No`,
		}).then((result) => {
		  if (result.isConfirmed) {
			fetch(`https://server-side-self.vercel.app/classes/denied/${user._id}`,{
			method: 'PATCH'
			})
			.then(res => res.json())
			.then(data =>{
				if(data.modifiedCount){
					refetch()
		    			Swal.fire('This class has been made denied!', '', 'success')
			}
			})
			refetch()
			setIsPressed(!isPressed)
		  } else if (result.isDenied) {
		    Swal.fire('This class has not been denied', '', 'info')
		  }
		})
	
	}





	return (
		<div className="backdrop-blur mt-2 p-5 rounded text-white w-full h-full">
			<h1 className="text-5xl font-xl">Manage Classes</h1>
			<div className="grid grid-cols-3 gap-10 mt-2">
				{
					allClassesData.map(singleclass=>{
						return <div key={singleclass._id} className="border border-black rounded-xl p-2">
							<p>{singleclass.classname}</p>
							<img className="w-52 h-48" src={singleclass.classimage} alt=""/>
							<p>Instructor Name:{singleclass.instructorname}</p>
							<p>Instructor Email:{singleclass.instructoremail}</p>
							<p>Available Seats:{singleclass.availableseats}</p>
							<p>Price:{singleclass.price}</p>
							<p>Status:{singleclass.status}</p>
							<div className="flex flex-col w-fit gap-2">
							{
							(singleclass.status === "pending")?
							<>
	
<button onClick={()=>handleApprove(singleclass)} className="btn bg-[rgb(98,81,48)]">Approve</button>
<button onClick={()=>handleDeny(singleclass)} className="btn bg-[rgb(98,81,48)]">Deny</button>
						
							</>:
							<>
<button onClick={()=>handleApprove(singleclass)} className="btn btn-disabled">Approve</button>
<button onClick={()=>handleDeny(singleclass)} className="btn btn-disabled">Deny</button>
						
							</>
							}
							<Link to={`../feedback/${singleclass._id}`}>
							<button className="btn btn-black">Send Feedback</button>
							</Link>


							</div>
						</div>
					})
				}
			</div>
		</div>
	);
};

export default ManageClasses;
