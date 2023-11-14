import { Link } from "react-router-dom";
import './Error.css'


export const Error = ({errorText, statusError}) => {
  return (
    <section className="error">
        <div className="error_container">
            <h1 className="error_title">¡Oops!</h1>
            <h2 className="error_subtitle">Ha ocurrido un error</h2>
            <p className="error_description">{ errorText } { errorText && '|' } { statusError }</p>
            <Link className="error_link" to='/'>Ir al inicio</Link>
        </div>
    </section>
  )
}
