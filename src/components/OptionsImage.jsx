
import Image from 'next/image'
import React from 'react'
import accountbox from '@/assets/accountbox.svg' 
import upload from "@/assets/upload.svg"
const OptionsImage = (props) => {

  return (
    <div>
        <div onClick={props.showallimage}>
          {
            props.containsImage?<><Image src={accountbox} alt='accountbox'></Image>
            <p> Ver foto de perfil</p></>:<></>
          }

          
        </div>
        <div onClick={props.addImage}>
          <Image src={upload} alt='upload'></Image>
         <p>Actualizar Imagen</p>
        </div>
    </div>
  )
}

export default OptionsImage