'use client'

import Image from "next/image";
import React, { useRef } from "react";
import Conversacion from "./conversacion";
import "@/css/chatfriends.css"
import NavFriend from "./NavFriend";

const Chatfriends = (props) => {
  const inputRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      
    }
  };
  return (

    <div className="container-chat">
            <NavFriend/>
            <div className="container-origin">
              
            <div className="chat">
          
        <Conversacion/>
                  


          
        

        
                    </div>
            </div>
          
     
<div className="input-message">

     
        <button className="boton">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M460-80q-92 0-156-64t-64-156v-420q0-66 47-113t113-47q66 0 113 47t47 113v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-380h60v380q0 17 11.5 28.5T460-300q17 0 28.5-11.5T500-340v-380q0-42-29-71t-71-29q-42 0-71 29t-29 71v420q0 66 47 113t113 47q66 0 113-47t47-113v-420h60v420q0 92-64 156T460-80Z"/></svg>
        </button>
        <input  className="mensajes"
          contentEditable
          placeholder="Envía un mensaje..."
          onKeyDown={handleKeyDown}
          ref={inputRef}></input>
        <button className="boton">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
        </button>
      
</div>
    </div>
  );
};

export default Chatfriends;