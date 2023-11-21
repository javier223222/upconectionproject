'use client'
import React from 'react'
import '@/css/infoForos.css'
import Image from 'next/image'
import Prueba from "@/assets/register.svg"
import Informacion_chat2 from './Informacion-chatContenido';



const Info = ({onMultimediaClick}) => {
  return (
    <div className='contenedor-info'>
   <Image className='perfil_prueba' src={Prueba}/>
    <div className='info-user'>
     <p>Nombre del foro</p>
     <p className='description'>descriocion del foro</p>
    </div>
  <button className='multimedia'onClick={onMultimediaClick}>
    <div className='icon_multimedia' >
    <svg  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>
    </div>
 <div className='info_multimedia'> 
  Multimedia, archivos y enlaces.

 </div>


  </button> 
      </div>
  )
}

export default Info