import Image from 'next/image'
import React from 'react'


const ImagesPr = props => {
  return (
    <div>
        <Image src={props.image} width={"101"} height={"103"}></Image>
    </div>
  )
}



export default ImagesPr