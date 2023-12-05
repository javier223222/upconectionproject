import React from "react";
import "@/css/options.css";
import Cards from "./Cards";
import Image from "next/image";
import account from "@/assets/User-Account-Sign-up.svg";
import post from "@/assets/Online-Post.svg";
import profile from "@/assets/Profile-details.svg";
import friend from  "@/assets/Refer-a-Friend.svg";

const Options = ({ link, svg, name }) => {
  return (
    <div >
      <div className="contenedor-2">
        <Cards svg={account} name={"Creacion de cuenta"} link={"/ayuda/account"} />
        <Cards svg={post} name={"Hacer publicaciones"} />
      </div>
      <div className="contenedor-2">
      <Cards svg={friend} name={"Amigos"} />
        <Cards svg={profile} name={"Mensajes"} />
      </div>
      
    </div>
  );
};

export default Options;
