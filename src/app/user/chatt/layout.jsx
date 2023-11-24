import {cookies} from "next/headers"
import "@/css/chatsburbujas.css";
import ContenedorChat from '@/components/contenedorchat'
import React from 'react'
import { getAnyProfile } from "@/apiconections";


const getTokenMy=()=>{
  const cokiestore= cookies()
  const hasCokokie= cokiestore.has('tokenUser')
  return hasCokokie?cokiestore.get("tokenUser").value:undefined
}

const HomeChat =async ({children}) => {

    const allMessagesContainer=await getAnyProfile("http://localhost:80/chat",getTokenMy())
    console.log(allMessagesContainer)
 
  
  return (
    <div className="container">
      <ContenedorChat allMembersch={allMessagesContainer.result} />
      {children}
    </div>
  )
}


export default HomeChat