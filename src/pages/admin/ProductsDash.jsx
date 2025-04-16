import { useEffect, useState } from "react";
import useFetchData from "../../utils/hooks/useFetchData";
import CreateProduct from "../../components/ui/admin/CreateProduct";
import useResetNav from "../../utils/hooks/useResetNav";

const ProductsDash = () => {

  useResetNav();
  const [ products, setProducts ] = useState([]);
  const [ refetch, setRefetch ] = useState(false);

  const url = import.meta.env.VITE_API_URL;
  const { data, error, loading } = useFetchData(`${url}/products`, refetch);

  useEffect(() => {
    if(data && !error && !loading) {
      console.log(data);
      
      setProducts(data);
    }
  }, [data, loading, error]);

  const [ showCreateProduct, setShowCreateProduct ] = useState(false);

  return (
    <main id="user_dashboard">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Products</h1>

        <button
          className="bg-forest hover:bg-opacity-90 rounded-md duration-400 text-white py-2 px-4"
          onClick={() => setShowCreateProduct(true)}
        >
          Create New Product
        </button>
      </div>

      <section>
        <nav>
          <ul className="flex items-center gap-4">
            <li>All (<span className="font-semibold text-forest">{products.length}</span>)</li>
          </ul>
        </nav>

        <div className="overflow-x-auto" id="products_table">
          <table className="products_table w-full border-spacing-y-3 border-separate text-nowrap">
            <thead className="bg-gray-100 text-sm md:text-md font-semibold">
              <tr>
                <th className="text-start py-4 px-2 text-nowrap">Product Id</th>
                <th className="px-2 text-nowrap">Name</th>
                <th className="px-2 text-nowrap">Description</th>
                <th className="px-2 text-nowrap">Category</th>
                <th className="px-2 text-nowrap">Required Points</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr className="even:bg-white" key={product._id}>
                <td className="text-start py-2 px-2 text-nowrap">{product._id}</td>
                <td className="text-center py-2 px-2 text-nowrap">
                  <div className="flex items-center gap-2 min-w-[150px] max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <img src={`${url}/images/${product.image}`} alt="Product Img" className="h-7 w-7" />
                    <span className="truncate">{product.name}</span>
                  </div>
                </td>
                <td className="text-center px-2 text-nowrap truncate max-w-[300px]">{product.description}</td>
                <td className="text-center px-2 text-nowrap">{product.category}</td>
                <td className="text-center px-2 text-nowrap font-semibold">{product.required_points} Points</td>
              </tr>
              
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {showCreateProduct && <CreateProduct setShowCreateProduct={setShowCreateProduct} setRefetch={setRefetch}/>}
    </main>
  )
};

export default ProductsDash;
