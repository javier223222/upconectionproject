'use client'

import React, { useState } from 'react';
import ContenidoAmigos from '@/components/ContenidoAmigos';
import NoAmigos from '@/components/NoAmigos';
import ImagenNotPipul from './ImagenNotPipul';
import axios from 'axios';

const Amigos = ({ mostrarContenidoAmigos, mostrarContenidoSolicitudes,friends,friendRequest,tokens,acapetFriendReques,deleteFriendRequest }) => {
  const [friendAnrequest, setFriendAnrequest] = useState({
    friendssw: friends,
    friendRequestsw: friendRequest,
    token:tokens
  })
  
  const deleteFriend=async(idfriendship,iduserdelete)=>{
  const res=await axios.delete(`http://18.116.19.145/friends/?idfrienship=${idfriendship}&idfriendtodelete=${iduserdelete}`,{
  headers:{
    Authorization:friendAnrequest.token
  }
  })
  
  console.log(res.data)
      
    getfriends()
  }


  const getfriends=async()=>{
    const res=await axios.get("http://18.116.19.145/friends/",{
      headers:{
        Authorization:friendAnrequest.token
      }
    })
    setFriendAnrequest(x=>{
      return{
        ...x,
        friendssw:res.data.result
      }
    })

  }
  return (
    <div className='amigos'>
      <div className='recepcion'>
        {mostrarContenidoAmigos &&
          friendAnrequest.friendssw.length!=0 ? friendAnrequest.friendssw.map((x,i)=>{
             return <ContenidoAmigos key={i} iduser={x.idfriendone||x.idfriendtwo} idfrienship={x.idfriendship} deleteFriend={deleteFriend} name={x.name} 
             apellidop={x.apellidop} urlfile={x.urlfile} username={x.username} namemajor={x.namemajor} apellidom={x.apellidom} ></ContenidoAmigos>
          }):<></>   }
        {mostrarContenidoSolicitudes &&
         
         friendAnrequest.friendRequestsw.length!=0? friendAnrequest.friendRequestsw.map((x,i)=>{
          return <NoAmigos key={i} apellidop={x.apellidop} 
          apellidom={x.apellidom} 
           namemajor={x.namemajor}
           iduser={x.idSender}
           aceptRequest={acapetFriendReques}
           deletFriendRequest={deleteFriendRequest}
           urlfile={x.urlfile}
           idfrienship={x.idsendFriendShip}
            
            username={x.username} name={x.name} 
              ></NoAmigos>
         }):<></>
        
        }
      </div>
    </div>
  );
}

export default Amigos;

