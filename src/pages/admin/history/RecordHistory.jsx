import { useState } from "react";

const RecordHistory = () => {

  const [ recycleSubmissions, setRecycleSubmissions ] = useState([]);


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
            <li>All ({recycleSubmissions.length})</li>
            <li>Newest ({recycleSubmissions.length})</li>
          </ul>
        </nav>

        <div className="overflow-x-auto" id="products_table">
          <table className="products_table w-full border-spacing-y-3 border-separate text-nowrap">
            <thead className="bg-gray-100 text-sm md:text-md font-semibold">
              <tr>
                <th className="text-start py-4 px-2 text-nowrap">Log Id</th>
                <th className="px-2 text-nowrap">Name</th>
                <th className="px-2 text-nowrap">Material Type</th>
                <th className="px-2 text-nowrap">Weight</th>
                <th className="px-2 text-nowrap">Points Awarded</th>
                <th className="px-2 text-nowrap">Date</th>
              </tr>
            </thead>

            <tbody>
              {recycleSubmissions.map((submission) => (
                <tr className="even:bg-white" key={submission._id}>
                  <td className="text-start py-2 px-2 text-nowrap">{submission._id}</td>
                  <td className="text-center px-2 text-nowrap">{submission.name}</td>
                  <td className="text-center px-2 text-nowrap">{submission.stocks}</td>
                  <td className="text-center px-2 text-nowrap">{submission.description}</td>
                  <td className="text-center px-2 text-nowrap">{`${submission.exchange_for} ${submission.unit}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
};

export default RecordHistory;
