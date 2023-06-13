import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../authentication/AuthProvider'

const useUserData = () => {
	const {user} = useContext(AuthContext)  
	const { isLoading, data: userData=[] } = useQuery({
		queryKey: ['users', user?.email],
		queryFn: async () => {
	    	const response = await fetch(`https://server-side-self.vercel.app/users?email=${user?.email}`)
	    	return response.json()
			     }
		})
 	return [userData, isLoading]
};

export default useUserData;
