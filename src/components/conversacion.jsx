'use client'

import React from "react";
import "@/css/conversacion.css";
import Image from "next/image";
import Picture from "@/assets/r.gif";
import Archivos from "./Archivos";
import { useState } from "react";

const Conversacion = (props) => {
  const { imageSrc, paragraphText } = props; 

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const toggleLightbox = () => {
    setLightboxOpen(!lightboxOpen);
  };


  return (
    <>
      <div className="alineameesta">
        <Image alt="profileImage" width={"80"} height={"80"} onClick={toggleLightbox} className="profile" src={props.imagen!=null||props.imagen!=undefined?props.imagen:Picture} />

        <div className="contenedor-de-chats">
                <p>
                  {props.contentMesagge}
                
                        
                </p>
                {
                  props.imageSrc!=null||props.imageSrc!=undefined ?
                  /^.*\.(doc|DOC|pdf|PDF)$/.test(props.imageSrc) ? <iframe src={props.imageSrc}></iframe>:<Image alt="previweImg" width={"100"} height={"100"} src={props.imageSrc} ></Image> :<></>
                }
            
          <footer>{props.name} {props.apellidop} {props.apellidom}</footer>
        </div>
      </div>

      {lightboxOpen && (
        <div className='lightbox'>
              
          <Image alt="" width={"80"} height={"80"} className='lightbox-image' src={props.imagen!=null||props.imagen!=undefined?props.imagen:Picture} />
        
    

          <nav>
          <button onClick={toggleLightbox}><svg className='close-ligth' xmlns="http://www.w3.org/2000/svg" height="210" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
          </nav>
        </div>

        
        
        
      )}
    </>
  );
};

export default Conversacion;
