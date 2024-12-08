
import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../helpers/getlabel";



const useLabels = () => {



    const { isLoading, data: labels, refetch } = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        refetchOnWindowFocus: false // No recargar al cambiar de pestaña
    })

    return { isLoading, labels, refetch }


}

export default useLabels;