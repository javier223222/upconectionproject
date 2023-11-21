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

    <p className='interesname' id={`${interest.idhobbie}`}>{interest.nameHobbie}</p>

    {
      interest.showDelete ?<div className='imagecontainer'><Image onClick={async()=>deleteInteres(interest.idhobbie)} src={deleteicon}></Image></div>:<div className='imagecontainer'></div>
    }
    
</div>
  )
}



export default Hobbies