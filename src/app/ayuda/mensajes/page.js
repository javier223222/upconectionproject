import React from "react";
import NewNav from "@/components/NewNav";
import Image from "next/image";
import "@/css/account.css";
import SignIn from "@/assets/Girl-Sign-in.svg";
import Contenido from "@/components/Contenido";
import mensaje from "@/assets/New-message.svg"


 const Mensajes = ({ titulo,descripcion})=> {
  return (
    <div>
      <NewNav />
      <div className="container">
        <div className="contenedor">
          <div className="aa">
            <Contenido titulo={"Mensajes"} descripcion={"holaa"} />
            
              <li>Ir al panel de mensajes.</li>
              <li>
                {" "}
                Seleccionar una conversación ya inicializada o comenzar una buscando la pesona en tu lista de amigos.
              </li>

          </div>
        </div>
        <div>
          <Image src={mensaje} alt="" className="svg" />
        </div>
      </div>
    </div>
  );
}
export default Mensajes