'use client'
import React, { useState } from "react";
import Image from "next/image";
import Prueba from "@/assets/persona.jpg";
import "@/css/chats.css";

const Chat_Preview = ({ onChatClick }) => {
  return (
    <button className="chat-preview" onClick={onChatClick}>
      <div className="user-chat">
        <Image className="image-user-chat" src={Prueba} />
      </div>
      <div className="name">
        <h4>Jose Luis Estrada Pineda</h4>
        <p>respuesta</p>
      </div>
    </button>
  );
};

export default Chat_Preview;