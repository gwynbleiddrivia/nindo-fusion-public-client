import {useState, useEffect, useContext} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../authentication/AuthProvider'
import Swal from 'sweetalert2'
import useUserData from '../../customHooks/useUserData'


const AddAClass = () => {
	const { user } = useContext(AuthContext)
	const [userData] = useUserData();
	const userName = userData[0]?.userName
	const userEmail = userData[0]?.email
	console.log(userName, userEmail,"sadsad")
	const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => {
		console.log(data);
		const classname = data.classname
		const classimage = data.classimage
		const instructorname = userName
		const instructoremail = userEmail
		const email = userEmail
		const availableseats = data.availableseats
		const price = data.price
		const newClassData = {classname, classimage, instructorname, instructoremail, email, availableseats, price, status:"pending", enrolled: 0, feedback:""};
		fetch('https://server-side-self.vercel.app/classes',
		{
			method: 'POST',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify(newClassData)
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			if(data.insertedId){
				console.log('success, data inserted')
			}
		})
		
	}
	
	return (
		<div className="text-white">
			<div className="hero backdrop-blur w-fit mx-auto my-2 rounded-xl">
			  <div className="hero-content flex-col">
			    <div className="text-center">
			      <h1 className="text-5xl font-xl">Add A Class Here</h1>
			    </div>
			    <div className="card flex-shrink-0 w-full">
			      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
				<div className="flex flex-col gap-2 mx-auto">
			<div className="flex gap-5 flex-col lg:flex-row">
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Class Name</span>
				  </label>
				  <input {...register("classname")} name="classname" type="text" placeholder="class name" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				</div>
	
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Class Image</span>
				  </label>
				  <input {...register("classimage")} name="classimage" type="text" placeholder="class image URL" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				</div>
			</div>
							
			<div className="flex gap-5 lg:flex-row flex-col">
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Instructor Name</span>
				  </label>
				  <input {...register("instructorname")} defaultValue={userName} name="instructorname" type="text" placeholder="instructor name" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" disabled/>
				</div>
				
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Instructor Email</span>
				  </label>
				  <input {...register("instructoremail")} defaultValue={userEmail} name="instructoremail" type="text" placeholder="instructor email" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" disabled/>
				</div>
			</div>	
			<div className="flex gap-5 lg:flex-row flex-col">
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Available Seats</span>
				  </label>
				  <input {...register("availableseats")} name="availableseats" type="text" placeholder="available seats" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				</div>
				
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Price</span>
				  </label>
				  <input {...register("price")} name="price" type="text" placeholder="class price" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				</div>
			</div>
				<div className="form-control mt-2">
				  <button className="btn bg-[rgb(98,81,48)] text-black hover:text-white">Add This Class</button>
				</div>
				</div>
			      </form>
			    </div>
			  </div>
			</div>

		</div>
	);
};
export default AddAClass;
