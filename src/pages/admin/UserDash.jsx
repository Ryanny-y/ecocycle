import { useEffect, useState } from "react";
import CreateRecord from "../../components/ui/admin/CreateRecord";
import useFetchData from '../../utils/hooks/useFetchData'

const UserDash = () => {

  const [ showCreateRecord, setShowCreateRecord ] = useState(false);
  const [ records, setRecords] = useState([]);
  const [ refetch, setRefetch ] = useState(true);

  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/records`, refetch);

  useEffect(() => {
    if(data && !loading && !error) {
      setRecords(data);
    }
  }, [data, loading, error, refetch])

  return (
    <section id="user_dashboard">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Records</h1>

        <button className="bg-forest hover:bg-opacity-90 rounded-md duration-400 text-white py-2 px-4" onClick={() => {
          setShowCreateRecord(true);
        }}>
          Create New Record
        </button>
      </div>

      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>All (14)</li>
            <li>Newest (15)</li>
          </ul>
        </nav>

        <table className="w-full border-separate border-spacing-y-0">
          <thead>
            <tr>
              <th className="text-start py-4">Record Id</th>
              <th className="">Name</th>
              <th className="">Created on</th>
              <th className="">Contact</th>
              <th className="">Points</th>
              <th className="">Transactions</th>
            </tr>
          </thead>

          <tbody>
            {records.map(record => (
              <tr className="even:bg-white" key={record.id}>
                <td className="text-start py-2">{record._id}</td>
                <td className="text-center">{`${record.first_name} ${record.middle_name.charAt(0)}. ${record.last_name}`}</td>
                <td className="text-center">{record.created_at}</td>
                <td className="text-center">{record.contact_number}</td>
                <td className="text-center">{record.points}</td>
                <td className="text-center">[]</td>
              </tr>
            ))}
          </tbody>
        </table>

        <CreateRecord showCreateRecord={showCreateRecord} setShowCreateRecord={setShowCreateRecord} setRefetch={setRefetch} />
      </div>
    </section>
  );
};

export default UserDash;
