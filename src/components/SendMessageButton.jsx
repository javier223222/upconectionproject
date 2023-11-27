'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const SendMessageButton = (props) => {
    const navigation=useRouter()
  return (
    <div> <button onClick={()=>{console.log(navigation.push(`/user/chatt/${props.idmensaage}`))}}  >Enviar mensaje</button> </div>
  )
}

export default SendMessageButton