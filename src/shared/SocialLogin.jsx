import { FaGoogle } from 'react-icons/fa'
import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../authentication/AuthProvider'

const SocialLogin = () => {
	const {googleSignIn} = useContext(AuthContext)
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"
	const handleGoogleSignIn = () => {
		googleSignIn()
		.then(result=>{
			const loggedGoogleUser = result.user
			console.log(loggedGoogleUser)
			navigate(from, {replace:true})
		})
	}
	return (
		<div>
			          <button onClick={handleGoogleSignIn} className="mt-5 btn bg-[rgb(98,81,48)] text-black hover:text-white flex justify-around w-full">
                                   Login from Google
                                  <FaGoogle/>
                                      
                                     
                                  </button>


		</div>
	);
};

export default SocialLogin;
