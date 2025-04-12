import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../utils/contexts/AuthProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const { setUserData, setIsAuthenticated, setAccessToken } =
    useContext(authContext);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userInfo.username || !userInfo.password) {
      alert("REQUIRED ALL FIELD");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const url = import.meta.env.VITE_API_URL;
      try {
        const response = await fetch(`${url}/auth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(userInfo),
          credentials: "include",
        });
        
        console.log(url);
        if (!response.ok) {
          console.log(`In Responsse: ${response}`);
          
          if(response.status && response.statusText === 'Unauthorized') {
            throw new Error(`Username or Password is Incorrect`);
          }

          throw new Error(response.status + " " + response.statusText);
        }

        const data = await response.json();
        
        console.log("Works Here");
        
        setUserData(data.userData);
        setAccessToken(data.accessToken);
        setIsAuthenticated(true);
        
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        navigate("/admin/overview");
      } catch (error) {
        console.log("Error Here");
        
        console.log(error);
        
        alert(error);
        setLoading(false)
      }
    };
    fetchData();
  };

  return (
    <main className="h-svh flex items-center justify-center relative">
      <div className="flex flex-col md:flex-row items-center justify-betweeen py-20 md:py-28 px-10 md:px-16 bg-[#F4F2EF] md:bg-forest gap-5 md:gap-20 rounded-md shadow-lg shadow-black">
        <div className="flex flex-col md:flex-row items-center gap-3 grow">
          <img
            src="/logos/logo.png"
            alt="nsts logo"
            className="h-24 md:h-32"
          />
          <p className="text-3xl font-bold text-center text-forest md:text-white lg:text-4xl text-nowrap">
            EcoCycle
          </p>
        </div>

        <section
          id="Left"
          className="flex flex-col items-center justify-center gap-5"
        >
          <header className="flex flex-col items-center justify-center gap-y-1 px-10 mb-5">
            <p className="text-xl font-bold text-center text-forest md:text-white md:text-3xl">
              Welcome Admin
            </p>
            <p className="text-sm text-center text-forest md:text-white md:text-lg">
              Login to Dashboard
            </p>
          </header>

          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center gap-5 mb-2 w-full"
          >
            <div className="flex flex-col items-center justify-center gap-y-4 w-full">
              <input
                type="text"
                required
                value={userInfo.username}
                onChange={(e) => {
                  setUserInfo(prev => ({
                    ...prev,
                    username: e.target.value
                  }))
                } }
                placeholder="Username"
                className="rounded-md bg-gray-1 p-2 px-5 w-full outline-none"
              />
              <input
                type="password"
                required
                value={userInfo.password}
                onChange={(e) => {
                  setUserInfo(prev => ({
                    ...prev,
                    password: e.target.value
                  }))
                } }
                placeholder="Password"
                className="rounded-md bg-gray-1 p-2 px-5 w-full outline-none"
              />
            </div>

            <button className="text-xl font-semibold text-center text-white bg-forest rounded-md md:bg-[#D8D1BD] md:text-forest lg:text-lg  py-1 px-7">
              Log in
            </button>
          </form>
        </section>
      </div>

      {/* LOADING MESSAGE */}
      {loading && (
        <div className="absolute top-1/2 left-1/2 bg-white text-black py-5 px-10 -translate-x-1/2 -translate-y-1/2 rounded-md">Loading...</div>
      )}
    </main>
  );
};

export default Login;
