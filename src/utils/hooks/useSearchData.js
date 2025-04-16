import { useEffect, useRef } from "react";

const useSearchData = (datas, dataSetter, searchTerm, filterFn) => {
  const debounceTimeOut = useRef(null);

  useEffect(() => {
    if(!datas) return;

    if(debounceTimeOut.current) {
      clearTimeout(debounceTimeOut.current);
    }

    debounceTimeOut.current = setTimeout(() => {
      const value = searchTerm.toLowerCase();

      if(!value) {
        dataSetter(datas);
      } else {
        const fitleredData = datas.filter(data => filterFn(data, value))
        dataSetter(fitleredData)
      }
    }, 300);

    return () => {
      clearTimeout(debounceTimeOut.current);
    }
  }, [datas, searchTerm, dataSetter, filterFn]);

};

export default useSearchData;
