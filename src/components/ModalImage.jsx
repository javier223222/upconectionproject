import Image from 'next/image'
import React from 'react'
import close from '@/assets/close.svg'

const ModalImage = props => {
  return (
    <>
    <div className='darkBGtwo'  />

    <div className='centered' >
    <Image alt='' src={close} onClick={props.closeImage} ></Image>
      <div className='modalthree '  >
    
       
        <div className='modalContent'>
        <Image alt='' src={props.img} width={"500"} height={"300"}></Image>
        </div>
      </div>
    </div>
  </>
  )
}



export default ModalImage