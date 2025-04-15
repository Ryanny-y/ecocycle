import { useContext, useState } from "react";
import { authContext } from '../../../utils/contexts/AuthProvider';

const CreateRecordDash = () => {

  const { accessToken } = useContext(authContext) 

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
      alert(data.message);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section className="flex flex-col gap-2">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">Create Record</h1>
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
              value={formField.age}
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
        </div>

        <button className="bg-forest self-center text-white py-2 px-5 rounded-md hover:bg-forest-hover">
          Create Record
        </button>
      </form>
    </section>
  );
};

export default CreateRecordDash;
