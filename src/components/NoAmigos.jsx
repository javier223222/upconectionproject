'use client'
import React, { useState } from 'react';
import "@/css/contenidoB.css";
import Image from 'next/image';
import Prueba from "@/assets/prueba.jpg";
import Yes from "@/assets/check.svg";
import Close from "@/assets/cancel.svg";
import { Assistant } from 'next/font/google';
import accountcircle from '../assets/acountcircle.svg'
import { useRouter } from 'next/navigation';

const NoAmigos = ({name,apellidop,apellidom,username,namemajor,urlfile,idfrienship,deleteFriend,iduser,aceptRequest,deletFriendRequest}) => {
  const navigation=useRouter()
  const [usernameAndata,setUsernameAndata]=useState({
    usernamet:username,
    idfrienshipNum:idfrienship,
    iduserf:iduser
  })

  const redirect = () => {
    navigation.push(`http://localhost:3000/user/${usernameAndata.usernamet}`)
  }

  return (
    <div>
   
        <div  className='contenedorAmigoC'>
          <div className='NoamigoC'>
            <div className='imagenWhitnameA'> 
            
            <Image onClick={redirect} className='profileFriendA' width={"80"} height={"80"} src={urlfile?urlfile:accountcircle} />
              <a   href=''>{name} {apellidop} {apellidom}</a>
       
            </div>
            <div className='carreraA'>
              <a>{namemajor}</a>
            </div>
            <div className='icon-separador'>
              <button onClick={async()=>aceptRequest(usernameAndata.iduserf)} className='opcionTRashC'>
                <Image className='DeleteC' src={Yes} />
              </button>
              <button onClick={async()=>deletFriendRequest(usernameAndata.iduserf)} className='opcionTRashC'>
                <Image className='DeleteC' src={Close} />
              </button>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default NoAmigos;
