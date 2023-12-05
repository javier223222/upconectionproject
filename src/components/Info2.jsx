'use client'
import React, { useState } from 'react';
import '@/css/infoForos2.css';
import MultimediaForos from "./MultimediaForos";
import Archive from './Archive';


const Info2 = ({ onRegresarAInformacion }) => {
  const [mostrarMultimedia, setMostrarMultimedia] = useState(true);

  const mostrarComponente = (esMultimedia) => {
    setMostrarMultimedia(esMultimedia);
  };

  return (
    <div className='contenedor-info2'>
      <div className='barra-regreso'>
        <div className='row-regreso' onClick={onRegresarAInformacion}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/>
          </svg>
        </div>
        <div className='titulo-regreso'>
          <p>Multimedia y contenido.</p>
        </div>
      </div>
      <div className='barra-multimedia'>
        <button
          className={`button-multimedia ${mostrarMultimedia ? 'seleccionado' : ''}`}
          onClick={() => mostrarComponente(true)}
        >
          Multimedia.
        </button>
        <button
          className={`button-multimedia ${!mostrarMultimedia ? 'seleccionado' : ''}`}
          onClick={() => mostrarComponente(false)}
        >
          Archivos.
        </button>
      </div>
      <div className='multimedia2'>
        {mostrarMultimedia ? <MultimediaForos /> : <Archive />}
      </div>
    </div>
  );
};

export default Info2;