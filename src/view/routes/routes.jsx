import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import LoginForm from "../pages/Login/LoginForm";
import RegistrationForm from "../pages/Register/RegistrationForm";
import Home from "../pages/Home/Home";
import  PageTask  from "../pages/Task/PageTask";
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
        path: "pagetask",
        element: <ProtectedRoute> <PageTask /> </ProtectedRoute>,
      },
    ],
    ErrorBoundary: ErrorPage
  },
]);
