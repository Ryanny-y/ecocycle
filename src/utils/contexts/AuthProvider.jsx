import { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [ userData, setUserData ] = useState(null);
  const [ accessToken, setAccessToken ] = useState('');
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  
  useEffect(() => {
    if(!accessToken) return;

    const decoded = jwtDecode(accessToken);
    const exp = decoded.exp * 1000;
    const expDate = dayjs(exp).utc().format('YYYY/MM/DD HH:MM:ss');
    console.log(expDate);
    

  }, [accessToken, userData])

  const value = {
    userData, setUserData,
    accessToken, setAccessToken,
    isAuthenticated, setIsAuthenticated,
  }

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
