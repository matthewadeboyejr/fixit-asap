import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthenticateContext from "../../hooks/useAuthenticateContext";

const RequireAuth = () => {
  const { isAuthenticated } = useAuthenticateContext();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
    //<Navigate to="/login" />
  );
};

export default RequireAuth;
