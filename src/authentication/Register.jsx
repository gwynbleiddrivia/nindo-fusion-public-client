import {useState, useContext} from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from './AuthProvider'
import Swal from 'sweetalert2'
import SocialLogin from '../shared/SocialLogin'

const Register = () => {
	const { createUser, user } = useContext(AuthContext)
	const { register, handleSubmit, formState: { errors } } = useForm();
	const navigate = useNavigate()
        const location = useLocation()
        const from = location.state?.from?.pathname || "/"
        const onSubmit = data => {
		console.log(data);
		if(data.password !== data.confirmpass){
			Swal.fire(
				  'Password and Confirm password does not match!',
				  'Input the same password and confirm!',
				  'warning'
				)
			return 0
		}
		createUser(data.email, data.password)
		.then(result => {
			console.log(result.user)
		})
		const email = data.email
		const userName = data.username
		const userPhoto = data.userphoto
		const newUserData = {email, userName, userPhoto, role:"student"};
		fetch('https://server-side-self.vercel.app/users',
		{
			method: 'POST',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify(newUserData)
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			if(data.insertedId){
				console.log('success, data inserted')
				navigate(from, { replace:true })
			}
		})
		
	}
	

	let [isHide,setIsHide] = useState(false)
	const handleHide = () =>{
		setIsHide(!isHide)
	}

	
	return (
		<div className="text-white">
			<div className="hero backdrop-blur w-fit mx-auto my-2 rounded-xl">
			  <div className="hero-content flex-col">
			    <div className="text-center lg:text-left">
			      <h1 className="text-5xl font-xl">Register From Here</h1>
			    </div>
			    <div className="card flex-shrink-0 w-full max-w-sm">
			      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
				<div className="flex gap-2 mx-auto">
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Name</span>
				  </label>
				  <input {...register("username")} name="username" type="text" placeholder="your name" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				</div>
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Photo URL</span>
				  </label>
				  <input {...register("userphoto")} name="userphoto" type="text" placeholder="your photo url" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				</div>
				
				</div>


				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Email</span>
				  </label>
				  <input {...register("email", {required:true})} name="email" type="email" placeholder="email" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				        {errors.email?.type == "required" && <span className="text-amber-400">Email is required</span>}

				</div>
				<div className="form-control">
				  <label className="label">
				  </label>
				  { 	!isHide?
				  <>
				    <span className="my-2 label-text text-white">Password</span>
				  	<input {...register("password", {required:true, minLength:6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} name="password" type="password" placeholder="password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				        {errors.password?.type === "required" && <span className="text-amber-400">Password is required</span>}
				        {errors.password?.type === "minLength" && <span className="text-amber-400">Password must be at least 6 characters</span>}
				        {errors.password?.type === "pattern" && <span className="text-amber-400">Password must have at least one special character and a capital letter</span>}

 				    <span className="my-2 label-text text-white">Confirm Password</span>
				  	<input {...register("confirmpass",{required:true})} name="confirmpass" type="password" placeholder="confirm password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				        {errors.confirmpass?.type == "required" && <span className="text-amber-400">You must confirm password</span>}

				  	<button onClick={handleHide}><small className="m-2 text-amber-400">Click here to SHOW password</small></button>
				  </>:
				  <>
				    <span className="my-2 label-text text-white">Password</span>
				  <input {...register("password",{required:true, minLength:6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/})} name="password" type="text" placeholder="password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				        {errors.password?.type == "required" && <span className="text-amber-400">Password is required</span>}
				        {errors.password?.type == "minLength" && <span className="text-amber-400">Password must be at least 6 characters</span>}
				        {errors.password?.type == "pattern" && <span className="text-amber-400">Password must have at least one special character and a capital letter</span>}
				    <span className="my-2 label-text text-white">Confirm Password</span>
				  <input {...register("confirmpass",{required:true})}name="confirmpass" type= "text" placeholder="confirm password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				        {errors.confirmpass?.type == "required" && <span className="text-amber-400">You must confirm password</span>}
					<button onClick={handleHide}><small className="m-2 text-amber-400">Click here to HIDE password</small></button>
				  </>
				  }
				  <label className="label">
				  </label>
				</div>
				<div className="form-control mt-2">
				  <button className="btn bg-[rgb(98,81,48)] text-black hover:text-white">Register</button>
				  <SocialLogin></SocialLogin>
				  <Link to="/register" className="font-bold mt-2 text-center">
				  <small>Does not have an account yet? Register here</small>

				  </Link>
				</div>
			      </form>
			    </div>
			  </div>
			</div>

		</div>
	);
};

export default Register;
