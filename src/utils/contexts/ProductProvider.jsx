import { createContext, useEffect, useState } from "react";
import useFetchData from '../../utils/hooks/useFetchData';

export const ProductContext = createContext();


const ProductProvider = ({ children }) => {

  const [ products, setProducts ] = useState();
  
  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/products`);

  useEffect(() => {
    if(data && !loading && !error) {
      setProducts(data);
    }
  }, [data, loading, error])

  return (
    <ProductContext.Provider value={{ products }}>
      { !products ? <p>Loading...</p> : children }
    </ProductContext.Provider>
  )
};

export default ProductProvider;
