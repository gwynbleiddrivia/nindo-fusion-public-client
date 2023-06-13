import {useState, useContext} from 'react'
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import { useForm } from 'react-hook-form'

const Login = () => {
	const { signIn } = useContext(AuthContext)
	const { register, handleSubmit, formState: { errors } } = useForm()
	const onSubmit = data =>{
		console.log(data.email, data.password)

		signIn(data.email, data.password)
		.then(res => {
			const loggedUser = res.user
			console.log(loggedUser)
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
			      <h1 className="text-5xl font-xl">Login From Here</h1>
			    </div>
			    <div className="card flex-shrink-0 w-full max-w-sm">
			      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
			
				
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Email</span>
				  </label>
				  <input {...register('email', {required:true})} name="email" type="email" placeholder="email" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				  {errors.email?.type == "required" &&  <span className="text-amber-400">Email is required</span>   }
				</div>
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Password</span>
				  </label>
				  { 	!isHide?
				  <>
				  	<input {...register("password", {required:true})} name="password" type="password" placeholder="password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				  {errors.password?.type == "required" &&  <span className="text-amber-400">Password is required</span>   }
				  	<button onClick={handleHide}><small className="text-amber-400">Click here to SHOW password</small></button>
				  </>:
				  <>
				  <input {...register("password",{required:true})} name="password" type="text" placeholder="password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				  {errors.password?.type == "required" &&  <span className="text-amber-400">Password is required</span>   }
					<button onClick={handleHide}><small className="text-amber-400">Click here to HIDE password</small></button>
				  </>
				  }
				  <label className="label">
				  </label>
				</div>
				<div className="form-control mt-2">
				  <button className="btn bg-[rgb(98,81,48)] text-black hover:text-white">Login</button>
				  <button className="mt-5 btn bg-[rgb(98,81,48)] text-black hover:text-white">
				  <div className="flex justify-around w-full">
				   Login from Google
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

export default Login;
