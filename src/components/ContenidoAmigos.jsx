import React, { useState } from 'react';
import "@/css/contenidaA.css";
import Image from 'next/image';
import Prueba from "@/assets/prueba.jpg";
import Trash from "@/assets/trash.png";
import { useRouter } from 'next/navigation';
import accountcircle from '../assets/acountcircle.svg'

const ContenidoAmigos = ({name,apellidop,apellidom,username,namemajor,urlfile,idfrienship,deleteFriend,iduser}) => {
  const navigatio=useRouter()
  const [usernameAndata,setUsernameAndata]=useState({
    usernamet:username,
    idfrienshipNum:idfrienship,
    iduserf:iduser
  })


  const redirect = () => {
    navigatio.push(`http://localhost:3000/user/${usernameAndata.usernamet}`)

  }
  return (
    <div>
    <div className='contenedorAmigoA'>
      <div className='amigoA'>
        <div className='imagenWhitnameA'>
          
          <Image alt='friendProIm' onClick={redirect} className='profileFriendA' width={"80"} height={"80"} src={urlfile?urlfile:accountcircle} />
          
    
          <a   href=''>{name} {apellidop} {apellidom}  </a>
        </div>
        <div className='carreraA'>
   <a>{namemajor}</a>
        </div>
       
      </div>
      <button className='opcionTRashA'>
          <Image alt='friendProIm' onClick={async()=>deleteFriend(usernameAndata.idfrienshipNum,usernameAndata.iduserf)}  className='DeleteA' src={Trash} />
        </button>
    </div>

    </div>
  );
}

export default ContenidoAmigos;
