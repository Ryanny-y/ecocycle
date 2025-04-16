import { useContext, useEffect } from "react";
import { useLocation } from 'react-router';
import { GlobalContext } from "../contexts/GlobalProvider";


const useResetNav = () => {
  const { setMobileToggle } = useContext(GlobalContext);

  const location = useLocation();

  useEffect(() => {
    setMobileToggle(false);
  }, [location.pathname])

};

export default useResetNav;