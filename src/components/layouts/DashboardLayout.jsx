import DashSideNav from "../common/admin/DashSideNav";
import DashHeader from "../common/admin/DashHeader";
import { Outlet, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../utils/contexts/AuthProvider";
import useAdminCheck from '../../utils/hooks/useAdminCheck';

const DashboardLayout = () => {

  useAdminCheck();
  const [ sideNavWidth, setSideNavWidth ] = useState('11rem');
  
  // EFFECT FOR RESIZING AND CHANGING SIDENAV WIDTH
  useEffect(() => {
    const changeWidth = () => {
      if(window.innerWidth < 640) {
        setSideNavWidth('5rem')
      } else {
        setSideNavWidth('11rem')
      }
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, []);

  return (
    <div
      className="flex">
      <DashSideNav sideNavWidth={sideNavWidth}/>

      <main className="py-2 px-3 flex flex-col gap-5 text-dark bg-light-1 duration-500" style={{width: `calc(100% - ${sideNavWidth})`}}>
        <DashHeader />

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
