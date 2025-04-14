import { useEffect, useState } from "react";
import useFetchData from "../../../utils/hooks/useFetchData";
import formatName from "../../../utils/formatters/formatName";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const SwapHistory = () => {

  const [ swapProducts, setSwapProducts ] = useState([]);

  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/history/swapLogs`);

  useEffect(() => {
    if(data && !loading && !error) {
      setSwapProducts(data)
    }
  }, [data, loading, error])

  return (
    <section id="user_dashboard">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Record History</h1>
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
                <tr className="even:bg-white" key={swap_product._id}>
                  <td className="text-start py-2 px-2 text-nowrap">{swap_product._id}</td>
                  <td className="text-center px-2 text-nowrap">{formatName(swap_product.submitted_by)}</td>
                  <td className="text-center px-2 text-nowrap">{swap_product.product_id.name}</td>
                  <td className="text-center px-2 text-nowrap">{swap_product.points_deducted}</td>
                  <td className="text-center px-2 text-nowrap">{dayjs(swap_product.created_at).utc().format('YYYY/MM/DD HH:mm:ss')}</td>
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
