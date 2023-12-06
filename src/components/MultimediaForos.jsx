"use client";
import React from "react";
import { useState } from "react";
import Persona from "@/assets/persona.jpg";

import "@/css/infoForos2.css";
import Image from "next/image";

const MultimediaForos = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const toggleLightbox = () => {
    setLightboxOpen(!lightboxOpen);
  };

  return (
    <>
      <Image alt="" className="multi" src={Persona} onClick={toggleLightbox} />

      {lightboxOpen && (
        <div className="lightbox">
          <button>
            <svg
              className="arrows"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </button>
          <Image alt="" className="lightbox-image" src={Persona} />

          <button>
            <svg
              className="arrows"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </button>

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

export default MultimediaForos;
