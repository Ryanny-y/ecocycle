import DashSideNav from "../components/common/admin/DashSideNav";
import DashHeader from "../components/common/admin/DashHeader";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import useAdminCheck from '../utils/hooks/useAdminCheck';

const AdminDashboard = () => {
  useAdminCheck();

  const [ mobileToggle, setMobileToggle ] = useState(false);
  const [ sideNavWidth, setSideNavWidth ] = useState('300px');
  
  const [ windowSize, setWindowSize ] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = (e) => {
      setWindowSize(window.innerWidth)      
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      console.log('unmounts');
      
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div
      className="flex flex-col lg:flex-row">
      <DashSideNav sideNavWidth={sideNavWidth}/>

      <main className={`py-2 px-3 ml-auto flex flex-col gap-5 text-dark bg-light-1 duration-500`} 
          style={{width: windowSize >= 1024  ? `calc(100% - ${sideNavWidth})` : '100%' }}
          >
        <DashHeader />

        <Outlet />
      </main>
    </div>

    // style={{ width: `calc(100% - ${sideNavWidth})`}}
  );
};

export default AdminDashboard;
