import { useEffect, useState } from "react";
import useFetchData from "../../../utils/hooks/useFetchData";
import LineChart from "../../../components/ui/charts/LineChart";
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData);

const PointsEarnedGraph = ({ url }) => {
  
  const monthNames = dayjs.months(); // ["January", "February", ..., "December"]

  const { data, loading, error} = useFetchData(`${url}/records`);
  const [ recordData, setRecordData ] = useState();

  useEffect(() => {
    if(data && !loading && !error) {
      
      const datas = monthNames.map((month, index) => {
        const totalPoints = data.reduce((acc, record) => {
          const recordMonth = dayjs(record.created_at).month();
          return recordMonth === index ? acc + (record.points || 0) : 0;
        }, 0);
    
        return {
          month,
          totalPoints
        };
      })
      
      setRecordData(datas);
    }
  }, [data, loading, error])

  return recordData && <LineChart datas={recordData}/>
}

export default PointsEarnedGraph;
