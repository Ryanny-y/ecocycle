import DashSideNav from "../components/common/admin/DashSideNav";
import DashHeader from "../components/common/admin/DashHeader";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import useAdminCheck from '../utils/hooks/useAdminCheck';

const AdminDashboard = () => {
  useAdminCheck();

  const [ mobileToggle, setMobileToggle ] = useState(false);
  
  const [ windowSize, setWindowSize ] = useState(window.innerWidth);

  useEffect(() => {
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

      <main className={`ml-auto flex flex-col text-dark bg-light-1 duration-500`} 
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

export default AdminDashboard;
