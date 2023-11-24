import React, { useState } from 'react'
import editimage from "../assets/edit.svg"
import Image from 'next/image'



const NameOfUser = props => {
    const [edit,setEdit]=useState(false)

    const showEdit=()=>{
        setEdit(x=>!x)
    
    }

  return (
    <div className='editnames'  onMouseOver={showEdit} onMouseOut={showEdit}>
         <h4>{props.name}</h4>
         
          
                {
                     edit ?<div className='imageditnames'> <Image id={props.idselect} onClick={props.showModal} src={editimage}></Image></div>:<div className='imageditnames'></div>
                }
                
               
         
    </div>
  )
}



export default NameOfUser