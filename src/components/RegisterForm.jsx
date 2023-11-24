import React from "react";
import "@/css/register.css";

const RegisterForm = (props) => {
  return (
    <div className="contenedor">
      <br/>
      <div className="containerForm">
        <h1 className="titulo">Regístrate</h1>
        <div className="mover-input">
          <input placeholder="Correo" class="input-field" type="text" />

          <input placeholder="Contraseña" class="input-field" type="text" />
          <input
            placeholder="Confirme contraseña"
            class="input-field"
            type="text"
          />
        </div>
        <button onClick={props.handleChange} className="accept">
          Continuar
        </button>
      </div>
      <footer>
        <a href="">Volver</a>
      </footer>
    </div>
  );
};

export default RegisterForm;
