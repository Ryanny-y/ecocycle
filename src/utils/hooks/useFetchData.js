import { useState, useEffect } from "react";

const useFetchData = (url, refetch = '') => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    
    async function fetchData() {
      try {
        const response = await fetch(url, {
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
