import React from 'react'
import Img from "@/assets/NotPipul.svg"
import Image from 'next/image'
import "@/css/imagenpipul.css"

const ImagenNotPipul = () => {
  return (
    <div>
        <div className='centrar'>
        <Image className='imagenpipul' src={Img}/>
        </div>
   


    </div>
  )
}

export default ImagenNotPipul