import {useState} from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'



const Register = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => {
		console.log(data);
	}
	

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
				  <input {...register("email")} name="email" type="email" placeholder="email" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" required/>
				</div>
				<div className="form-control">
				  <label className="label">
				  </label>
				  { 	isHide?
				  <>
				    <span className="my-2 label-text text-white">Password</span>
				  	<input {...register("password")} name="password" type="password" placeholder="password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" required />
				    <span className="my-2 label-text text-white">Confirm Password</span>
				  	<input {...register("confirmpass")} name="confirmpass" type="password" placeholder="confirm password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" required />
				  	<button onClick={handleHide}><small className="text-amber-400">Click here to SHOW password</small></button>
				  </>:
				  <>
				    <span className="my-2 label-text text-white">Password</span>
				  <input {...register("password")}name="password" type="text" placeholder="password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" required/>
				    <span className="my-2 label-text text-white">Confirm Password</span>
				  <input {...register("confirmpass")}name="confirmpass" type= "text" placeholder="confirm password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" required/>
					<button onClick={handleHide}><small className="text-amber-400">Click here to HIDE password</small></button>
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
