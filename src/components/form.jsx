import React from "react";

import "@/css/formlogin.css"

const Form = (props) => {
    return (
      <div className="form-container">
        <div className="containerForm">
        <h1 className="titulo">Inicia sesión.</h1>
        <div className="mover-input">
          <input placeholder="Usuario/Correo" class="input-field" type="text"/>
  <label for="input-field" class="input-label">Enter text</label>
  <span class="input-highlight"></span>

  <input placeholder="Contraseña" class="input-field" type="text"/>
  <label for="input-field" class="input-label">Enter text</label>
  <span class="input-highlight"></span>
            
        </div>
          <button className="accept">Aceptar</button>
        </div>
      <footer><a href="">Registrarse</a></footer>
      </div>
    )
  }
  
  export default Form;