import React, { createContext, useState, useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const login = (credentials) => {
    const hasSabilNumber =
      credentials.sabilNumber || credentials.sabilNumber === "";
    const hasITSNumber =
      credentials["its-number"] || credentials["its-number"] === "";

    const hasPassword =
      credentials.password && credentials.password.trim() !== "";

    if ((hasSabilNumber || hasITSNumber) && hasPassword) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
