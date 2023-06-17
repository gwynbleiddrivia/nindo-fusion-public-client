import {useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from "axios"

const Feedback = () => {
	const {id} = useParams()
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data=>{
		console.log(data.feedback)
	axios.put(`https://server-side-self.vercel.app/classes/feedback/${id}`,data)
	.then(res=>console.log(res))
	.catch(err=>console.log(err))
	}
	return (
		<div className="text-white">
			<div className="hero backdrop-blur w-fit mx-auto my-2 rounded-xl">
				<div className="hero-content flex-col">
				<div className="text-center text-5xl">

			<h1>Give your feedback here</h1>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control">
				  <input {...register("feedback")} name="feedback" type="text" placeholder="Type in..." className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white"/>
				</div>
				<button className="btn btn-black">Submit Feedback</button>
				</form>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
