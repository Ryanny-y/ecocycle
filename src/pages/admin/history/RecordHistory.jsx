import { useEffect, useState } from "react";
import useFetchData from "../../../utils/hooks/useFetchData";
import formatName from "../../../utils/helpers/formatName";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const RecordHistory = () => {

  const [ recycleSubmissions, setRecycleSubmissions ] = useState([]);

  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/history/recordLogs`);

  useEffect(() => {
    if(data && !loading && !error) {
      console.log(data);
      setRecycleSubmissions(data)
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
            <li>All ({recycleSubmissions.length})</li>
            <li>Newest ({recycleSubmissions.length})</li>
          </ul>
        </nav>

        <div className="overflow-x-auto" id="products_table">
          <table className="products_table w-full border-spacing-y-3 border-separate text-nowrap">
            <thead className="bg-gray-100 text-sm md:text-md font-semibold">
              <tr>
                <th className="text-start py-4 px-2 text-nowrap">Log Id</th>
                <th className="px-2 text-nowrap">Submitted By</th>
                <th className="px-2 text-nowrap">Material Type</th>
                <th className="px-2 text-nowrap">Points Earned</th>
                <th className="px-2 text-nowrap">Date</th>
              </tr>
            </thead>

            <tbody>
              {recycleSubmissions.map((submission) => (
                <tr className="even:bg-white" key={submission._id}>
                  <td className="text-start py-2 px-2 text-nowrap">{submission._id}</td>
                  <td className="text-center px-2 text-nowrap">{formatName(submission.submitted_by)}</td>
                  <td className="text-center px-2 text-nowrap">{submission.materials.map(mat => `${mat.material.name}`).join(', ')}</td>
                  <td className="text-center px-2 text-nowrap">{submission.points_earned}</td>
                  <td className="text-center px-2 text-nowrap">{dayjs(submission.created_at).utc().format('YYYY/MM/DD HH:mm:ss')}</td>
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
