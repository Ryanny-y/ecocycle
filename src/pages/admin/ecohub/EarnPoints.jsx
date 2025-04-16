import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../utils/contexts/AuthProvider";
import { MaterialContext } from '../../../utils/contexts/MaterialProvider';
import useResetNav from "../../../utils/hooks/useResetNav";
import { GlobalContext } from "../../../utils/contexts/GlobalProvider";
import Modal from '../../../components/ui/admin/Modal';

const EarnPoints = () => {

  useResetNav();

  const { accessToken } = useContext(authContext);
  const { globalRecordData } = useContext(GlobalContext);
  
  const { materials } = useContext(MaterialContext);
  const [ openModal, setOpenModal ] = useState(false);
  const [ responseData, setResponseData ] = useState(null);
  
  const [formField, setFormField] = useState({
    record_id: globalRecordData?.record_id || "",
    last_name: globalRecordData?.last_name || "",
    materials: [],
    points: 0
  });

  useEffect(() => {
    if(materials.length > 0) {
      const updatedMaterials = materials.map(material => ({
        id: material._id,
        material: material.name,
        weight: 0
      }));

      setFormField(prev => ({
        ...prev,
        materials: updatedMaterials
      }))
    }
  }, [materials])

  const handleField = (e) => {
    const { name, value } = e.target;

    setFormField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMaterialChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMaterials = [...formField.materials];
  
    updatedMaterials[index][name] = name === "weight"
    ? value === "" ? "" : Number(value)
    : value
    
    if(name === 'weight' && value < 0) {
      alert('Invalid Weight');
      return;
    }

    const newTotal = updatedMaterials
    .map(material => {
      const matchingMaterial = materials.find(mat => mat._id === material.id);
      return (material.weight > 0 && matchingMaterial)
        ? material.weight * matchingMaterial.points_per_kg
        : 0;
    })
    .reduce((acc, cur) => acc + cur , 0);

    setFormField((prev) => ({
      ...prev,
      materials: updatedMaterials,
      points: newTotal
    }));
  };

  const handleUpdateRecord = async (e) => {
    e.preventDefault();

    if(!formField.record_id || !formField.last_name) {
      alert('Record ID and Last Name are required!');
      return;
    }

    const reqBody = {
      record_id: formField.record_id.trim(),
      last_name: formField.last_name.trim(),
      points: Number(formField.points),
      materials: formField.materials.map(mat => ({ material: mat.id, weight: mat.weight }))
    }

    try {
      const url = import.meta.env.VITE_API_URL;
      const response = await fetch(`${url}/records/${formField.record_id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': "application/json; charset=utf-8",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(reqBody),
        credentials: "include"
      })
      
      if(!response.ok) {
        throw new Error(response.status + response.statusText);
      }

      const data = await response.json();
      setFormField((prev) => ({
        ...prev,
        record_id: "",
        last_name: "",
        points: 0
      }));
      
      setOpenModal(true);
      setResponseData(data);
    } catch (error) {
      alert(error);
    }
  };  

  return (
    <section className="flex flex-col gap-2">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">Earn Points</h1>
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
            <div className="grid grid-cols-4 items-center gap-3 w-full font-bold">
              <p className="col-span-2">Material</p>
              <p>Weight</p>
              <p>Unit</p>
            </div>

            {formField.materials.map((mat, index) => (
              <div className="grid items-center grid-cols-4 gap-3 w-full" key={mat.id}>
                <input
                  type="text"
                  name="material"
                  disabled
                  placeholder={mat.material}
                  required
                  className="p-2 col-span-2 bg-gray-1 shrink placeholder:text-gray-2 rounded-md"
                  value={mat.material}
                  onChange={(e) => handleMaterialChange(index, e)}
                />

                <input
                  type="number"
                  name="weight"
                  placeholder={mat.weight}
                  className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md grow"
                  value={mat.weight}
                  onChange={(e) => handleMaterialChange(index, e)}
                />
                
                <p className="font-semibold">Kilogram</p>
              </div>))
            }
            
          </div>
          
          <div className="grid grid-cols-4 gap-3 text-xl font-semibold">
            <p className="col-span-3 ">Total Points</p>

            <p>{formField.points}</p>
          </div>
        </div>

        <button className="bg-forest self-center text-white py-2 px-5 rounded-md hover:bg-forest-hover">
          Confirm
        </button>
      </form>

      <Modal 
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Earn Points"
        content={
          <>
            <p>Record: {responseData?.last_name} ({responseData?.record_id}) earned {responseData?.earned_points} points</p>
            <p className="font-semibold">Current Points: {responseData?.current_points}</p>
          </>
        }
        proceedText="Swap Product"
        proceedHref="/admin/ecoswap"
      />
    </section>
  )
};

export default EarnPoints;
