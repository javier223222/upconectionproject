import Image from 'next/image'
import React from 'react'


const ImageProfile = props => {
  return (
    <div >
        <Image src={props.urlimage} width={"101"} height={"103"} alt='image of profile'></Image>
        
    </div>
  )
}


export default ImageProfile