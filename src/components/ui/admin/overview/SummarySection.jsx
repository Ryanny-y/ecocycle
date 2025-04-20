import { useMemo } from "react";
import useFetchData from "../../../../utils/hooks/useFetchData";
import { AiOutlineRise } from "react-icons/ai";


const SummarySection = ({ url }) => {
  
  const { data: recordData, loading: recordLoading, error: recordError } = useFetchData(`${url}/records`);
  const { data: rHistory, loading: rHistoryLoading, error: rHistoryError } = useFetchData(`${url}/history/recordLogs`)
  const { data: sHistory, loading: sHistoryLoading, error: sHistoryError } = useFetchData(`${url}/history/swapLogs`)
  const { data: products, loading: productsLoading, error: productsError } = useFetchData(`${url}/products`);

  const summaryValues = useMemo(() => {
    if (
      recordLoading || recordError ||
      rHistoryLoading || rHistoryError ||
      sHistoryLoading || sHistoryError
    ) return [];

    const totalRecords = recordData?.length || 0;
    const totalEarned = rHistory?.reduce((acc, cur) => acc + cur.points_earned, 0) || 0;
    const totalSwapped = sHistory?.reduce((acc, cur) => acc + cur.points_deducted, 0) || 0;
    const totalProducts = products?.length || 0;

    return [
      { title: "Total Records", value: totalRecords },
      { title: "Total Points Earned", value: totalEarned },
      { title: "Total Points Swapped", value: totalSwapped },
      { title: "Total Products", value: totalProducts }
    ];
  
  }, [
    recordData, recordLoading, recordError,
    rHistory, rHistoryLoading, rHistoryError,
    sHistory, sHistoryLoading, sHistoryError,
    products, productsLoading, productsError
  ]);

  return (
    <section id="summary" className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {summaryValues.length > 0 && 
        summaryValues.map(summary => (
          <div key={summary.title} id="summary_box" className="flex flex-col justify-between px-4 py-3 bg-[#268833] text-white min-h-[120px] rounded-md">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-sm md:text-base">{summary.title}</h1>
              <AiOutlineRise className="w-5 text-xl"/>
            </div>

            <div className="flex justify-between items-end">
              <h1 className="font-bold text-5xl">{summary.value}</h1>
            </div>
          </div>
        ))
      }
    </section>
  )
};

export default SummarySection;
