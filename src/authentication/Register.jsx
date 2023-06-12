import {useState, useContext} from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from './AuthProvider'


const Register = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => {
		console.log(data);
		createUser(data.email, data.password)
		.then(result => {
			user.photoURL = data.userphoto
			user.providerData[0].displayName = data.username
			console.log(user.photoURL,"user printed from Rgister")
			console.log(user.providerData[0].displayName,"user printed from Rgister")
		})
	}
	
	const { createUser, user } = useContext(AuthContext)

	let [isHide,setIsHide] = useState(false)
	const handleHide = () =>{
		setIsHide(!isHide)
	}

	
	const handleRegister = event =>{
		event.preventDefault()
		const username = event.target.username.value
		const userphoto = event.target.userphoto.value
		const email = event.target.email.value
		const password = event.target.password.value
		const confirmpass = event.target.confirmpass.value

		const newUserData = {email, username, userphoto}
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
		})
		console.log(email,password)
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
				  { 	isHide?
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
				  <button className="mt-5 btn bg-[rgb(98,81,48)] text-black hover:text-white">
				  <div className="flex justify-around w-full">
				   Register from Google
				  <FaGoogle/>
				  
				  </div>
				 
				  </button>
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
