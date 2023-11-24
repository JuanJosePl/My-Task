import './Footer.css'
import { useThemeContext } from "../../../context/ThemeContext";


function Footer() {
  const { contextTheme } = useThemeContext();
  return (
    <footer className="footer" id={contextTheme}>
      <p className="footer__copyright">
        &copy; 2023 My-Task. Todos los derechos reservados.
      </p>
      <div className="footer__social-icons">
        <a href="#" className="footer__social-icon">
          <img src="/facebook.png" alt="Facebook" />
        </a>
        <a href="#" className="footer__social-icon">
          <img src="/gorjeo.png" alt="Twitter" />
        </a>
        <a href="#" className="footer__social-icon">
          <img src="/instagram.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
