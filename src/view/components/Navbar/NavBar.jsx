import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../../css/DarkMode.css";
import { useState, useContext } from "react";
import ReactSwitch from "react-switch";
import { TaskContext } from "../../../context/task";
import { useThemeContext } from "../../../context/ThemeContext";
import LogoutModal from "../Modal/LogoutModal";
import TaskIcons from '../../../../assets/cheque.png'


function NavBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };

  const { state, dispatch } = useContext(TaskContext);

  return (
    <nav className="navbar" id={contextTheme}>
      <div className="navbar__links navbar__links--left ">
        <img
          src={TaskIcons}
          alt="Icono de My-Task"
          className="navbar__app-icon"
        />
        {!state.user && (
          <Link to="/" className="navbar__app-name">
            My-Task
          </Link>
        )}
      </div>
      <div className="navbar__links navbar__links--right">
        {state.user && (
          <div>
            {state.user && (
              <Link to="/taskform" className="navbar__app-name">
                My-Task
              </Link>
            )}
            <Link
              className="navbar__link-cerrar-sesion"
              to="/"
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
            >
              Cerrar sesión
            </Link>
          </div>
        )}

        {!state.user && (
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
        <ReactSwitch
          onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-Switch"
          id="material-switch"
        />
        {modalOpen && <LogoutModal setOpenModal={setModalOpen} />}
      </div>
    </nav>
  );
}

export default NavBar;
