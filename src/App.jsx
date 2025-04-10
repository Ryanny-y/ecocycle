import { Link, Outlet } from "react-router";
import Login from "./pages/auth/Login";
import AuthProvider from "./utils/contexts/AuthProvider";

const App = () => {

  return (
    <>
      <div>Home Page</div>
      <Link to='/login'>Login</Link>

      <Outlet />
    </>
  );
};

export default App;
