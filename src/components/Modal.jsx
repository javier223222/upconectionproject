import React from 'react'
import close from '@/assets/close.svg'
import Image from 'next/image'

const Modal = props => {
  return (
    <>
    <div className='darkBG'  />
    <div className='centered' >
      <div className='modal'  >
    
       
        <div className='modalContent'>
               <div>
               <span>Actualizar foto de {props.nameupdate?props.nameupdate:'Perfil'}</span>
               {
                props.image?<Image src={close} alt='close' onClick={props.closeAnotherModal}></Image>:<Image src={close} alt='close' onClick={props.close}></Image>
               }
              
              
               </div>
               {
                    props.image?<div>
                        <label htmlFor='upload' className='select'>

                        <img  src={URL.createObjectURL(props.image)} width={"200"} height={"200"} alt='image'></img>
                            </label>
                      
                        
                    </div>:<div>
                         
                    <label htmlFor='upload' className='select'>Selecciona una imagen</label>
                    
                    </div>
                }
                <input id='upload' accept='image/*' type='file' onChange={props.uploadImage}  ></input>
                {
                  props.image? <button onClick={props.handelSubmit}>Actualizar</button>:<></>
                }
               
        </div>
      </div>
    </div>
  </>
  )
}



export default Modal