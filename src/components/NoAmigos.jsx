'use client'
import React from 'react';
import "@/css/contenidoB.css";
import Image from 'next/image';
import Prueba from "@/assets/prueba.jpg";
import Yes from "@/assets/check.svg";
import Close from "@/assets/cancel.svg";
import { Assistant } from 'next/font/google';

const NoAmigos = () => {
const palabra = "hola";

  return (
    <div>
   
        <div  className='contenedorAmigoC'>
          <div className='NoamigoC'>
            <div className='imagenWhitnameA'> 
            
              <Image onClick={"funcion para redirigir aca"} className='profileFriendA' src={Prueba} />
              <a   href=''>Jose Luis Estrada Pineda</a>
       
            </div>
            <div className='carreraA'>
              <a>Ing. Software</a>
            </div>
            <div className='icon-separador'>
              <button className='opcionTRashC'>
                <Image className='DeleteC' src={Yes} />
              </button>
              <button className='opcionTRashC'>
                <Image className='DeleteC' src={Close} />
              </button>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default NoAmigos;
