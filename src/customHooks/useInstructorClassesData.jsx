import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../authentication/AuthProvider'

const useInstructorClassesData = () => {
	const {user} = useContext(AuthContext)  
	const {refetch,data: instructorClassesData=[] } = useQuery({
		queryKey: ['classes', user?.email],
		queryFn: async () => {
	    	const response = await fetch(`https://server-side-self.vercel.app/classes?email=${user?.email}`)
	    	return response.json()
			     }
		})
 	return [instructorClassesData, refetch]
};

export default useInstructorClassesData;
