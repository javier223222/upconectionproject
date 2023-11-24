import React from "react";
import Image from "next/image";
import Neo from "@/assets/profile.jpg";
import "@/css/descriptionforum.css"

const Description = (props) => {
  return (
    <div className="description-container">
      <div className="descripcion">
        <Image src={Neo} className="foro-picture"></Image>
        acá va el nombre
      </div>
      
      <div className="multimedia-container">
        <div className="multimedia">
            <div className="img-container">
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
