import Friends from '@/components/FriendContainer'
import React from 'react'
import {cookies} from "next/headers"
import axios from 'axios'


const getTokenofme=()=>{
    const cokiestore= cookies()
    const hasCokokie= cokiestore.has('tokenUser')
    return hasCokokie?cokiestore.get("tokenUser").value:undefined
  
  }
const HomeFriends = async () => {
    const allFriends=await axios.get(`http://localhost:80/friends/`,{
        headers:{
            Authorization:getTokenofme()
        }
    })
    const allRequest=await axios.get("http://localhost:80/friends/requesteFriends",{
      headers:{
        Authorization:getTokenofme()
      }
    })
    console.log(allFriends.data)
    console.log(allRequest.data)
  return (
    <Friends requestfri={allRequest.data.result} token={getTokenofme()}  friends={allFriends.data.result}>

    </Friends>
  )
}

export default HomeFriends