import { createContext, useState } from "react";

export const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

  const [ globalRecordData, setGlobalRecordData ] = useState(null);
  const [ mobileToggle, setMobileToggle ] = useState(false);


  const value = {
    globalRecordData, setGlobalRecordData,
    mobileToggle, setMobileToggle
  }

  return (
    <GlobalContext.Provider value={value}>
      { children }
    </GlobalContext.Provider>
  )
};

export default GlobalProvider;
