import { createContext, useEffect, useState } from "react";
import useFetchData from '../hooks/useFetchData';

export const MaterialContext = createContext();


const MaterialProvider = ({ children }) => {

  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/materials`);
  const [ materials, setMaterials ] = useState([]);

  useEffect(() => {
    if(data && !loading && !error) {
      setMaterials(data);
    }
  }, [data, loading, error])

  const value = {
    materials
  };

  return (
    <MaterialContext.Provider value={value}>
      { children }
    </MaterialContext.Provider>
  )
};

export default MaterialProvider;
