import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../authentication/AuthProvider'

const useSelectStudClassesData = () => {
	const {user} = useContext(AuthContext)  
	const {refetch,data: selectClassesData=[] } = useQuery({
		queryKey: ['selectclasses', user?._id],
		queryFn: async () => {
	    	const response = await fetch(`https://server-side-self.vercel.app/selectclasses?studentid=${user?._id}`)
	    	return response.json()
			     }
		})
 	return [selectClassesData, refetch]
};

export default useSelectStudClassesData;
