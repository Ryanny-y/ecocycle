import DashboardLayout from "../components/layout/DashboardLayout";
import MaterialProvider from "../utils/contexts/MaterialProvider";

const AdminDashboard = () => {
  

  return (
    <MaterialProvider>
      <DashboardLayout />
    </MaterialProvider>
  );
};

export default AdminDashboard;
