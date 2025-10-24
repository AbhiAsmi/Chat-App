import { useState } from "react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 relative overflow-hidden">
     
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#1a0f2b] to-black opacity-70"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-16">
       
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left p-4">
          <div className="flex items-center mb-10 self-start lg:self-auto">
            <img
              src="Screenshot 2025-10-08 183910.png"
              alt="QuickConnect Logo"
              className="h-8 mr-2"
            />
            <span className="text-xl font-bold">QUICKCONNECT</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up">
            Welcome Back <br /> Log in to Continue
          </h1>

       
          <form
            onSubmit={handleLogin}
            className="w-full max-w-md bg-[#1a0f2b] rounded-lg p-6 space-y-4 animate-fade-in-up animation-delay-300 border border-transparent"
          >
          
            <div className="relative animate-input-pop">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
                className="w-full p-3 pl-4 bg-[#2a174a] border border-[#5a3a8a] rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none placeholder-gray-400 text-white transition-all duration-300"
              />
            </div>

         
            <div className="relative animate-input-pop animation-delay-100">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
                className="w-full p-3 pl-4 bg-[#2a174a] border border-[#5a3a8a] rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none placeholder-gray-400 text-white transition-all duration-300"
              />
            </div>
            {error && (
              <p className="text-sm text-red-400">
                {error.response?.data?.message || "Something went wrong"}
              </p>
            )}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3 mt-4 rounded-md font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 animate-button-slide-in"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>

          
            <p className="text-gray-400 text-sm mt-4 text-center animate-fade-in animation-delay-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-teal-400 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 animate-scale-in">
          <img
            src="Screenshot 2025-10-08 183115.png"
            alt="Two connected mobile phones"
            className="w-full max-w-lg object-contain lg:max-w-xl animate-float"
            style={{ transform: "rotate(0deg)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
