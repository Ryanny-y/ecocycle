import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useFetchData from './utils/hooks/useFetchData'

const App = () => {
 const [ products, setProducts ] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/products`);

 useEffect(() => {
    if(data && !error && !loading) {
      setProducts(data);
    }
  }, [data, loading, error])

  return (
    <>
      <Link to="/admin_login">Login Here</Link>
      {products.map(product => {
        <p key={product.id}>{product.name}</p>
      })}
    </>
  );
};

export default App;
