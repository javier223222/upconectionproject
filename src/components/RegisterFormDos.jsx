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
          <input placeholder="Nombre" class="input-field" type="text" />
          <input placeholder="Apellido P." className="apellidos" type="text" />
          <input placeholder="Apellido M." className="apellidos" type="text" />
          <input type="date" onchange="submitBday()" className="age" />

          <select className="sex">
            <option>Male</option>
            <option>Female</option>
          </select>

          <select name="Carrera" className="sex">
            <option>Software</option>
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
