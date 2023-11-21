'use client'

import React, { useState } from "react";
import "@/css/chatsburbujas.css";
import Chatfriends from "@/components/chatfriends";
import ContenedorChat from "@/components/contenedorchat";
import Informacion from "@/components/Informacion-chat";
import InformacionChat2 from "@/components/Informacion-chatContenido";
import Img_whaitchat from "@/components/Img_whaitchat";

const Chatts = (props) => {
  const [mostrarInformacion2, setMostrarInformacion2] = useState(false);
  const [mostrarChats, setMostrarChats] = useState(false);

  const handleChatClick = () => {
    setMostrarChats(true);
  };

  const toggleInformacion2 = () => {
    setMostrarInformacion2(!mostrarInformacion2);
  };

  const regresarAInformacion = () => {
    setMostrarInformacion2(false);
  };

  return (
    <div className="container">
      <ContenedorChat onChatClick={handleChatClick} />
      {!mostrarChats && <Img_whaitchat />}
      {mostrarChats && <Chatfriends />}
      {mostrarChats && (
        <>
          {mostrarInformacion2 ? (
            <InformacionChat2 onRegresarAInformacion={regresarAInformacion} />
          ) : (
            <Informacion onMultimediaClick={toggleInformacion2} />
          )}
        </>
      )}
    </div>
  );
};

export default Chatts;
