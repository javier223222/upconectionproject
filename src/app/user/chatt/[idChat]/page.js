


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


   const {name,apellidp,apellidom,image}=props.searchParams
   console.log(image)
  const {idChat}=props.params
  
 
   const getConversations=await getAnyProfile(`http://18.116.19.145/chat/messages?idmessage=${idChat}`,getTokenMy())
  console.log(getConversations)
 
 



 
 
  
 

  return (
    <>
    
     
     
      <Chatfriends name={name} apellidp={apellidp} apellidom={apellidom} imageuser={image} idChat={idChat} token={getTokenMy()}  conversations={getConversations?.result?getConversations.result:[]}/>

        <>
   
            <>
          </>
       
            <Informacion  name={name} apellidp={apellidp} apellidom={apellidom} imageuser={image}/>
         
        </>
    
      </>
   
  );
};

export default Chatts;
