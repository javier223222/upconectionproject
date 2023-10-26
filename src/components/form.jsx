import React from "react";

import "@/css/formlogin.css"

const Form = (props) => {
    return (
      <div className="form-container">
        <div className="containerForm">
        <h1 className="titulo">Inicia sesión.</h1>
        <div className="mover-input">
          <input placeholder="Usuario/Correo" onChange={props.onInputChnage} name="emailousuario" className="input-field" type="text"/>
  <label htmlFor="input-field" className="input-label" >Enter text</label>
  <span className="input-highlight"></span>

  <input placeholder="Contraseña" name="password" onChange={props.onInputChnage} className="input-field" type="text"/>
  <label htmlFor="input-field" className="input-label">Enter text</label>
  <span className="input-highlight"></span>
            
        </div>
          <button onClick={props.handleSubmit} className="accept">Aceptar</button>
        </div>
      <footer><a href="">Registrarse</a></footer>
      </div>
    )
  }
  
  export default Form;