import React from "react";
import "@/css/register.css";

const RegisterForm = (props) => {
  return (
    <div className="form-container">
      <br />

      <div className="containerForm">
        <h1 className="titulo">Regístrate</h1>
        <div className="mover-input">
          <input placeholder="Correo" class="input-field" type="text" />
          <label for="input-field" class="input-label">
            Enter text
          </label>
          <span class="input-highlight"></span>

            <input placeholder="Contraseña" class="input-field" type="text" />
            <label for="input-field" class="input-label">
                Enter text
            </label>
            <span class="input-highlight"></span>

          <input placeholder="Confirme contraseña" class="input-field" type="text" />
          <label for="input-field" class="input-label">
            Enter text
          </label>
          <span class="input-highlight"></span>
        </div>
        <button onClick={props.handleChange} className="accept">Continuar</button>
      </div>
      <footer>
        <a href="">Volver</a>
      </footer>
    </div>
  );
};

export default RegisterForm;
