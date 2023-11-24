import React from "react";
import NewNav from "@/components/NewNav";
import Image from "next/image";
import "@/css/account.css";
import SignIn from "@/assets/Girl-Sign-in.svg";
import Contenido from "@/components/Contenido";
import friends from "@/assets/Social-friends.svg";

const Amigos = ({ titulo, descripcion }) => {
  return (
    <div>
      <NewNav />
      <div className="container">
        <div className="contenedor">
          <div className="aa">
            <Contenido titulo={"Amigos"} descripcion={"holaa"} />
            
              <li>Para agregar amigos debes entrar en el perfil de la persona que se desea agregar.</li>
              <li>
                {" "}
                Una vez en el perfil de la pesona, presiona el boton de agregar.
              </li>

          </div>
        </div>
        <div>
          <Image src={SignIn} alt="" className="svg" />
        </div>
      </div>
    </div>
  );
};

export default Amigos;
