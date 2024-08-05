import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
