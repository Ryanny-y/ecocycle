import { useCallback, useEffect, useState } from "react";
import useFetchData from "../../../utils/hooks/useFetchData";
import formatName from "../../../utils/helpers/formatName";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import useResetNav from "../../../utils/hooks/useResetNav";
import useSearchData from "../../../utils/hooks/useSearchData";

dayjs.extend(utc);

const SwapHistory = () => {

  useResetNav();
  const [ swapProducts, setSwapProducts ] = useState([]);

  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/history/swapLogs`);

  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    if(data && !loading && !error) {
      setSwapProducts(data)
    }
  }, [data, loading, error])

  const filterFn = useCallback((data, value) => {
      const fullname = `${data?.submitted_by.first_name} ${data?.submitted_by.middle_name} ${data?.submitted_by.last_name}`.toLowerCase();
      
      const foundByName = fullname.includes(value);
      return foundByName || data?.points_earned < Number(value);
    }, []);
    
    useSearchData(data, setSwapProducts, searchTerm, filterFn);

  return (
    <section id="user_dashboard">
      <div className="flex flex-col items-start gap-5 md:gap-20 sm:flex-row sm:items-center sm:justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Swap History</h1>

        <div className="w-full relative md:grow-0 md:w-96 bg-white px-3 flex rounded-md items-center gap-2">
          <box-icon name='search' className="absolute"></box-icon>
          <input 
            type="text" 
            placeholder="Search"  
            className="bg-transparent ml-8 outline-none rounded-md w-full py-2" 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>All ({swapProducts.length})</li>
            <li>Newest ({swapProducts.length})</li>
          </ul>
        </nav>

        <div className="overflow-x-auto" id="products_table">
          <table className="products_table w-full border-spacing-y-3 border-separate text-nowrap">
            <thead className="bg-gray-100 text-sm md:text-md font-semibold">
              <tr>
                <th className="text-start py-4 px-2 text-nowrap">Log Id</th>
                <th className="px-2 text-nowrap">Submitted By</th>
                <th className="px-2 text-nowrap">Exchanged Product</th>
                <th className="px-2 text-nowrap">Points Deducted</th>
                <th className="px-2 text-nowrap">Date</th>
              </tr>
            </thead>

            <tbody>
              {swapProducts.map((swap_product) => (
                <tr className="even:bg-white" key={swap_product?._id}>
                  <td className="text-start py-2 px-2 text-nowrap">{swap_product?._id}</td>
                  <td className="text-center px-2 text-nowrap">{formatName(swap_product?.submitted_by)}</td>
                  <td className="text-center px-2 text-nowrap">{swap_product?.product_id.name}</td>
                  <td className="text-center px-2 text-nowrap">{swap_product?.points_deducted}</td>
                  <td className="text-center px-2 text-nowrap">{dayjs(swap_product?.created_at).utc().format('YYYY/MM/DD HH:mm:ss')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
};

export default SwapHistory;
