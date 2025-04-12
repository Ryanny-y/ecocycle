import { useState } from "react";

const SwapHistory = () => {

  const [ exhanges, setExchanges ] = useState([]);


  return (
    <section id="user_dashboard">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Recycle Log</h1>

        <button
          className="bg-forest hover:bg-opacity-90 rounded-md duration-400 text-white py-2 px-4">
          Create New Product
        </button>
      </div>

      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>All ({exhanges.length})</li>
            <li>Newest ({exhanges.length})</li>
          </ul>
        </nav>

        <div className="overflow-x-auto" id="products_table">
          <table className="products_table w-full border-spacing-y-3 border-separate text-nowrap">
            <thead className="bg-gray-100 text-sm md:text-md font-semibold">
              <tr>
                <th className="text-start py-4 px-2 text-nowrap">Exchange Id</th>
                <th className="px-2 text-nowrap">User Id</th>
                <th className="px-2 text-nowrap">Name</th>
                <th className="px-2 text-nowrap">Product</th>
                <th className="px-2 text-nowrap">Points Used</th>
                <th className="px-2 text-nowrap">Date</th>
              </tr>
            </thead>

            <tbody>
              {exhanges.map((exchange) => (
                <tr className="even:bg-white" key={exchange._id}>
                  <td className="text-start py-2 px-2 text-nowrap">{exchange._id}</td>
                  <td className="text-center px-2 text-nowrap">{exchange.name}</td>
                  <td className="text-center px-2 text-nowrap">{exchange.stocks}</td>
                  <td className="text-center px-2 text-nowrap">{exchange.description}</td>
                  <td className="text-center px-2 text-nowrap">{`${exchange.exchange_for} ${exchange.unit}`}</td>
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
