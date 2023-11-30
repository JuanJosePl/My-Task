import { Link } from "react-router-dom";
import { useThemeContext } from "../../../context/ThemeContext";
import { useState, useContext } from "react";
import './Home.css'
import organizacion from '../../../../public/organizacion-unsplash.jpg'
import recordatorio from '../../../../public/recordatorio-unsplash.jpg'
import accesibilad from '../../../../public/accesibilad-unsplash.jpg'


function Home() {
  const { contextTheme } = useThemeContext();
  
  return (
    <div className="home">
      <div className="home__main-content" id={contextTheme}>
        <div className="home__background-image">
          <h1 className="home__title">
            Tu vida, tus tareas, <br /> un equilibrio perfecto
          </h1>
          <p className="home__description">
            Organízate, concéntrate y comienza a organizar tus tareas con
            My-Task <br /> para proporcionar equilibrio y tranquilidad en tu día
            a día.
          </p>
          <Link to="/register" className="home__register-button">
            Regístrate ;)
          </Link>
        </div>
      </div>
      <div className="home__feature-card" id="organizacion">
        <div className="home__feature-content">
          <h3 className="home__feature-title">Organización</h3>
          <p className="home__feature-description">
            My-Task te permite organizar tus tareas de manera eficiente, para
            que puedas concentrarte en lo que realmente importa. Organiza tus
            tareas en categorías personalizadas, establece fechas límite y
            prioridades, y mantén un registro de tu progreso.
          </p>
        </div>
        <img
          src={organizacion}
          alt="Organización"
          className="home__feature-image"
        />
      </div>
      <div className="home__feature-card" id="recordatorios">
        <div className="home__feature-content">
          <h3 className="home__feature-title">Recordatorios</h3>
          <p className="home__feature-description">
            Con My-Task, nunca olvidarás una tarea importante. Te enviaremos
            recordatorios para que siempre estés al tanto de tus tareas
            pendientes. Configura recordatorios personalizados, recibe
            notificaciones en tu dispositivo y asegúrate de cumplir con tus
            plazos.
          </p>
        </div>
        <img
          src={recordatorio}
          alt="Recordatorios"
          className="home__feature-image"
        />
      </div>
      <div className="home__feature-card" id="accesibilidad">
        <div className="home__feature-content">
          <h3 className="home__feature-title">Accesibilidad</h3>
          <p className="home__feature-description">
            Accede a tus tareas desde cualquier lugar con nuestra aplicación. Ya
            sea que estés en casa, en la oficina o en movimiento, tus tareas
            siempre estarán a tu alcance. Nuestra aplicación es compatible con
            dispositivos móviles y ofrece una experiencia fluida en todos los
            dispositivos.
          </p>
        </div>
        <img
          src={accesibilad}
          alt="Accesibilidad"
          className="home__feature-image"
        />
      </div>
    </div>
  );
}

export default Home;
