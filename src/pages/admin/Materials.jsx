import { useEffect, useState } from "react";
import useFetchData from "../../utils/hooks/useFetchData";
import useResetNav from "../../utils/hooks/useResetNav";
import AddMaterial from "../../components/ui/admin/AddMaterial";

const Materials = () => {

  useResetNav();
  const [ materials, setMaterials ] = useState([]);
  const [ refetch, setRefetch ] = useState(false);

  const url = import.meta.env.VITE_API_URL;
  const { data, error, loading } = useFetchData(`${url}/materials`, refetch);

  useEffect(() => {
    if(data && !error && !loading) {
      console.log(data);
      
      setMaterials(data);
    }
  }, [data, loading, error]);

  const [ showAddMaterial, setShowAddMaterial ] = useState(false);

  return (
    <main id="user_dashboard">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Materials</h1>

        <button
          className="bg-forest hover:bg-opacity-90 rounded-md duration-400 text-white py-2 px-4"
          onClick={() => setShowAddMaterial(true)}
        >
          Add Material
        </button>
      </div>

      <section>
        <nav>
          <ul className="flex items-center gap-4">
            <li>All (<span className="font-semibold text-forest">{materials.length}</span>)</li>
          </ul>
        </nav>

        <div className="overflow-x-auto" id="materials_table">
          <table className="materials_table w-full border-spacing-y-3 border-separate text-nowrap">
            <thead className="bg-gray-100 text-sm md:text-md font-semibold">
              <tr>
                <th className="text-start py-4 px-2 text-nowrap">Product Id</th>
                <th className="px-2 text-nowrap text-start">Name</th>
                <th className="px-2 text-nowrap">Points Per Kilogram</th>
              </tr>
            </thead>

            <tbody>
              {materials.map((material) => (
                <tr className="even:bg-white" key={material._id}>
                <td className="text-start py-2 px-2 text-nowrap">{material._id}</td>
                <td className="text-center py-2 px-2 text-nowrap">
                  <div className="flex items-center gap-2 min-w-[150px] max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <img src={`${url}/images/${material.image}`} alt="material Img" className="h-7 w-7" />
                    <span className="truncate">{material.name}</span>
                  </div>
                </td>
                <td className="text-center px-2 text-nowrap truncate max-w-[300px]">{material.points_per_kg}</td>
              </tr>
              
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {showAddMaterial && <AddMaterial setShowAddMaterial={setShowAddMaterial} setRefetch={setRefetch}/>}
    </main>
  )
};

export default Materials;
