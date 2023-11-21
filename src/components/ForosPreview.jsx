'use client'
import React, { useState } from "react";
import Image from "next/image";
import Prueba from "@/assets/persona.jpg";
import "@/css/previewChat.css";

const ForosPreview = ({ onChatClick }) => {
  return (
    <div className="foros-preview" onClick={onChatClick}>
      <div className="name">nombre del foro</div>
    </div>
    

    // <button className="foros-preview" onClick={onChatClick}>
    //   <h4>NOmbre del foro</h4>
    // </button>
  );
};

export default ForosPreview;