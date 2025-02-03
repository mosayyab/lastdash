// useFetchData.ts
import { useQuery } from '@tanstack/react-query';



export const useFetchData = (method: string) => {
  const BASE_URL = `https://ws.audioscrobbler.com/2.0/?api_key=${process.env.API_KEY}&format=json&limit=10&user=wymir&method=`;

  const getTop = (method: string) =>
    fetch(`${BASE_URL}user.${method}`).then((res) => res.json());
  
  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}user.${method}`);
    return response.json();
  };

  return useQuery({
      queryKey: ['top', method],  // Add `method` as part of the key for caching
      queryFn: () => getTop(method),    // Pass method correctly into `getTop`
    });
};
