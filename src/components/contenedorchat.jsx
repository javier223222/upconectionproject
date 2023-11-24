// 'use client' (supongo que es 'use strict')
'use client'
import React, { useState } from "react";
import "@/css/chats.css";
import Chat_Preview from "./Chat_Preview";

const ContenedorChat = ({ onChatClick }) => {
  const [busquedaActiva, setBusquedaActiva] = useState(false);

  const handleBuscarClick = () => {
    setBusquedaActiva(true);
    onChatClick(); 
  };

  return (
    <div className="container-chats">
      <div className="buscador">
        <h1>Chats</h1>
        <div className="search">
          <input type="text" className="search__input" placeholder="Buscar chat." />
          <button className="search__button" onClick={handleBuscarClick}>
            <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
         
            </svg>
          </button>
        </div>
      </div>
      <div className="chats">
  
        <Chat_Preview onChatClick={onChatClick} />
      

      </div>
    </div>
  );
};

export default ContenedorChat;
