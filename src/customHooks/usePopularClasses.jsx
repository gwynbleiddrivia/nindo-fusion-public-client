import { useQuery } from '@tanstack/react-query'

const usePopularClasses = () => {
        const {refetch, data: popClassesData=[] } = useQuery({
                queryKey: ['classes'],
                queryFn: async () => {
                const response = await fetch(`https://server-side-self.vercel.app/classes?ascended=true`)
                return response.json()
			}                                                                           
                })
        return [popClassesData, refetch]
};
export default usePopularClasses;
