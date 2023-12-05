import Image from 'next/image'
import React from 'react'


const ImagesPr = props => {
  return (
    <div>
        <Image alt='' src={props.image} width={"101"} height={"103"}></Image>
    </div>
  )
}



export default ImagesPr