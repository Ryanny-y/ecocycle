import { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [ userData, setUserData ] = useState(null);
  const [ accessToken, setAccessToken ] = useState('');
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  useEffect(() => {
    if(accessToken) {
      const decoded = jwtDecode(accessToken);
      const exp = decoded.exp * 1000; // convert to ms
      const now = Date.now();
      const timeout = exp - now - 10000; // refresh 10 seconds before expiration

      console.log(new Date(decoded.exp * 1000));
      console.log(timeout);
      
      if (timeout > 0) {
        const timer = setTimeout(refreshToken, timeout);

        console.log('Start Timer');
        
        return () => clearTimeout(timer);
      } else {
        console.log('Start Refresh');
        refreshToken();
      }
    }
  }, [accessToken]);

  const refreshToken = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const res = await fetch(`${url}/refresh`, {
        method: "GET",
        credentials: "include", // use cookies
      });

      if (!res.ok) throw new Error("Failed to refresh token");

      const data = await res.json();
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
