import { createContext, useState } from "react";

export const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

  const [ recordData, setRecordData ] = useState(null);

  const [ mobileToggle, setMobileToggle ] = useState(false);


  const value = {
    recordData, setRecordData,
    mobileToggle, setMobileToggle
  }

  return (
    <GlobalContext.Provider value={value}>
      { children }
    </GlobalContext.Provider>
  )
};

export default GlobalProvider;
