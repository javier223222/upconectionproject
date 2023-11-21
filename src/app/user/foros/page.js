'use client'

import React, { useState } from "react";
import "@/css/bubbleChat.css";
import ChataForos from "@/components/ChatForos";
import ContenedorForos from "@/components/ContenedorForos";
import Info from "@/components/Info";
import Info2 from "@/components/Info2";
import Img_whaitchat from "@/components/Img_whaitchat";
 

const Foros = (props) => {

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

  return(
    <div className="container">
      <ContenedorForos onChatClick={handleChatClick} />
      {!mostrarChats && <Img_whaitchat />}
      {mostrarChats && <ChataForos />}
      {mostrarChats && (
        <>
          {mostrarInformacion2 ? (
            <Info2 onRegresarAInformacion={regresarAInformacion} />
          ) : (
            <Info onMultimediaClick={toggleInformacion2} />
          )}
        </>
      )}
    </div>
  )
};

export default Foros;
