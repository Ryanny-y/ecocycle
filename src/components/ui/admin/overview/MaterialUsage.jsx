import { useEffect, useState } from "react";
import useFetchData from "../../../../utils/hooks/useFetchData";
import PieChart from "../../charts/PieChart";

const MaterialUsage = ({ url }) => {

  const [ materialData, setMaterialData ] = useState([]); 
  const { data, loading, error } = useFetchData(`${url}/history/recordLogs`);

  useEffect(() => {
    if(data && !loading && !error) {
      
      const allValues = data.
        flatMap(record => record.materials.filter(mat => mat.weight > 0))
        .reduce((acc, mat) => {
          const { name } = mat.material;
          acc[name] = (acc[name] || 0) + 1;
          return acc;
        }, {});
      ;

      const materialNames = Object.keys(allValues);
      const materialValues = Object.values(allValues);
      
      setMaterialData([materialNames, materialValues])
    }
  }, [data, loading, error])

  return materialData.length > 0 && <PieChart labels={materialData[0]} dataTitle="Points" title="Frequent Material Used to Earn Points" dataVal={materialData[1]}/>
};

export default MaterialUsage;
