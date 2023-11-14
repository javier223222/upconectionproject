'use client'
import "@/css/FriendsPrincipal.css";
import Opciones_friends from '@/components/opciones_friends';
import Amigos from '@/components/amigos';
import React, { useState } from 'react';
import ContenidoAmigos from '@/components/ContenidoAmigos';
import NoAmigos from '@/components/NoAmigos';


const Friends = () => {
  const [mostrarContenidoAmigos, setMostrarContenidoAmigos] = useState(true);
  const [mostrarContenidoSolicitudes, setMostrarContenidoSolicitudes] = useState(false);

  const toggleContenidoAmigos = () => {
    setMostrarContenidoAmigos(true);
    setMostrarContenidoSolicitudes(false);
  };

  const toggleContenidoSolicitudes = () => {
    setMostrarContenidoAmigos(false);
    setMostrarContenidoSolicitudes(true);
  };

  return (
    <div>

      <div className='juntos'>
        <Opciones_friends
          toggleContenidoAmigos={toggleContenidoAmigos}
          toggleContenidoSolicitudes={toggleContenidoSolicitudes}
        />
        <Amigos
          mostrarContenidoAmigos={mostrarContenidoAmigos}
          mostrarContenidoSolicitudes={mostrarContenidoSolicitudes}
        />
      </div>
    </div>
  );
}

export default Friends;
