"use client"

import React, { useEffect, useState } from 'react'
import Friend from './Friend'

const FriendContainer =async (props) => {
  const [friends,setFrieds]=useState({})
  useEffect(()=>{
    setFrieds(
        props.friends
      
    )
    console.log(props.friends)
    setFrieds(x=>{
      return {
        ...x,
        informationFriend:x.result.map(y=><Friend name={y.name} apellidp={y.apellidop} apellidom={y.apellidom} username={y.username} imgaeFriend={y.urlfile}></Friend>)
      }
    })
    
    
  },[])
  return (
    <div className='friendContainer'>

      {
        friends.informationFriend
      }
       <button className='showfriends' > <div className='centFRINFbO'>
       {props.profile}
        </div>  </button>
    </div>
  )
}

export default FriendContainer