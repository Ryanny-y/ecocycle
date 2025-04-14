import { useContext } from "react";
import { authContext } from "../../../utils/contexts/AuthProvider";
import Logout from "../../../pages/auth/Logout";

const DashHeader = () => {

  const { userData } = useContext(authContext)

  return (
    <header className="hidden md:flex items-center px-8 justify-between gap-5 sticky top-0 bg-white py-3 shadow-lg">
      <p className="font-bold text-2xl">Welcome Admin, <span className="text-forest">{userData?.username}</span></p>

      <Logout />
    </header>
  )
};

export default DashHeader;
