import React from "react";
import "@/css/Cuadros.css";
import Square from "./Square";
import Squaretwo from "./Squaretwo";

const Background = (props) => {
  return (
    <div className="contenedor-cuadros">
      <Square />
      <Squaretwo />
    </div>
  );
};

export default Background;
