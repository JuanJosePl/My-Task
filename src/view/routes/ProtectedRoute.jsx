import { createContext, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const ProtectedRoute = ({ children }) => {
  const { token, tokenRegister } = useContext(AuthContext);
  const location = useLocation();

  if (!token || !tokenRegister) {
    return <Navigate to={location.pathname} replace />;
  }

  return children;
};
