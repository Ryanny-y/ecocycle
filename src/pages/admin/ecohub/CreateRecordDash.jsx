import { useContext, useEffect, useRef, useState } from "react";
import { authContext } from '../../../utils/contexts/AuthProvider';
import { FaCamera } from "react-icons/fa";
import useResetNav from "../../../utils/hooks/useResetNav";
import Modal from "../../../components/ui/admin/Modal";

const CreateRecordDash = () => {

  useResetNav();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [ takePhoto, setTakePhoto ] = useState(false);
  const [ hasCapturedImg, setHasCapturedImg ] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if(videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        console.log('Error Accessing Camera: ');
      });
  }, []);

  const handleCapture = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 300, 200);
    setHasCapturedImg(true);
    const imageData = canvasRef.current.toDataURL('image/png');
  }

  const [ openModal, setOpenModal ] = useState(false);
  const [ responseData, setResponseData ] = useState(null);

  const { accessToken } = useContext(authContext);

  const [formField, setFormField] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    age: 0,
    contact_number: "",
    address: "",
  });

  const handleField = (e) => {
    const { name, value } = e.target;

    setFormField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateRecord = async (e) => {
    e.preventDefault();

    const trimmedData = {
      first_name: formField.first_name.trim(),
      middle_name: formField.middle_name.trim(),
      last_name: formField.last_name.trim(),
      age: Number(formField.age),
      contact_number: formField.contact_number.trim(),
      address: formField.address.trim(),
    };

    const { first_name, middle_name, last_name, age, contact_number, address } = formField;

    if(!first_name || !middle_name || !last_name || !age) {
      alert('All Fields Are Required');
      return;
    }

    if(formField.age < 0) {
      alert('Invalid Age');
      return;
    }

    if(contact_number && contact_number.length !== 11) {
      alert('Invalid Contact Number');
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
        body: JSON.stringify(trimmedData),
        credentials: "include"
      })

      if(!response.ok) {
        if(response.status === 409) {
          throw new Error(`Record ${first_name} ${middle_name} ${last_name} Already Exists`);
        } 
        throw new Error(response.status + " " + response.statusText);
      }

      const data = await response.json();
      setFormField({
        first_name: "",
        middle_name: "",
        last_name: "",
        age: 0,
        contact_number: "",
        address: "",
      });
      setOpenModal(true);
      setResponseData({record_id: data.record_id, last_name: last_name});
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section className="flex flex-col gap-2">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">Create New Record</h1>
      </div>

      <form 
        className="flex flex-col gap-3 items-start justify-start"
        onSubmit={handleCreateRecord}
      >
        <p>Enter informations</p>

        <div className="flex flex-col gap-5 w-full">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.first_name}
            onChange={handleField}
          />
          <input
            type="text"
            name="middle_name"
            placeholder="Middle Name"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.middle_name}
            onChange={handleField}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.last_name}
            onChange={handleField}
          />

          <div className="flex items-center gap-3">
            <input
              type="number"
              name="age"
              min='0'
              placeholder="Age"
              required
              className="p-2 bg-gray-1 w-14 md:w-20 shrink placeholder:text-gray-2 rounded-md"
              value={formField.age == 0 ? '' : formField.age}
              onChange={handleField}
            />
            <input
              type="text"
              name="contact_number"
              placeholder="Contact Number (Optional)"
              className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md grow"
              value={formField.contact_number}
              onChange={handleField}
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address (Optional)"
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.address}
            onChange={handleField}
          />

          <p className="text-xs md:text-sm">By submitting this form, you agree that your personal information will be collected and used in accordance with the Data Privacy Act (Republic Act No. 10173)</p>

          <div id="photo_capture" className="flex flex-col gap-3 items-start justify-center">
            <button type="button" className="bg-forest text-white py-2 px-5 rounded-md hover:bg-forest-hover" onClick={() => setTakePhoto(prev => !prev)}>Take Photo</button>

            <div className={`${takePhoto ? 'flex' : 'hidden'} flex-col md:flex-row gap-3`}>
              <div className="vid_wrapper relative">
                <video 
                  ref={videoRef} 
                  className="border border-black max-w-[300px]" 
                  // width={300} 
                  // height={300} 
                  autoPlay
                ></video>

                <button type="button" onClick={handleCapture} className="bg-forest absolute bottom-3 left-1/2 -translate-x-1/2 text-white p-3 hover:bg-forest-hover rounded-full">
                  <FaCamera className="text-white text-lg"/>
                </button>
              </div>
          
            
              <canvas 
                ref={canvasRef} 
                className={`border border-black ${hasCapturedImg ? 'block' : 'hidden'} max-w-[300px]`} 
                height={200}
              />
            </div>
          </div>
        </div>

        <button className="bg-forest self-center text-white py-2 px-5 rounded-md hover:bg-forest-hover">
          Create Record
        </button>
      </form>

      <Modal 
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title='New Record Created'
        content={
          <>
            <p>Record ID: {responseData?.record_id}</p>
            <p>Last Name: {responseData?.last_name}</p>
          </>
        }
        proceedText="Earn Points"
        proceedHref="/admin/ecohub/earn_points"
      />
    </section>
  );
};

export default CreateRecordDash;
