import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }) => {
  const user = globalThis.localStorage.getItem('userId')

  if (!user) {
    return <Navigate to='/' replace />;
  }

  return children;
};
