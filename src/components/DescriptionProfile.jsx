import React from 'react'
import PortImage from './PortImage'
import PerfilImage from './PerfilImage'
import Image from 'next/image'
import ProfileDescription from './ProfileDescription'
import ExperTOrAprendi from './ExperTOrAprendi'
import accountbox from '@/assets/accountbox.svg' 
import upload from "@/assets/upload.svg"

const DescriptionProfile = props => {
  return (
    <div className='descriptionProfile' >
        <Image  src={props.portImage} width={"800"} height={"200"} ></Image>
        <PerfilImage onClick={props.selectOption} urlimage={props.urlimage}></PerfilImage>
        <div>
           <h1>{props.username?props.username:''}</h1>
          <h2>{props.username?`${props.name} ${props.apelldiop} ${props.apellidoM} `:''}</h2>
         </div>
        <ProfileDescription profileDescription={props.profileDescription}></ProfileDescription>
       <ExperTOrAprendi expertorinterest={props.expertorinterest} expertorinterestti="Experto"></ExperTOrAprendi>

       {
            props.elemetsre?<div>    {
              props.urlimage?<div><Image src={accountbox} alt='accountbox'></Image>
              <p> Ver foto de perfil</p></div>:<></>
            }
            <div>
              <Image src={upload} alt='upload'></Image>
             <p>Actualizar Imagen</p>
            </div>
            
   </div>:<></>
        }
    </div>
  )
}



export default DescriptionProfile