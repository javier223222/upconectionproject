import React from "react";
import "@/css/registerform.css";

const Register = (props) => {
  return (
    <div className="container">
      <div className="container-form">
        <h2 className="titulo">Registrate</h2>
        <div className="content">
            <input onChange={props.onInputChange} placeholder="username" name="username" className="imput" />
          </div>
        <div className="content">
          <input onChange={props.onInputChange} placeholder="Correo" name="email" className="imput" />
          <input  onChange={props.onInputChange}placeholder="Nombre" name="nombre" className="imput" />
        </div>
        <div className="aaa">
            
          <div className="content">
            <input onChange={props.onInputChange} name="password" placeholder="Contraseña" type="password" className="imput" />
            <input onChange={props.onInputChange} name="apellidop" placeholder="Apellido P." className="imput" />
          </div>
          <div className="content">
            <input  onChange={props.onInputChange}
              name="password2"
              placeholder="Confirma la contraseña"
              type="password"
              className="imput"
            />
            <input  onChange={props.onInputChange}name="apellidom" placeholder="Apellido M." className="imput" />
          </div>
          <div className="content">
            <input onChange={props.onInputChange} name="birthday" type="date" onchange="submitBday()" className="age" />
          </div>
          <div className="content">
          <select onChange={props.onInputChange} name="sex"  className="sex">
              <option value={"M"}>Male</option>
              <option value={"F"}>Female</option>
            </select>
          </div>
          <div className="content">
          <select  onChange={props.onInputChange} name="Carrera" className="sex">
            <option value={"Ingeniería en Software"}>Software</option>
          </select>
          </div>
          <button onClick={async()=>props.handleChange()} className="accept">
          Continuar
        </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
