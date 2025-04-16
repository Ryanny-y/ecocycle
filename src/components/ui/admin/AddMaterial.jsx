import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { authContext } from "../../../utils/contexts/AuthProvider";

const AddMaterial = ({ setShowAddMaterial, setRefetch }) => {
  const [showCategories, setShowCategories] = useState(false);
  const { accessToken } = useContext(authContext);
  const [formData, setFormData] = useState({
    name: "",
    points_per_kg: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name } = formData;
    
    if(!name) {
      alert("Name Fields Is Required");
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('points_per_kg', formData.points_per_kg);
    data.append('file', file);

    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    
    try {
      const url = import.meta.env.VITE_API_URL;
      const response = await fetch(`${url}/materials`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: data,
      });

      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }

      const result = await response.json();
      setRefetch(prev => !prev);
      alert(result.message)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-2 z-50 rounded-lg shadow-xl shadow-gray-400 backdrop-blur-md border border-white/50 bg-white/40 p-10 w-full max-w-[600px]">
      <IoClose
        className="absolute top-5 right-5 text-3xl hover:text-forest duration-200 text-black"
        onClick={() => setShowAddMaterial(false)}
      />

      <div>
        <h1 className="font-bold text-2xl tracking-wide text-center">
          Add New Product
        </h1>
      </div>

      <form
        className="flex flex-col gap-3 items-start justify-start"
        onSubmit={handleSubmit}
      >
        <p className="text-center">Enter informations</p>

        <div className="flex flex-col gap-5 w-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="points_per_kg"
            placeholder="Points Per Kg"
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formData.points_per_kg}
            onChange={handleChange}
          />

          <input type="file" accept="image/*" onChange={(e) => {
            setFile(e.target.files[0]);
          }} />
        </div>

        <button className="bg-forest self-center text-white py-2 px-5 rounded-md hover:bg-forest-hover">
          Add Material
        </button>
      </form>
    </section>
  );
};

export default AddMaterial;
