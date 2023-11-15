import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";
import ReactSwitch from "react-switch";
import Input from "../input/input";

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <div className="navbar__links navbar__links--left ">
        <img
          src="../public/cheque.png"
          alt="Icono de My-Task"
          className="navbar__app-icon"
        />
        <Link to="/" className="navbar__app-name">
          My-Task
        </Link>
      </div>
      <div className="navbar__links navbar__links--right">
        {isAuthenticated ? (
          <div>
            <Input className="navbar__input" placeholder="Buscar..." />
            <Link className="navbar__link" to="/logout">
              Cerrar sesión
            </Link>
          </div>
        ) : (
          <div>
            <Link className="navbar__link" to="/login">
              Iniciar sesión
            </Link>
            <Link className="navbar__link" to="/register">
              Registrarse
            </Link>
          </div>
        )}
      </div>
      <div className="switch">
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </nav>
  );
}

export default NavBar;
