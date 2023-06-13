import { useQuery } from '@tanstack/react-query'

const useAllUsers = () => {
        const {refetch, data: allUsersData=[] } = useQuery({
                queryKey: ['users'],
                queryFn: async () => {
                const response = await fetch(`https://server-side-self.vercel.app/users`)
                return response.json()
			}                                                                           
                })
        return [allUsersData, refetch]
};
export default useAllUsers;
