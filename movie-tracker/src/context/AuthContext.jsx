import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth status on page load
  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Login Function
  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;