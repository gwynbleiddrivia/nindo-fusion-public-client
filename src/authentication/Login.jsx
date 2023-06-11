
const Login = () => {
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
				  <input type={({isHide}) => isHide? "password" : "text"} placeholder="password" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" />
				  <label className="label">
				  </label>
				</div>
				<div className="form-control mt-6">
				  <button className="btn bg-[rgb(98,81,48)] text-black">Login</button>
				</div>
			      </div>
			    </div>
			  </div>
			</div>

		</div>
	);
};

export default Login;
