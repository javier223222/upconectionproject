"use client";

import React from "react";
import "@/css/conversation.css";
import Image from "next/image";
import Picture from "@/assets/r.gif";
import Archivos from "./Archivos";
import { useState } from "react";

const Conversation = (props) => {
  const { imageSrc, paragraphText } = props;

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const toggleLightbox = () => {
    setLightboxOpen(!lightboxOpen);
  };

  return (
    <>
      <div className="alineameesta">
        <Image alt="imageprofile" onClick={toggleLightbox} className="profile" src={Picture} />

        <div className="contenedor-de-chats">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            praesentium, delectus possimus doloribus dicta provident accusantium
            eum, officiis excepturi eligendi dolorum minima perspiciatis libero?
            Reiciendis iusto praesentium sit atque dolorum!
          </p>
          {imageSrc && paragraphText && (
            <div className="contendor-document">
              <Image alt="imageprofile" className="image-receptor" src={Picture} />

              <div className="archivo2">
                <div className="archivo-icon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                  </svg>
                </div>
                <div className="data2">
                  <p>{paragraphText}</p>
                </div>
                <div className="infoArchivo2">
                  <button className="descargarBtn2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M280-280h400v-80H280v80Zm200-120 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
          <footer>Persona del mensaje</footer>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <Image alt="profile" className="lightbox-image" src={Picture} />

          <nav>
            <button onClick={toggleLightbox}>
              <svg
                className="close-ligth"
                xmlns="http://www.w3.org/2000/svg"
                height="210"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Conversation;
