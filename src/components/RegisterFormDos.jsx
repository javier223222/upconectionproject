import React from "react";
import "@/css/register.css";

const RegisterFormDos = (props) => {
  return (
    <div className="form-container">
      <br />

      <div className="containerForm">
        <h1 className="titulo">Regístrate</h1>
        <div className="mover-input">
          <input placeholder="Usuario" class="input-field" type="text" />
          <label for="input-field" class="input-label">
            Enter text
          </label>
          <span class="input-highlight"></span>

          <input placeholder="Nombre" class="input-field" type="text" />
          <label for="input-field" class="input-label">
            Enter text
          </label>
          <span class="input-highlight"></span>

          <input
            id="fecha"
            type="date"
            onchange="submitBday()"
            className="age"
          />
          <select className="sex">
          <option>Male</option>
          <option>Female</option>
          </select>

        </div>
        <button onClick={props.handleChange} className="accept">
          Continuar
        </button>
      </div>

    </div>
  );
};

export default RegisterFormDos;
