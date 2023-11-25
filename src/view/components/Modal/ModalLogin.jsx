import React from "react";
import "./ModalLogin.css"; 

function ModalLogin({ onClose, FirstName }) {
  return (
    <div className="welcome-modal">
      <h2>Bienvenido, {FirstName}!</h2>
      <p>¡Tu sesión se ha iniciado con éxito!</p>
      <p>¡Es hora de empezar a organizar tus tareas y ser productivo!</p>
      <p>¡Crea tus primeras tareas y mantén el control de tu día a día!</p>
      <button onClick={onClose}>Aceptar</button>
    </div>
  );
}

export default ModalLogin;
