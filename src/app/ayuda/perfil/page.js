import React from "react";
import NewNav from "@/components/NewNav";
import Image from "next/image";
import "@/css/account.css";
import SignIn from "@/assets/Girl-Sign-in.svg";
import Contenido from "@/components/Contenido";
import perfil from "@/assets/About-us.svg"
 const Perfil =(titulo, descripcion)=> {
  return (
    <div>
      <NewNav />
      <div className="container">
        <Contenido titulo={"Perfil"} descripcion={""}/>
        <Image src={perfil} alt="" className="svg"/>
      </div>
    </div>
  );
}
export default Perfil