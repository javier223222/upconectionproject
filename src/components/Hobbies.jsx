'use client'

import React, { useState } from 'react'

import deleteicon from "../assets/delete.svg"
import Image from 'next/image'

const Hobbies = ({idhobbieof,nameHobbieof,deleteInteres}) => {
    const [interest,setInterest]=useState({idhobbie:idhobbieof,nameHobbie:nameHobbieof,showDelete:false})
    const change=()=>{
        setInterest(x=>{
            return {
                ...x,
                showDelete:!x.showDelete
            }
        })
    }

   
    
  return (
    <div className='containerexper' onMouseOut={change} onMouseOver={change} >
<div className='interesname'>

    <p  id={`${interest.idhobbie}`}>{interest.nameHobbie}</p>
</div>

    {
      interest.showDelete ?<div className='imagecontainer'><Image alt='' onClick={async()=>deleteInteres(interest.idhobbie)} src={deleteicon}></Image></div>:<div className='imagecontainer'></div>
    }
    
</div>
  )
}



export default Hobbies