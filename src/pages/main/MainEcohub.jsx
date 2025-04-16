import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import useScrollTop from "../../utils/hooks/useScrollTop";

const MainEcohub = () => {
  
  useScrollTop();

  const [ recordData, setRecordData ] = useState(null);
  const [ formField, setFormField ] = useState({
    record_id: '',
    last_name: ''
  })

  const handleCheckRecord = async (e) => {
    e.preventDefault();

    const { record_id, last_name } = formField;

    if(!record_id || !last_name) {
      alert('Record ID and Last Name are required!');
      return;
    }

    try {
      const url = import.meta.env.VITE_API_URL;
      const response = await fetch(`${url}/records/${record_id}?last_name=${last_name}`);

      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setRecordData(data)
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className="bg-[url('/landing/ecohub_bg.png')] bg-cover bg-center text-white sm:justify-center md:justify-center relative">
      <div className="bg-black absolute top-0 right-0 left-0 bottom-0 opacity-30"></div>
      <div className="container mx-auto flex flex-col items-center text-center gap-5 py-10">
        <div className="left text-white relative">
          <h1 className="font-bold text-3xl mb-3 sm:text-5xl">
            Welcome to Basura Eco-Hub
          </h1>
          <p className="text-sm sm:text-xl md:text-xl px-4">
            Exchange your recyclables for points and help take care of the
            environment.
            <br className="hidden lg:block" />
            It's an easy way to give waste a new purpose while earning rewards.
          </p>
        </div>

        <div className="text-white p-4 shadow-lg md:p-20 flex flex-col items-center justify-center bg-white/20 backdrop-blur-md rounded-xl border border-white/30 relative max-w-[750px]">
          <h2 className="font-bold text-2xl mb-4 sm:text-3xl">
            Check Your Record Points Here
          </h2>

          <form onSubmit={handleCheckRecord} className="flex flex-col gap-4 w-full items-center">
            <input
              id="record_id"
              type="text"
              required
              placeholder="Enter your record ID"
              className="w-full border border-black rounded p-2 placeholder:text-black outline-none text-black"
              value={formField.record_id}
              onChange={(e) => {
                setFormField(prev => ({
                  ...prev,
                  record_id: e.target.value.trim()
                }))
              }}
            />

            <input
              id="last_name"
              type="text"
              required
              placeholder="Enter your last name"
              className="w-full border border-black rounded p-2 placeholder:text-black outline-none text-black"
              value={formField.last_name}
              onChange={(e) => {
                setFormField(prev => ({
                  ...prev,
                  last_name: e.target.value.trim()
                }))
              }}
            />

            <button className="bg-[#4a814e] text-white h-full rounded hover:bg-forest-hover duration-300 mt-4 font-bold text-base sm:text-lg sm:text-bold lg:text-xl px-10 py-1.5 sm:py-12 md:px-14 md:py-2" >
              Check Record
            </button>
          </form>
        </div>
      </div>

      {/* modal */}
      {recordData && (
        <div className="flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-[300px] -translate-y-1/2 bg-forest py-5 px-3 md:px-6 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Record info:</p>

            <button className="self-end" onClick={() => {
              setFormField({
                record_id: '',
                last_name: ''
              })
              setRecordData(null)
            }}>
              <IoIosClose className="font-bold text-4xl"/>
            </button>
          </div>

          <div>
            <p>Record ID: {recordData._id}</p>
            <p>Last Name: {recordData.last_name}</p>

            <p>Points: {recordData.points}</p>
          </div>
        </div>)
      }
    </main>
  );
};

export default MainEcohub;
