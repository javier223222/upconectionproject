'use client'

import React, { useEffect, useState } from "react";
import "@/css/chatforum.css";
import Image from "next/image";
import send from "@/assets/send.svg";
import clip from "@/assets/clip.svg";
import BubbleL from "./BubbleL";
import BubbleR from "./BubbleR";
import Pusher from "pusher-js";
import axios from "axios";
const ChatContainer = (props) => {
  const [messages,setMessages]=useState({totalMessage:props.allmessages,bodymessage:null,token:props.token,idforo:props.idforo,document:null})
   useEffect(()=>{
     const pusher=new Pusher("129d070ca62b60510ea0",{
      cluster:"us2"
     })
     const channel=pusher.subscribe(`${props.idforo}foro`)
      channel.bind("message",data=>{
        let nedata=[...messages.totalMessage,data]
      
        setMessages(x=>{
             return {
              ...x,
              totalMessage:nedata
             }
        }
         
        )

      })
   })
   const onInputChange=(e)=>{
    const {name,value}=e.target
    setMessages(x=>{
      return {
        ...x,
        [name]:value
      }
    })

   }
   const onInputFileChange=(e)=>{

    const {name,files}=e.target
    setMessages(x=>{
      return {
        ...x,
        [name]:files[0]
      }
    })

   }
   const add=async()=>{
    let formData = new FormData();
    if(messages.document!=null){
      formData.append("mediaInteractionForo", messages.document);
    }

    formData.append("contentOfInteraction", messages.bodymessage);
    formData.append("idforo", messages.idforo);
    const ad=await axios.post("http://localhost:80/foroInteraction/interaction",formData,{
      headers:{
        Authorization:messages.token
      }
    })

    setMessages(x=>{
      return {
        ...x,
        bodymessage:null,
        document:null
      }
    })

   
    
   
   }
  return (
    <div className="ChatContainer">
      {
        messages.totalMessage.map(x=> 
        { return <div className="message-container">
        <div className="left">
          <BubbleL username={x.username} media={x.urlfile !=null?x.urlfile:null}  image={x.imagenuser!=null?x.imagenuser:null}  content={x.bodyofpublication}/>
          
        </div>
        
      </div>})

      }
     
      <div className="message">
        <input onChange={onInputFileChange} type="file" name="document" id="addar" style={{ width: "0.1px",
 height: "0.1px",
 opacity: 0,
 overflow: "hidden",
 position: "absolute",
 zindex: -1}}></input>
        <label htmlFor="addar" className="boton">
          <Image src={clip}></Image>
        </label>
        <input onChange={onInputChange}  name="bodymessage" placeholder="Envía un mensaje....." className="mensajes"></input>
        <button onClick={add} className="boton">
          <Image src={send}></Image>
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
