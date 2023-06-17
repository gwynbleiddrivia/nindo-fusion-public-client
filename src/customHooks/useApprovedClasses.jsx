import { useQuery } from '@tanstack/react-query'

const useApprovedClasses = () => {
        const {refetch, data: appClassesData=[] } = useQuery({
                queryKey: ['classes','approved'],
                queryFn: async () => {
                const response = await fetch(`https://server-side-self.vercel.app/classes?status=approved`)
                return response.json()
			}                                                                           
                })
        return [appClassesData, refetch]
};
export default useApprovedClasses;
