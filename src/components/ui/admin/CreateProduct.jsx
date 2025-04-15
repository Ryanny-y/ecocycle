import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { authContext } from "../../../utils/contexts/AuthProvider";

const CreateProduct = ({ setShowCreateProduct, setRefetch }) => {
  const [showCategories, setShowCategories] = useState(false);
  const { accessToken } = useContext(authContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    required_points: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, category, required_points } = formData;
    
    if( !name || !description || !category || !required_points) {
      alert("All Fields Are Required");
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('required_points', formData.required_points);
    data.append('file', file);

    try {
      const url = import.meta.env.VITE_API_URL;
      const response = await fetch(`${url}/products`, {
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
        onClick={() => setShowCreateProduct(false)}
      />

      <div>
        <h1 className="font-bold text-2xl tracking-wide text-center">
          Create New Product
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

          <textarea
            name="description"
            id="description"
            placeholder="Description"
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md outline-none"
            required
            rows={3}
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <div className="category_wrapper">
            <button 
              type="button"
              className="bg-gray-1 px-2 py-1 w-full cursor-pointer flex items-center justify-between mb-1"
              onClick={() => setShowCategories((prev) => !prev)}
            >
              <span>{!formData.category ? 'Category' : `${formData.category.charAt(0).toUpperCase()}${formData.category.slice(1)}`}</span>
              {showCategories ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div
              className="relative w-full grid duration-200"
              style={{ gridTemplateRows: showCategories ? "1fr" : "0fr" }}
            >
              <div className="flex flex-col overflow-hidden">
                <button type="button" className="text-start px-2 py-1 bg-gray-1 hover:bg-forest hover:text-white duration-200" onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    category: 'agriculture'
                  }))
                }}>
                  Agriculture
                </button>
                <button type="button" className="text-start px-2 py-1 bg-gray-1 hover:bg-forest hover:text-white duration-200" onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    category: 'non_agriculture'
                  }))
                }}>
                  Non Agriculture
                </button>
              </div>
            </div>
          </div>

          <input
            type="number"
            name="required_points"
            placeholder="Required Points"
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formData.required_points}
            onChange={handleChange}
          />

          <input type="file" accept="image/*" onChange={(e) => {
            setFile(e.target.files[0]);
          }} />
        </div>

        <button className="bg-forest self-center text-white py-2 px-5 rounded-md hover:bg-forest-hover">
          Create Prouct
        </button>
      </form>
    </section>
  );
};

export default CreateProduct;
