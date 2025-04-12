import DashSideNav from "../common/admin/DashSideNav";
import DashHeader from "../common/admin/DashHeader";
import { Outlet } from "react-router";
import { useContext, useEffect, useState } from "react";
import useAdminCheck from '../../utils/hooks/useAdminCheck';
import { MaterialContext } from "../../utils/contexts/MaterialProvider";

const DashboardLayout = () => {
  useAdminCheck();

  const [ windowSize, setWindowSize ] = useState(window.innerWidth);

  const { materials } = useContext(MaterialContext);
    

  useEffect(() => {
    document.body.style.backgroundColor = '#eeeeee';

    const handleWindowResize = (e) => {
      setWindowSize(window.innerWidth)      
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div
      className="flex flex-col lg:flex-row">
      <DashSideNav/>

      <main className={`ml-auto flex flex-col text-dark  duration-500`} 
          style={{width: windowSize >= 1024  ? `calc(100% - 300px)` : '100%' }}
          >
        <DashHeader />
        
        <div className="p-5">
          <Outlet />
        </div>
      </main>
    </div>

  );
};

export default DashboardLayout;
