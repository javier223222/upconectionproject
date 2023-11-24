
import "@/css/chatfriends.css"
import React from 'react'
import Image from "next/image"
import Persona from  "@/assets/persona.jpg"


const NavFriend = () => {
  return (
   <nav className="navfriends">
    <div className="contenedorImgAndTxt">
    <Image className="usuarionav" src={Persona}/>
<div className="centered">
<p>Jose Luis Estrada Pineda.</p>
</div>
 
    </div>


   </nav>
  )
}

export default NavFriend