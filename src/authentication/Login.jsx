import {useState} from 'react'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
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
			      <div className="card-body">
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Email</span>
				  </label>
				  <input type="text" placeholder="email" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" />
				</div>
				<div className="form-control">
				  <label className="label">
				    <span className="label-text text-white">Password</span>
				  </label>
				  { 	isHide?
				  <>
				  	<input type="password" placeholder="password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" />
				  	<button onClick={handleHide}><small className="text-amber-400">Click here to SHOW password</small></button>
				  </>:
				  <>
				  <input type= "text" placeholder="password" className="mb-3 input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" />
					<button onClick={handleHide}><small className="text-amber-400">Click here to HIDE password</small></button>
				  </>
				  }
				  <label className="label">
				  </label>
				</div>
				<div className="form-control mt-6">
				  <button className="btn bg-[rgb(98,81,48)] text-black hover:text-white">Login</button>
				  <button className="mt-5 btn bg-[rgb(98,81,48)] text-black hover:text-white">
				  <div className="flex justify-around w-full">
				   Login from Google
				  <FaGoogle/>
				  
				  </div>
				 
				  </button>
				</div>
			      </div>
			    </div>
			  </div>
			</div>

		</div>
	);
};

export default Login;
