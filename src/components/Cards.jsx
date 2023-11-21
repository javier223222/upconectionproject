import React from "react";
import Link from "next/link";
import "@/css/cards.css";
import Image from "next/image";

const Cards = ({ link, svg, name }) => {
  return (
    <div className="card">
      <div className="svg">
        <Image src={svg} alt="" className="svg-card" />
      </div>
      <hr className="linea-2"></hr>
      <h4 className="tittle">{name}</h4>
      
    </div>
  );
};
export default Cards;
