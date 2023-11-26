
import "@/css/chatfriends.css"
import React from 'react'
import Image from "next/image"
import Persona from  "@/assets/persona.jpg"


const NavFriend = (props) => {
  return (
   <nav className="navfriends">
    <div className="contenedorImgAndTxt">
      {
        props.image=="null"?<Image className="usuarionav" width={"80"} height={"80"} src={Persona}/>: <Image className="usuarionav" width={"80"} height={"80"} src={props.image}/>
      }
   
<div className="centered">
<p>{props.name} {props.apellidop} {props.apellidom}</p>
</div>
 
    </div>


   </nav>
  )
}

export default NavFriend