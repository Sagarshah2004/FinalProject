import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock Authentication
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("auth", "true");

      toast.success("Login Successful");

      navigate("/watchlist");
    } else {
      toast.error("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-red-500 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Login to access your Watchlist
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none border border-gray-600 focus:border-red-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none border border-gray-600 focus:border-red-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 bg-gray-700 p-4 rounded-lg text-sm text-gray-300">
          <p className="font-semibold mb-2 text-white">
            Demo Credentials
          </p>

          <p>Username: admin</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;