'use client'

import React from 'react';
import ContenidoAmigos from '@/components/ContenidoAmigos';
import NoAmigos from '@/components/NoAmigos';
import ImagenNotPipul from './ImagenNotPipul';

const Amigos = ({ mostrarContenidoAmigos, mostrarContenidoSolicitudes }) => {
  return (
    <div className='amigos'>
      <div className='recepcion'>
        {mostrarContenidoAmigos && <ContenidoAmigos />}
        {mostrarContenidoSolicitudes && <NoAmigos />}
      </div>
    </div>
  );
}

export default Amigos;

