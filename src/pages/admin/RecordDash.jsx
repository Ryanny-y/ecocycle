import { useEffect, useState } from "react";
import CreateRecord from "../../components/ui/admin/CreateRecord";
import useFetchData from "../../utils/hooks/useFetchData";
import dayjs from 'https://unpkg.com/dayjs@1.11.13/esm/index.js';

const RecordDash = () => {
  const [showCreateRecord, setShowCreateRecord] = useState(false);
  const [records, setRecords] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [ newRecords, setNewRecord ] = useState([]);

  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/records`, refetch);

  useEffect(() => {
    if (data && !loading && !error) {
      setRecords(data);
      setNewRecord(data.filter(record => dayjs(record.created_at).isSame(dayjs(), 'day')));
    }
  }, [data, loading, error, refetch]);

  return (
    <section id="user_dashboard" className="">
      <div className="flex flex-col items-start gap-5 md:gap-20 sm:flex-row sm:items-center sm:justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Records</h1>

        <div className="grow md:grow-0 w-96 bg-white py-2 px-3 flex items-center gap-2">
          <box-icon name='search'></box-icon>
          <input type="text" placeholder="Search"  className="h-full bg-transparent"/>
        </div>
      </div>

      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>All ({records.length})</li>
            <li>Newest ({newRecords.length})</li>
          </ul>
        </nav>

        <div className="overflow-x-auto" id="record_table">
          <table className="record_table w-full border-spacing-y-3 border-separate text-nowrap">
            <thead className="bg-gray-100 text-sm md:text-md font-semibold">
              <tr>
                <th className="text-start py-4 px-2 text-nowrap">Record Id</th>
                <th className="px-2 text-nowrap">Name</th>
                <th className="px-2 text-nowrap">Created At</th>
                <th className="px-2 text-nowrap">Contact</th>
                <th className="px-2 text-nowrap">Points</th>
                <th className="px-2 text-nowrap">Transactions</th>
              </tr>
            </thead>

            <tbody>
              {records.map((record) => (
                <tr className="even:bg-white" key={record._id}>
                  <td className="text-start py-2 px-2 text-nowrap">{record._id}</td>
                  <td className="text-center px-2 text-nowrap">{`${
                    record.first_name
                  } ${record.middle_name.charAt(0)}. ${record.last_name}`}</td>
                  <td className="text-center px-2 text-nowrap">{dayjs(record.created_at).format('YYYY/MMM/DD HH:mm:ss')}</td>
                  <td className="text-center px-2 text-nowrap">{record.contact_number}</td>
                  <td className="text-center px-2 text-nowrap">{record.points}</td>
                  <td className="text-center px-2 text-nowrap">[]</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CreateRecord
          showCreateRecord={showCreateRecord}
          setShowCreateRecord={setShowCreateRecord}
          setRefetch={setRefetch}
        />
      </div>
    </section>
  );
};

export default RecordDash;
