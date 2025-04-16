import { useEffect, useRef, useState } from "react";
import useFetchData from "../../../utils/hooks/useFetchData";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import formatName from '../../../utils/helpers/formatName'
import useResetNav from "../../../utils/hooks/useResetNav";

dayjs.extend(utc)
dayjs.extend(timezone)

const RecordDash = () => { 

  useResetNav();

  const [records, setRecords] = useState([]);
  const [ newRecords, setNewRecord ] = useState([]);

  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/records`);
  
  useEffect(() => {
    if (data && !loading && !error) {
      setRecords(data);
      setNewRecord(data.filter(record => dayjs(record.created_at).isSame(dayjs(), 'day')));
    }
  }, [data, loading, error]);


  const [searchTerm, setSearchTerm] = useState('');
  const debounceTimeOut = useRef(null);
  // DEBOUNCING
  useEffect(() => {
    if(!data) return;

    if(debounceTimeOut.current) {
      clearTimeout(debounceTimeOut.current);
    }

    debounceTimeOut.current = setTimeout(() => {
      const value = searchTerm.toLowerCase();

      if(!value) {
        setRecords(data);
      } else {
        const records = data.filter(record => {
          const fullname = `${record.first_name} ${record.middle_name} ${record.last_name}`.toLowerCase();
          
          const foundByName = fullname.includes(value);
          return foundByName || record._id.toLowerCase().includes(value);
        })
        setRecords(records)
      }
    }, 300);

    return () => {
      clearTimeout(debounceTimeOut.current);
    }
  }, [data, searchTerm])

  return (
    <section id="record_dashboard">
      <div className="flex flex-col items-start gap-5 md:gap-20 sm:flex-row sm:items-center sm:justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Records</h1>

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
                <th className="px-2 text-nowrap">Points</th>
                <th className="px-2 text-nowrap">Age</th>
                <th className="px-2 text-nowrap">Contact</th>
                <th className="px-2 text-nowrap">Address</th>
                <th className="px-2 text-nowrap">Created At</th>
              </tr>
            </thead>

            <tbody>
              {records.map((record) => (
                <tr className="even:bg-white" key={record._id}>
                  <td className="text-start py-2 px-2 text-nowrap">{record._id}</td>
                  <td className="text-center px-2 text-nowrap">{`${formatName(record)}`}</td>
                  <td className="text-center px-2 text-nowrap">{record.points}</td>
                  <td className="text-center px-2 text-nowrap">{record.age}</td>
                  <td className="text-center px-2 text-nowrap">{record.contact_number}</td>
                  <td className="text-center px-2 text-nowrap">{record.address}</td>
                  <td className="text-center px-2 text-nowrap">{dayjs(record?.created_at).tz('Asia/Manila').format('YYYY/MMM/DD HH:mm:ss')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RecordDash;
