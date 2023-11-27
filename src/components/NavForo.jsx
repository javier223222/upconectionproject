import "@/css/chatForos.css";
import React from "react";
import Image from "next/image";
import Persona from "@/assets/persona.jpg";

const NavForo = () => {
  return (
    <nav className="navfriends">
      <div className="contenedorImgAndTxt">
        <Image className="usuarionav" src={Persona} />
        <div className="centered">
          <p>Nombre del foro</p>
        </div>
      </div>
    </nav>
  );
};


export default NavForo;
