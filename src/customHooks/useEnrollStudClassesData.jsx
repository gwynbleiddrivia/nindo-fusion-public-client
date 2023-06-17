import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../authentication/AuthProvider'

const useEnrollStudClassesData = () => {
	const {user} = useContext(AuthContext)  
	const {refetch,data: enrollClassesData=[] } = useQuery({
		queryKey: ['enrclasses', user?._id],
		queryFn: async () => {
	    	const response = await fetch(`https://server-side-self.vercel.app/enrclasses?studentid=${user?._id}`)
	    	return response.json()
			     }
		})
 	return [enrollClassesData, refetch]
};

export default useEnrollStudClassesData;
