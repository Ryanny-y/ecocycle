import DashSideNav from "../common/admin/DashSideNav";
import DashHeader from "../common/admin/DashHeader";
import { Outlet, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { authContext } from "../../utils/contexts/AuthProvider";
import useAdminCheck from '../../utils/hooks/useAdminCheck';

const DashboardLayout = () => {

  useAdminCheck();

  return (
    <div
      className="grid h-svh"
      style={{
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <DashSideNav />

      <main className="py-2 px-3 flex flex-col gap-5 text-dark bg-light-1">
        <DashHeader />

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
