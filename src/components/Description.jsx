import React from "react";
import Image from "next/image";
import Neo from "@/assets/profile.jpg";
import "@/css/descriptionforum.css"

const Description = (props) => {
  return (
    <div className="description-container">
      <div className="descripcion">
      <img src={props.imageforo}  className="foro-picture"></img>
        {props.description}
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
