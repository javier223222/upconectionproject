import React from 'react'

import close from '@/assets/close.svg'
import Image from 'next/image'
const ModalContinue = props => {
  return (
    <>
    <div className='darkBGtwo'  />
    <div className='centered' >
      <div className='modaltwo '  >
    
       
        <div className='modalContent'>
        <div>
            <div>
                <span>Descartar cambios</span>
                <Image src={close} onClick={props.closedd}></Image>
            </div>
            <div></div>
            <div>
                <p>¿Seguro que quieres descartar los cambios?</p>
            </div>
            <div>
                <button onClick={props.closedd}>cancelar</button>
                <button onClick={props.closeAll}>descartar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}



export default ModalContinue