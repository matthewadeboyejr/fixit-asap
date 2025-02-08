import React, { createContext, useEffect, useState } from "react";

const AuthenticateContext = createContext({});

export const AuthenticateProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("accessToken");
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

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
