import React from 'react'
import ImageProfile from './ImageProfile'


const ContainerImages = props => {
  const images=props.allImage?props.allImage.map((x,i)=><ImageProfile key={i} urlimage={x.urlfile}  ></ImageProfile>):null
  return (
    <div className='imagecontainer d-flex '>
        {images ? images : <></>}
    </div>
  )
}


export default ContainerImages