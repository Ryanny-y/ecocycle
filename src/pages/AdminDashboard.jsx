import DashboardLayout from "../components/layout/DashboardLayout";
import MaterialProvider from "../utils/contexts/MaterialProvider";
import GlobalProvider from "../utils/contexts/GlobalProvider";

const AdminDashboard = () => {
  

  return (
    <MaterialProvider>
      <GlobalProvider>
        <DashboardLayout />
      </GlobalProvider>
    </MaterialProvider>
  );
};

export default AdminDashboard;
