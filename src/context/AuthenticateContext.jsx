import React, { createContext, useEffect, useState } from "react";

const AuthenticateContext = createContext({});

export const AuthenticateProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
  };

  return (
    <AuthenticateContext.Provider
      value={{ login, logout, setIsAuthenticated, isAuthenticated }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
};

export default AuthenticateContext;
