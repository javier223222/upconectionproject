'use client'
import React, { useState } from 'react';
import "@/css/Botones.css";
import Image from 'next/image';
import Friends from "@/assets/Friends.svg";
import Add from "@/assets/Fiends-add.svg";

const opciones_friends = ({ toggleContenidoAmigos, toggleContenidoSolicitudes }) => {

  const [selectedOption, setSelectedOption] = useState('amigos'); // Estado para seguir qué opción está seleccionada

  const handleOptionClick = (option) => {
    if (option === 'amigos') {
      toggleContenidoAmigos();
      setSelectedOption('amigos');
    } else if (option === 'solicitudes') {
      toggleContenidoSolicitudes();
      setSelectedOption('solicitudes');
    }
  };

  return (
    <div className='contenedorB'>
      <div className='celda'>
      <form class="form">
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input class="input" placeholder="Buscar." required="" type="text"/>
      <button class="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form>
  <button
          className={`opcionesB ${selectedOption === 'amigos' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('amigos')}
        >
          <div className='letter-friend'>
            Amigos
          </div>
          <div className='icon-friend'>
            <Image className='iconsfriends' src={Friends} />
          </div>
        </button>
        <button
          className={`opcionesB1 ${selectedOption === 'solicitudes' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('solicitudes')}
        >
          <div className='letter-friend'>
            Solicitudes
          </div>

          <div className='icon-friend'>
            <Image src={Add} />
          </div>
        </button>
      </div>
    </div>
  )
}

export default opciones_friends;