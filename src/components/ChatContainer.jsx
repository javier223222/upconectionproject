import React from "react";
import "@/css/chatforum.css";
import Image from "next/image";
import send from "@/assets/send.svg";
import clip from "@/assets/clip.svg";
import BubbleL from "./BubbleL";
import BubbleR from "./BubbleR";

const ChatContainer = (props) => {
  return (
    <div className="ChatContainer">
      <div className="message-container">
        <div className="left">
          <BubbleL />
        </div>
        <div className="right">
          <BubbleR />
        </div>
      </div>
      <div className="message">
        <button className="boton">
          <Image src={clip}></Image>
        </button>
        <input placeholder="Envía un mensaje....." className="mensajes"></input>
        <button className="boton">
          <Image src={send}></Image>
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
