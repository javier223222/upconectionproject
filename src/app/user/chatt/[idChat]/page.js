


import "@/css/chatsburbujas.css";
import Chatfriends from "@/components/chatfriends";
import ContenedorChat from "@/components/contenedorchat";
import Informacion from "@/components/Informacion-chat";
import InformacionChat2 from "@/components/Informacion-chatContenido";
import Img_whaitchat from "@/components/Img_whaitchat";

import {cookies} from "next/headers"
import { getAnyProfile } from "@/apiconections";



const getTokenMy=()=>{
  const cokiestore= cookies()
  const hasCokokie= cokiestore.has('tokenUser')
  return hasCokokie?cokiestore.get("tokenUser").value:undefined
}

const Chatts = async (props) => {


  const {idChat}=props.params

  const getConversations=await getAnyProfile(`http://localhost:80/chat/messages?idmessage=${idChat}`,getTokenMy())
  console.log(getConversations)



 
 
  
 

  return (
    <>
    
     
     
      <Chatfriends idChat={idChat} token={getTokenMy()}  conversations={getConversations.result}/>

        <>
   
            <>
          </>
       
            <Informacion/>
         
        </>
    
      </>
   
  );
};

export default Chatts;
