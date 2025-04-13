import DashboardLayout from "../components/layout/DashboardLayout";
import MaterialProvider from "../utils/contexts/MaterialProvider";
import ProductProvider from "../utils/contexts/ProductProvider";

const AdminDashboard = () => {
  

  return (
    <MaterialProvider>
      <ProductProvider>
        <DashboardLayout />
      </ProductProvider>
    </MaterialProvider>
  );
};

export default AdminDashboard;
