import { useState, useEffect } from "react";

export default function useFetchUser(userId) {
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Error fetching user data");
        }
        const data = await response.json();
        setData(data);
        setError(false)
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchUserData();

    return () => {
      controller.abort();
    };
  }, [userId]);

  return { data, error, isLoading };
}
