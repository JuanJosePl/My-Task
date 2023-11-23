import { Navigate } from "react-router-dom";
import { TaskContext } from "../../context/task";
import { useContext } from "react";


export const ProtectedRoute = ({ children }) => {
  const { state } = useContext(TaskContext)

  if (!state.user) {
    return <Navigate to='/login' replace />;
  }

  return children;
};
