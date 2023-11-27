import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import LoginForm from "../pages/Login/LoginForm";
import RegistrationForm from "../pages/Register/RegistrationForm";
import Home from "../pages/Home/Home";
import  { TaskForm }  from "../components/TaskForm/TaskForm";
import { ProtectedRoute } from "./ProtectedRoute";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegistrationForm />,
      },
      {
        path: "taskform",
        element: (<ProtectedRoute> <TaskForm /> </ProtectedRoute>) ,
      },
    ],
    ErrorBoundary: ErrorPage
  },
]);
