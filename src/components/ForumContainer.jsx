
import React from "react";
import "@/css/forum.css";
import ForumsChart from "./ForumsChart";

const ForumContainer = (props) => {
  return (
    <div className="ForumContainer">
        <div className="titulo-contenedor">
        <h4 className="titulo-foros">FOROS</h4>
        </div>
 
      <div className="contenedor-foros">
        {
          props.forosd.map((x,i)=><ForumsChart key={i}  name={x.nameforo} idforo={x.idforo}></ForumsChart>)
        }
       

      </div>
    </div>
  );
};

export default ForumContainer;
