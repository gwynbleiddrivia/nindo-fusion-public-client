import { useQuery } from '@tanstack/react-query'

const useAllClasses = () => {
        const {refetch, data: allClassesData=[] } = useQuery({
                queryKey: ['classes'],
                queryFn: async () => {
                const response = await fetch(`https://server-side-self.vercel.app/classes`)
                return response.json()
			}                                                                           
                })
        return [allClassesData, refetch]
};
export default useAllClasses;
