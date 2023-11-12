class registerForm extends Component {
    // ...
  
    validateForm = () => {
      let isValid = true;
      const errors = {};
  
      if (this.state.username.trim() === "") {
        isValid = false;
        errors.username = "Nombre requerido.";
      }
  
      if (this.state.email.trim() === "") {
        isValid = false;
        errors.email = "Correo electrónico requerido.";
      }
  
      if (this.state.password.trim() === "") {
        isValid = false;
        errors.password = "Contraseña requerida.";
      }
  
      if (this.state.phone.trim() === "") {
        isValid = false;
        errors.phone = "Teléfono requerido.";
      }
  
      this.setState({ errors });
      return isValid;
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      if (this.validateForm()) {
        // Guardar los datos del formulario en localStorage
        const usuario = {
          nombre: this.state.username,
          correo: this.state.email,
          contrasena: this.state.password,
          telefono: this.state.phone,
        };
  
        localStorage.setItem('usuario', JSON.stringify(usuario));
  
        // Redireccionar al usuario a la página de inicio
        window.location.href = "/inicio";
      }
    };
  
    // ...
  }
  