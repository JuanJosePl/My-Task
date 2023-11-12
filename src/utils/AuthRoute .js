import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "../view/pages/Home";
import LoginForm from "../view/pages/LoginForm";
import RegistroForm from "../view/pages/RegistrationForm";
import Dashboard from "../view/pages/Dashboard";


function AuthRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

// En tus rutas
const isAuthenticated = true; 

<BrowserRouter>
  <AuthRoute path="/" component={Home} isAuthenticated={isAuthenticated} />
  <AuthRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
  <Route path="/login" component={LoginForm} />
  <Route path="/register" component={RegistroForm} />
</BrowserRouter>
