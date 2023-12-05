'use client'

import React, { useState } from 'react'
import ImagesPr from './ImagesPr'


const ContainerImages = (props) => {
    const [media,setMedia]=useState({images:props.media,totalpages:props.totalpages,currentPage:props.page})

  return (
    <div className='imagesContainer'>
     <div className='allImages'>
        {media.images!=[]?media.images.map((x,i)=>{return <ImagesPr key={i} image={x.urlfile}></ImagesPr>}):<></>}
     </div>
     {
        media.currentPage<media.totalpages?<button className='showfriends'>Ver mas</button>:<></>
     }
           
   

    </div>
  )
}

export default ContainerImages