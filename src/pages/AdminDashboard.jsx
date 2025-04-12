import DashboardLayout from "../components/layout/DashBoardLayout";
import MaterialProvider from "../utils/contexts/MaterialProvider";

const AdminDashboard = () => {
  

  return (
    <MaterialProvider>
      <DashboardLayout />
    </MaterialProvider>
  );
};

export default AdminDashboard;
