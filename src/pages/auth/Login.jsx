import { useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "../../utils/contexts/AuthProvider";
import { useNavigate } from "react-router";
import useAdminCheck from "../../utils/hooks/useAdminCheck";

const Login = () => {

  const { setUserData, setIsAuthenticated, setAccessToken } = useContext(authContext);
  const navigate = useNavigate();
  const [ userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();

        if(!userInfo.username || !userInfo.password) {
          console.log("REQUIRED ALL FIELD");
          return;
        }

        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3500/auth', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userInfo),
              credentials: "include"
            });
  
            if(!response.ok) {
              throw new Error('Some')
            }

            const data = await response.json();

            console.log(data);
            
            setUserData(data.userData);
            setAccessToken(data.accessToken)
            setIsAuthenticated(true);
            navigate('/admin/overview')
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }}
    > 
      <h1>Login</h1>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={userInfo.username}
        className="border border-black"
        onChange={(e) =>
          setUserInfo((cur) => ({ ...cur, username: e.target.value }))
        }
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        value={userInfo.password}
        className="border border-black"
        onChange={(e) =>
          setUserInfo((cur) => ({ ...cur, password: e.target.value }))
        }
      />

      <button className="py-1 px-4 bg-blue-200">Login</button>
    </form>
  );
};

export default Login;
