import React from "react";
import NewNav from "@/components/NewNav";
import Image from "next/image";
import "@/css/account.css";
import SignIn from "@/assets/Girl-Sign-in.svg";
import Contenido from "@/components/Contenido";

const CrearCuenta = (titulo, descripcion) => {
  return (
    <div>
      <NewNav />
      <div className="container">
        <div className="contenedor">
          <div className="aa">
            <Contenido
              titulo={"¿Cómo crear tu cuenta?"}
              descripcion={"holaa"}
            />
            <ol className="lele">
              <li>Ve a ( ) y dale click a Registrarse.</li>
              <li>
                {" "}
                Llena todos los datos que se te pide para poder registrarte.
              </li>
              <li>Haz click en continuar.</li>
              <li>
                Al correo registrado te llegara un mensaje de confirmación de la
                cuenta.
              </li>
              <li>Confirma tu correo y accede a CONNECT.</li>
            </ol>
          </div>
        </div>
        <div>
          <Image src={SignIn} alt="" className="svg" />
        </div>
      </div>
    </div>
  );
};
export default CrearCuenta;
