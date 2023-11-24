import React from 'react';
import "@/css/contenidaA.css";
import Image from 'next/image';
import Prueba from "@/assets/prueba.jpg";
import Trash from "@/assets/trash.png";


const ContenidoAmigos = () => {
  return (
    <div>
    <div className='contenedorAmigoA'>
      <div className='amigoA'>
        <div className='imagenWhitnameA'>
          
          <Image onClick={"funcion para redirigir aca"} className='profileFriendA' src={Prueba} />
          
    
          <a   href=''>Jose Luis Estrada Pineda</a>
        </div>
        <div className='carreraA'>
   <a>ing software</a>
        </div>
       
      </div>
      <button className='opcionTRashA'>
          <Image className='DeleteA' src={Trash} />
        </button>
    </div>

    </div>
  );
}

export default ContenidoAmigos;
