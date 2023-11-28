'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const ReFriends = (props) => {
  const navigation=useRouter()
  const [idfriendship,setIdfriendship]=useState(
  {
    token:props.token,
    idfriendship:props.idrecives
  }
  )
  const deleteFriend=async()=>{

  const deletemyRequest=await axios.delete(`http://18.116.19.145/friends/deleteSendRequest?idrecives=${idfriendship.idfriendship}`,{
    headers:{
        Authorization:idfriendship.token
    }
  })
    navigation.refresh()
  }
  return (
    <div><button onClick={deleteFriend}>Cancelar solicitud</button></div>
  )
}

export default ReFriends