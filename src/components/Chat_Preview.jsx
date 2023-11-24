'use client'
import React, { useState } from "react";

import Image from "next/image";
import Prueba from "@/assets/persona.jpg";
import "@/css/chats.css";
import { useRouter } from "next/navigation";

const Chat_Preview = ({ onChatClick ,username,image,idchat}) => {
  const [idpublication,setIdpublication]=useState(idchat)
  const [name,setName]=useState(username)
  const navigation=useRouter()
  const redirect=()=>{
   navigation.push(`http://localhost:3000/user/chatt/${idpublication}`)
  }

  return (
    <button  className="chat-preview" onClick={redirect}>
      <div className="user-chat">
        <Image className="image-user-chat" width={"80"} height={"80"} src={image?image:Prueba} />
      </div>
      <div className="name">
        <h4>{username}</h4>
        <p>respuesta</p>
      </div>
    </button>
  );
};

export default Chat_Preview;