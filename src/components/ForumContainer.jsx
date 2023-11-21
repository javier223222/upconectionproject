import React from "react";
import "@/css/forum.css";
import ForumsChart from "./ForumsChart";

const ForumContainer = (props) => {
  return (
    <div className="ForumContainer">
        <div className="titulo-contenedor">
        <h4>FOROS</h4>
        </div>
 
      <div className="contenedor-foros">
        <ForumsChart/>

      </div>
    </div>
  );
};

export default ForumContainer;
