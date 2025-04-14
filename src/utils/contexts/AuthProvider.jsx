import { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [ userData, setUserData ] = useState(null);
  const [ accessToken, setAccessToken ] = useState('');
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  
  const url = import.meta.env.VITE_API_URL;
  useEffect(() => {
    if(!accessToken) return;

    const decoded = jwtDecode(accessToken);
    const exp = decoded.exp * 1000;
    const now = dayjs();
    const timeout = exp - now - 10000;

    console.log(timeout);
    
    if(timeout > 0) {
      const timer = setTimeout(refreshToken, timeout);
      console.log('Start Timer');
      
      return () => clearTimeout(timer);
    } else {
      console.log('Start Refresh')
      refreshToken();
    }
  }, [accessToken, userData])

  const refreshToken = async () => {
    try {
      const res = await fetch(`${url}/refresh`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to refresh token");

      const data = await res.json();
      console.log(data);
      setAccessToken(data.accessToken);
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Auto refresh failed", err);
      setAccessToken('');
      setIsAuthenticated(false);
      setUserData(null);
    }
  };

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
