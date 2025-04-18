import { createContext, useEffect, useState } from "react";
import useFetchData from '../../utils/hooks/useFetchData';
import '../../assets/styles/style.css'

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
      { !products ? (
        <div className="flex justify-center items-center gap-4 h-svh">
          <span className="loader"></span>
          <p className="font-bold text-3xl">Loading</p>
        </div>
      ) : children }
    </ProductContext.Provider>
  )
};

export default ProductProvider;
