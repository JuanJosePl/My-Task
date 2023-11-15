import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(globalThis.localStorage.getItem('userId'))

  if (!user) {
    return <Navigate to='/' replace />;
  }

  return children;
};
