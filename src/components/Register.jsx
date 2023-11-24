import React from "react";
import "@/css/registerform.css";

const Register = (props) => {
  return (
    <div className="container">
      <div className="container-form">
        <h2 className="titulo">Registrate</h2>
        <div className="content">
            <input placeholder="username" className="imput" />
          </div>
        <div className="content">
          <input placeholder="Correo" className="imput" />
          <input placeholder="Nombre" className="imput" />
        </div>
        <div className="aaa">
            
          <div className="content">
            <input placeholder="Contraseña" type="password" className="imput" />
            <input placeholder="Apellido P." className="imput" />
          </div>
          <div className="content">
            <input
              placeholder="Confirma la contraseña"
              type="password"
              className="imput"
            />
            <input placeholder="Apellido M." className="imput" />
          </div>
          <div className="content">
            <input type="date" onchange="submitBday()" className="age" />
          </div>
          <div className="content">
          <select className="sex">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="content">
          <select name="Carrera" className="sex">
            <option>Software</option>
          </select>
          </div>
          <button onClick={props.handleChange} className="accept">
          Continuar
        </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
