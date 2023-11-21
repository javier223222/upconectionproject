import React from "react";
import NewNav from "@/components/NewNav";
import Image from "next/image";
import "@/css/account.css";
import SignIn from "@/assets/Girl-Sign-in.svg";
import Contenido from "@/components/Contenido";
import post from "@/assets/Publish-post.svg"

 const Publicaciones = (titulo,descripcion, svg) => {
  return (
<div>
      <NewNav />
      <div className="container">
        <div className="contenedor">
          <div className="aa">
            <Contenido titulo={"Publicaciones"} descripcion={"holaa"} />
            
              <li>Hacer click en hacer nueva publicación</li>
              <li>
                {" "}
                Elegir el tipo de publicación
              </li>
              <li>
                Elegir la categoría de la publicación. ( normal o apuntes) 
              </li>
              <li>Escribir el contenido</li>
              <li>Agregar imagen o documento (opcional).</li>

          </div>
        </div>
        <div>
          <Image src={post} alt="" className="svg" />
        </div>
      </div>
    </div>
  );
}
export default Publicaciones