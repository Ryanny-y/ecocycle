import { createContext, useEffect, useState } from "react"
import useFetchUser from "../hooks/useFetchUser";
import { useNavigate } from "react-router";

export const UserContext = createContext({
  id: 0,
  username: '',
  email: ''
});

export default function UserContextProvider({ children }) {
  const { data, error, isLoading } = useFetchUser(2);
  const [ userData, setUserData ] = useState(null);


  useEffect(() => {
    
    if(data && !isLoading && !error) {
      setUserData(data);
    }
  }, [data, isLoading, error])


  return (
    <UserContext.Provider value={{ ...userData, setUserData }}>
      <div>
        {(isLoading ) ? 'Loading' : children}
      </div>
    </UserContext.Provider>
  )
};