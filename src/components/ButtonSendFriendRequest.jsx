'use client'
import axios from 'axios'
import React, { useState } from 'react'

const ButtonSendFriendRequest = (props) => {
    const [idfriendship,setIdfriendship]=useState({
        token:props.token,
        idrecives:props.idrecives
    })
    const sendFriendRequest=async()=>{
        const res=await axios.post("http://localhost:80/friends/",{iduserfrie:idfriendship.idrecives},{
            headers:{
                Authorization:idfriendship.token
            }
        })
        console.log(res.data)
    }
    
    
  return (
    <div><button onClick={sendFriendRequest}>Agregar amigo</button></div>
  )
}

export default ButtonSendFriendRequest