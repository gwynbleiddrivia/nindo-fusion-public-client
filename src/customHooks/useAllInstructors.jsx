import { useQuery } from '@tanstack/react-query'

const useAllInstructors = () => {
        const {refetch, data: allInstructorsData=[] } = useQuery({
                queryKey: ['users','instructor'],
                queryFn: async () => {
                const response = await fetch(`https://server-side-self.vercel.app/users?role=instructor`)
                return response.json()
			}                                                                           
                })
        return [allInstructorsData, refetch]
};
export default useAllInstructors;
