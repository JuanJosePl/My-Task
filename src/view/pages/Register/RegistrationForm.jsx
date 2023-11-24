import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContext } from "../../../context/ThemeContext";
import "./RegistrationForm.css";

const RegistroForm = () => {
  const { contextTheme } = useThemeContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const body = { ...formData };

    fetch("https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          window.alert(
            `El usuario ${data.user.firstName} se creó correctamente.`
          );
          navigate("/login");
        } else {
          window.alert("Ocurrió un error en el registro. Inténtalo de nuevo.");
        }
      })
      .catch((error) => {
        console.error("Error en el registro:", error);
        window.alert("Ocurrió un error en el registro. Inténtalo de nuevo.");
      });
  };

  return (
    <div className="contenedor" id={contextTheme}>
      <div className="login-form__uno">
        <h2 className="login-form__titulo">¡Regístrate para comenzar!</h2>
        <p className="login-form__descripcion">
          Completa los siguientes campos para crear tu cuenta.
        </p>
        <form onSubmit={handleSubmitRegister}>
          {isSubmitting && <div className="spinner"></div>}
          <div className="login-form__fila">
            <div className="login-form__campo">
              <span className="login-form__icon">&#128100;</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Nombre"
                className="login-form__input"
              />
            </div>
            <div className="login-form__campo">
              <span className="login-form__icon">&#128101;</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Apellido"
                className="login-form__input"
              />
            </div>
          </div>
          <div className="login-form__fila">
            <div className="login-form__campo">
              <span className="login-form__icon">&#9993;</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo Electrónico"
                className="login-form__input"
              />
            </div>
            <div className="login-form__campo">
              <span className="login-form__icon">&#128273;</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className="login-form__input"
              />
            </div>
          </div>
          <button type="submit" className="login-form__btn" role="button">
            Registrarse
          </button>
        </form>
        <p className="login-form__registro">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistroForm;
