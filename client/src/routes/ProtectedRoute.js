import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { authStatus } = useAuth();
  React.useEffect(() => {
    console.log("Protectect route Status: " + authStatus.isAuth);
  }, []);

  return authStatus.isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
