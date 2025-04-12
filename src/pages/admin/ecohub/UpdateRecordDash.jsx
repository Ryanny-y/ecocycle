import React, { useContext, useState } from "react";
import { authContext } from "../../../utils/contexts/AuthProvider";

const UpdateRecordDash = () => {
  const { accessToken } = useContext(authContext) 
  
  const [formField, setFormField] = useState({
    record_id: "",
    last_name: "",
    materials: [{
      material: '',
      weight: '',
      unit: '',
    }],
    points: 0
  });

  const handleField = (e) => {
    const { name, value } = e.target;

    setFormField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateRecord = (e) => {

  };

  return (
    <section className="flex flex-col gap-2">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">Update Record</h1>
      </div>

      <form 
        className="flex flex-col gap-3 items-start justify-start"
        onSubmit={handleUpdateRecord}
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

          <div className="flex flex-col items-center gap-3">
            <div className="grid grid-cols-4 gap-3 w-full">
              <p className="col-span-2">Material</p>
              <p>Weight</p>
              <p>Unit</p>
            </div>

            <div className="grid grid-cols-4 gap-3 w-full">
              <input
                type="number"
                name="materials.weight"
                placeholder="Weight"
                required
                className="p-2 bg-gray-1 w-14 md:w-20 shrink placeholder:text-gray-2 rounded-md"
                value={formField.materials.material}
                onChange={handleField}
              />
              <input
                type="text"
                name="materials.unit"
                placeholder="Contact Number (Optional)"
                className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md grow"
                value={formField.materials.material}
                onChange={handleField}
              />
            </div>
          </div>
            

          <input
            type="text"
            name="address"
            placeholder="Address (Optional)"
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.address}
            onChange={handleField}
          />
          <input
            type="number"
            name="points"
            placeholder="Initial Points"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.points}
            onChange={handleField}
          />
        </div>

        <button className="bg-forest self-center text-white py-2 px-5 rounded-md hover:bg-forest-hover">
          Create Record
        </button>
      </form>
    </section>
  )
};

export default UpdateRecordDash;
