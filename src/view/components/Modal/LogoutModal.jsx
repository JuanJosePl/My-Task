import { useContext } from "react";
import "./Modal.css";
import { TaskContext } from "../../../context/task";


function LogoutModal({ setOpenModal }) {

  const { dispatch } = useContext(TaskContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setOpenModal(false); 
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>¿Estás seguro que quieres cerrar sesión?</h1>
        </div>
        <div className="body">
          <p>¡Volverás a la página de inicio de sesión!</p>
        </div>
        <div className="footer">
          <button onClick={() => setOpenModal(false)} id="cancelBtn">
            Cancelar
          </button>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
