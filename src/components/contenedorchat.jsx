// 'use client' (supongo que es 'use strict')
'use client'
import React, { use, useEffect, useState } from "react";
import "@/css/chats.css";
import Chat_Preview from "./Chat_Preview";

const ContenedorChat = ({ onChatClick,allMembersch }) => {
  const [busquedaActiva, setBusquedaActiva] = useState({allmembers:[]});

  const handleBuscarClick = () => {
    setBusquedaActiva(true);
    onChatClick(); 
  };

  useEffect(() => {
     setBusquedaActiva(x=>{
      return{
      ...x,
      allmembers:allMembersch
      }
     })
  },[])
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
  
        {
          busquedaActiva.allmembers.length!=0?busquedaActiva.allmembers.map((x,i)=>{
            return <Chat_Preview image={x.imageuser} username={x.username} idchat={x.idmessage} ></Chat_Preview>
          }):<></>
        }

      </div>
    </div>
  );
};

export default ContenedorChat;
