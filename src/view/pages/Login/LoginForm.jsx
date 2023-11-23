import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useContext } from "react";
import { TaskContext } from "../../../context/task";  

const LoginForm = () => {
  const { dispatch } = useContext(TaskContext)
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Ha ocurrido un error. Verifica las credenciales.')
      }
      return response.json()
    })
      .then((response) => {
        window.alert('Bienvenido ' + response.user.firstName)
        dispatch({ type: 'LOGIN', payload: response.user })
        const firstName = response.user.firstName;
        globalThis.localStorage.setItem("firstName", firstName);
        navigate('/taskform')
      })
      .catch((error) => {
        window.alert(error.message)
      })
  }
  

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
          className="login-form__input"
          placeholder="Contraseña"
        />
      </label>
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




