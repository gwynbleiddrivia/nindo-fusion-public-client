import { useQuery } from '@tanstack/react-query'

const useAllUsers = () => {
        const {data: allUsersData=[] } = useQuery({
                queryKey: ['users'],
                queryFn: async () => {
                const response = await fetch(`https://server-side-self.vercel.app/users`)
                return response.json()
			}                                                                           
                })
        return [allUsersData]
};
export default useAllUsers;
