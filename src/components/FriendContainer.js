'use client'
import "@/css/FriendsPrincipal.css";
import Opciones_friends from '@/components/opciones_friends';
import Amigos from '@/components/amigos';
import React, { useState } from 'react';
import ContenidoAmigos from '@/components/ContenidoAmigos';
import NoAmigos from '@/components/NoAmigos';
import axios from "axios";


const Friends = (props) => {
  
  const [mostrarContenidoAmigos, setMostrarContenidoAmigos] = useState(true);
  const [mostrarContenidoSolicitudes, setMostrarContenidoSolicitudes] = useState(false);
  const [mostrarbusquedaAmigos, setMostrarbusquedaAmigos] = useState(false);
  const [friendsAndReque,setFriendsAndReque]=useState({
    friends:props.friends,
    requestfri:props.requestfri,
    token:props.token
  })
  const toggleContenidoAmigos = () => {
    setMostrarContenidoAmigos(true);
    setMostrarContenidoSolicitudes(false);
  };

  const toggleContenidoSolicitudes = () => {
    setMostrarContenidoAmigos(false);
    setMostrarContenidoSolicitudes(true);
  };
  
  const getRequestFriends=async()=>{
    const allRequest=await axios.get("http://18.116.19.145/friends/requesteFriends",{
      headers:{
        Authorization:friendsAndReque.token
      }
    })
    setFriendsAndReque(x=>{
      return{
        ...x,
        requestfri:allRequest.data.result
      }
    })

  }
  const getFriends=async()=>{
    const allFriends=await axios.get(`http://18.116.19.145/friends/`,{
      headers:{
          Authorization:friendsAndReque.token
      }
  })
  setFriendsAndReque(x=>{
    return{
      ...x,
      friends:allFriends.data.result
    }
  })
  }
  const accePtedFriend=async(id)=>{
    const allRequest=await axios.patch(`http://18.116.19.145/friends/`,{
      iduserNeFriend:id
    },{
      headers:{
        Authorization:friendsAndReque.token
      }
    })
    getRequestFriends()
    getFriends()
  }
  const deleteFriendRequest=async(id)=>{
    const allRequest=await axios.delete(`http://18.116.19.145/friends/deleterequest?idusede=${id}`,{
      headers:{
        Authorization:friendsAndReque.token
      }
    })
    getRequestFriends()
    getFriends()
  }

  return (
    <div>

      <div className='juntos'>
        <Opciones_friends
          toggleContenidoAmigos={toggleContenidoAmigos}
          toggleContenidoSolicitudes={toggleContenidoSolicitudes}
        />
        <Amigos acapetFriendReques={accePtedFriend} deleteFriendRequest={deleteFriendRequest}
        
         tokens={friendsAndReque.token} friends={friendsAndReque.friends} 
        friendRequest={friendsAndReque.requestfri}
          mostrarContenidoAmigos={mostrarContenidoAmigos}
          mostrarContenidoSolicitudes={mostrarContenidoSolicitudes}
        />
      </div>
    </div>
  );
}

export default Friends;
