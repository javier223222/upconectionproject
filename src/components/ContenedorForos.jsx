// 'use client' (supongo que es 'use strict')
'use client'
import React, { useState } from "react";
import "@/css/previewChat.css";
import ForosPreview from "./ForosPreview";

const ContenedorForos = ({ onChatClick }) => {
  const [busquedaActiva, setBusquedaActiva] = useState(false);

  const handleBuscarClick = () => {
    setBusquedaActiva(true);
    onChatClick(); 
  };

  return (
    <div className="container-chats">
      <div className="buscador">
        <h1>Foros</h1>

      </div>
      <div className="chats">
  
        <ForosPreview onChatClick={onChatClick} />


      </div>
    </div>
  );
};

export default ContenedorForos;
