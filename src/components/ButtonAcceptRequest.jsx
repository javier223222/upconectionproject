'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


const ButtonAcceptRequest = props => {
    const navigation=useRouter()
    const redirect=()=>{
        navigation.push(`http://3.21.236.240:3000/user/friends`)
    }

  return (
    <div>
        <button  onClick={redirect}>Aceptar la solicitud</button>
    </div>
  )
}



export default ButtonAcceptRequest