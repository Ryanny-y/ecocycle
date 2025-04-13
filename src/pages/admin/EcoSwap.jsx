import { useContext, useState } from "react";
import { ProductContext } from "../../utils/contexts/ProductProvider";
import { authContext } from "../../utils/contexts/AuthProvider";
import formatName from '../../utils/formatters/formatName';

const EcoSwap = () => {

  const { accessToken } = useContext(authContext);
  const [ recordData, setRecordData] = useState(null);
  const { products } = useContext(ProductContext);
  const [ formField, setFormField ] = useState({
    record_id: '',
    last_name: ''
  });

  const handleFindRecord = async (e) => {
    e.preventDefault();

    const { record_id, last_name } = formField;

    if(!record_id || !last_name) {
      alert('Record Id and Last Name are required!');
      return;
    }

    try {
      const url = import.meta.env.VITE_API_URL;
      const response = await fetch(`${url}/records/${record_id}?last_name=${last_name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${accessToken}`
        },
        credentials: 'include'
      });

      

      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setRecordData(data);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section className="flex flex-col gap-3">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">Swap Items</h1>
      </div>

      <form 
        className="flex flex-col gap-3 items-start justify-start"
        onSubmit={handleFindRecord}
      >
        <p>Enter informations</p>

        <div className="flex flex-col gap-5 w-full">
          <input
            type="text"
            name="record_id"
            placeholder="Record ID"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.record_id}
            onChange={(e) => {
              setFormField(prev => ({
                ...prev,
                record_id: e.target.value
              }))
            }}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.last_name}
            onChange={(e) => {
              setFormField(prev => ({
                ...prev,
                last_name: e.target.value
              }))
            }}
          />
        </div>

        <button className="bg-forest text-white py-2 w-3/5 px-3 self-center sm:self-start sm:w-2/5 sm:max-w-44 rounded-md hover:bg-forest-hover">
          Find Record
        </button>
      </form>
      
      {recordData && <div className="flex flex-col gap-5">
        <div id="record_information" className="px-5 py-8 bg-white rounded-md shadow-lg sm:self-start">
          <h1 className="font-bold text-xl mb-3">Record Information</h1>

          <section className="flex flex-col sm:flex-row justify-between sm:justify-start items-start gap-5 sm:gap-20">
            <div className="flex flex-col gap-1 font-medium">
              <p>Record ID: <span>{recordData?._id}</span></p>
              <p>Name: <span>{formatName(recordData)}</span></p>
              <p>Address: <span>{recordData?.address}</span></p>
              <p>Contact: <span>{recordData?.contact}</span></p>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto text-white bg-forest rounded-md p-3 items-center">
              <p>Available Points:</p>
              <p className="font-bold">{recordData.points}</p>
            </div>
          </section>
        </div>

        <button className="bg-forest text-white py-2 w-3/5 px-3 self-center sm:self-start sm:w-2/5 sm:max-w-44 rounded-md hover:bg-forest-hover">Confirm Record</button>
      </div>}


    </section>
  )
};

export default EcoSwap;
