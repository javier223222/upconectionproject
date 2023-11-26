'use client'

import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";
import Conversacion from "./conversacion";
import "@/css/chatfriends.css"
import NavFriend from "./NavFriend";
import Pusher from "pusher-js"
import axios from "axios";

const Chatfriends = (props) => {
  const [conversations,setConversations]=useState(props.conversations)
  const [message, setMessage] = useState({bodyMessage:'',token:props.token,imageImg:null,idChat:props.idChat})
  const onInputChange = (e) => {
   const {name,value}=e.target
   setMessage(x=>{
    return {
      ...x,
      [name]:value
    }


   })
  }
  useEffect(()=>{
    const pusher=new Pusher("129d070ca62b60510ea0",{
      cluster:"us2"
     })
     const channel=pusher.subscribe(`${props.idChat}message`)
     channel.bind("message",data=>{
       let nedata=[...conversations,data]
     
       setConversations(
        [...nedata]
       )

     })
  })
  const onInputFileChange = (e) => {
    const {name,files}=e.target
    setMessage(x=>{
     return {
       ...x,
       [name]:files[0]
     }
 
    })
  }
 
  const sendMessage = async () => {
    if(message.bodyMessage==''){
    alert("No puedes enviar un mensaje vacio")
  }else{
    const formData = new FormData();
    if(message.imageImg!=null){
      formData.append("messageMedia", message.imageImg)
    }
    formData.append("contentmessage", message.bodyMessage)
    formData.append("idmessgae", message.idChat)
    const addpost=await axios.post("http://localhost:80/chatInteraction/",formData,{
      headers:{
        Authorization:message.token
      }

    })
  }
  }


  const inputRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      
    }
  };

  return (

    <div className="container-chat">
            <NavFriend image={props.imageuser} name={props.name} apellidop={props.apellidp} apellidom={props.apellidom} />
            <div className="container-origin">
              
            <div className="chat">
              
          {
            conversations.length!=0 &&
            conversations.map((conversacion,index)=>{
              return(
                <Conversacion name={conversacion.name}
                 imageSrc={conversacion.urlfile} 
                 apellidop={conversacion.apellidop} 
                 apellidom={conversacion.apellidom} 
                 key={index} imagen={conversacion.imageuser}
                   contentMesagge={conversacion.conentMessage} 
                   paragraphText={conversacion.paragraphText} />
              )
            })
          }
        
                  


          
        

        
                    </div>
            </div>
          
     
<div className="input-message">
      
{
  message.imageImg!=null||message.imageImg!=undefined? 
  /^.*\.(doc|DOC|pdf|PDF)$/.test(URL.createObjectURL(message.imageImg)) ? <label htmlFor="addar"> <iframe  src={URL.createObjectURL(message.imageImg)}></iframe></label>:<label htmlFor="addar"> <Image   width={"100"} height={"100"} src={URL.createObjectURL(message.imageImg)} ></Image></label> :<></>
}
<input onChange={onInputFileChange} type="file" name="imageImg" id="addar" style={{ width: "0.1px",
 height: "0.1px",
 opacity: 0,
 overflow: "hidden",
 position: "absolute",
 zindex: -1}}></input>
      {
        message.imageImg==null||message.imageImg==undefined?<label htmlFor="addar" className="boton">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M460-80q-92 0-156-64t-64-156v-420q0-66 47-113t113-47q66 0 113 47t47 113v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-380h60v380q0 17 11.5 28.5T460-300q17 0 28.5-11.5T500-340v-380q0-42-29-71t-71-29q-42 0-71 29t-29 71v420q0 66 47 113t113 47q66 0 113-47t47-113v-420h60v420q0 92-64 156T460-80Z"/></svg>
        </label>:<></>
      }
        
        <input  className="mensajes"
          contentEditable
          onChange={onInputChange}
          name="bodyMessage"
          placeholder="Envía un mensaje..."
          onKeyDown={handleKeyDown}
          ref={inputRef}></input>
        <button onClick={sendMessage} className="boton">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
        </button>
      
</div>
    </div>
  );
};

export default Chatfriends;