import { useContext } from "react";
import { authContext } from "../../utils/contexts/AuthProvider";

const Logout = ({ moreClass }) => {

  const { setUserData, setAccessToken, setIsAuthenticated } = useContext(authContext);
  

  const url = import.meta.env.VITE_API_URL;
  const handleLogout = async () => {
    try {
      const response = await fetch(`${url}/logout`, {
        method: 'GET',
        credentials: 'include'
      });

      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      setUserData(null);
      setAccessToken('');
      setIsAuthenticated(false)
    } catch (error) {
      alert(error)
    }
  }


  return <button className={`py-2 px-5  bg-forest text-white rounded-lg hover:bg-forest-hover duration-200 active:bg-white active:text-forest active:border active:border-forest ${moreClass}`} onClick={handleLogout}>Logout</button>
};

export default Logout;
