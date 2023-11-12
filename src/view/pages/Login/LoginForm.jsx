import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  
  const [formData, setFormData] = useState({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { email, password } = formData;

    const body = {
      email,
      password,
    };

    fetch("https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        setIsSubmitting(false);
        if (response.status === 200) {
          

          // Navegar a la página de tareas
          navigate("/pagetask");
        } else {
          window.alert("Correo o contraseña incorrecta...");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        // Manejo de errores de red, como problemas de conexión.
        console.error("Error de inicio de sesión:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-form__header">
        <h2 className="login-form__title">Iniciar Sesión</h2>
        <p className="login-form__subtext">
          Ingresa a tu cuenta para comenzar.
        </p>
      </div>
      <label className="login-form__input-label">
        <span className="login-form__icon">&#128101;</span>{" "}
        {/* Icono de correo */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="login-form__input"
          placeholder="Correo Electrónico"
        />
      </label>
      <label className="login-form__input-label">
        <span className="login-form__icon">&#128273;</span>{" "}
        {/* Icono de contraseña */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="login-form__input"
          placeholder="Contraseña"
        />
      </label>
      {isSubmitting && <div className="spinner"></div>}
      <button type="submit" className="login-form__submit-button">
        Iniciar Sesión
      </button>
      <p className="login-form__registro">
        ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </form>
  );
};

export default LoginForm;
