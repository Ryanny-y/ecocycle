import { useState, useEffect, useContext } from "react";
import { authContext } from "../contexts/AuthProvider";

const useFetchData = (url, refetch = '') => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const { accessToken } = useContext(authContext)
  
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    
    async function fetchData() {
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
          signal: controller.signal,
          credentials: 'include'
        });

        if(!response.ok) {
          throw response;
        }

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    }
  }, [url, refetch])

  return { data, loading, error}
};

export default useFetchData;
