
import { useQuery } from '@tanstack/react-query';
export default function useRamdonNumber() {
    const getNumber = async () => {
        const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
        const data = await response.text();
        return data
      }
    
      const {isLoading,data:number,refetch} = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getNumber,
        refetchOnWindowFocus: false // No recargar al cambiar de pestaña
      })
        
        return {isLoading,number,refetch}
    
};