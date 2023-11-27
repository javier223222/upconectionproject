import React from "react";
import "@/css/forum.css";
import ForumContainer from "@/components/ForumContainer";
import ChatContainer from "@/components/ChatContainer";
import Description from "@/components/Description";

import {cookies} from "next/headers"
import { getAnyProfile } from '@/apiconections'


const getTokenofme=()=>{
  const cokiestore= cookies()
  const hasCokokie= cokiestore.has('tokenUser')
  return hasCokokie?cokiestore.get("tokenUser").value:undefined

}

const Forums =async (parasms) => {
   
   console.log(parasms)
   const {idforo}=parasms.params
   const allinteractionforo=await getAnyProfile(`http://localhost:80/foros/interactions?idforo=${idforo} `,getTokenofme())
   const geinfo=await getAnyProfile(`http://localhost:80/foros/info?idforo=${idforo}`,getTokenofme())
   console.log(geinfo)
   console.log(allinteractionforo)

  return (
    <>
       
        <ChatContainer token={getTokenofme()} allmessages={allinteractionforo.result} idforo={idforo}/>
        <Description description={geinfo.result[0].forodescription} imageforo={geinfo.result[0].imageofForo}/>
    </>
  );
};

export default Forums;
