import { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [ userData, setUserData ] = useState(null);
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  const value = {
    userData, setUserData,
    isAuthenticated, setIsAuthenticated 
  }

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
