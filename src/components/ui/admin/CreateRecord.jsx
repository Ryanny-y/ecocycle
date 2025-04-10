import { useContext, useState } from "react";
import { authContext } from "../../../utils/contexts/AuthProvider";

const CreateRecord = ({ showCreateRecord, setShowCreateRecord, setRefetch }) => {

  const { accessToken } = useContext(authContext);
  const [ recordData, setRecordData ] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    contact_number: '',
    points: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecordData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    showCreateRecord && (
      <div
        className="bg-white bg-opacity-30 rounded-lg backdrop-blur-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 shadow-2xl w-full md:w-700"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl">Create Record</h1>
          <button onClick={() => setShowCreateRecord(false)}>
            <box-icon name="x" size="md"></box-icon>
          </button>
        </div>

        <form className="flex flex-col gap-4 items-start" onSubmit={async (e) => {
          e.preventDefault();
          const { first_name, middle_name, last_name, points } = recordData;
          
          const convertedPoints = Number(points);

          if(!first_name || !middle_name || !last_name || !points) {
            alert('All Fields are Required');
            return;
          }

          if(!convertedPoints) {
            alert('Invalid Points Input');
            return;
          }

          try {
            const url = import.meta.env.VITE_API_URL;
            
            const response = await fetch(`${url}/records`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${accessToken}`
              },
              body: JSON.stringify({
                ...recordData,
                points: convertedPoints
              }),
              credentials: "include"
            })
            
            if(!response.ok) {
              throw response;
            }
            
            const data = await response.json();
            setRefetch(prev => !prev)
            setRecordData({
              first_name: '',
              middle_name: '',
              last_name: '',
              contact_number: '',
              points: ''
            })
            alert(data.message);
            
          } catch (error) {
            console.log(error.status);
            
            alert(error.message)
          }
        }}>
          <p>Enter Information</p>

          <div className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                value={recordData.first_name}
                onChange={handleChange}
                className="border border-gray-200 bg-white shadow-md outline-none py-1 px-2 flex-1 md:max-w-48"
              />
              <input
                type="text"
                id="middle_name"
                name="middle_name"
                placeholder="Middle Name"
                value={recordData.middle_name}
                onChange={handleChange}
                className="border border-gray-200 bg-white shadow-md outline-none py-1 px-2 flex-1 md:max-w-48"
              />
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                value={recordData.last_name}
                onChange={handleChange}
                className="border border-gray-200 bg-white shadow-md outline-none py-1 px-2 flex-1 md:max-w-48"
              />
            </div>

            {/* Contact and Points */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <input
                type="text"
                id="contact_number"
                name="contact_number"
                placeholder="Contact Number"
                value={recordData.contact_number}
                onChange={handleChange}
                className="border border-gray-200 bg-white shadow-md outline-none py-1 px-2 flex-1"
              />

              <input
                type="text"
                id="initial_points"
                name="points"
                placeholder="initial_points"
                value={recordData.points}
                onChange={handleChange}
                className="border border-gray-200 bg-white shadow-md outline-none py-1 px-2 flex-1"
              />
            </div>
          </div>

          <button className="bg-forest text-white py-1.5 px-4 rounded-md hover:bg-opacity-90 duration-200">Create Record</button>
        </form>
      </div>
    )
  );
};

export default CreateRecord;
