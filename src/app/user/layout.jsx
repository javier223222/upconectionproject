import React from 'react'
import "@/css/Navbar.css"

import hamburguer from "@/assets/conect.svg"
import Image from 'next/image'
import {cookies} from "next/headers"
import axios from 'axios'
import ProfileImage from '@/components/ProfileImage'
import Navbar from '@/components/Navbar'
import { getProfile } from '@/apiconections'
const gettoken= ()=>{
  const cokiestore=cookies()
  const hasCokokie=cokiestore.has('tokenUser')

  return hasCokokie?cokiestore.get("tokenUser").value:undefined

  
}
const getImageProfile=async()=>{
  
  console.log(gettoken())
  const res=await axios.get(`http://localhost:80/profile/profileimage?type=Profile`,{
    headers:{
      "Authorization":gettoken()
    }
  })
   return res.data
}
const getInformation=async()=>{
  const res=await axios.get(`http://localhost:80/profile/getInformation`,{
    headers:{
      Authorization:gettoken()
    }
  })
  return res.data
}

const HomeLayaout =async ({children}) => {

   const profileImage=await getImageProfile()
   const name=await getInformation()
   console.log(profileImage)
  console.log(gettoken())

  return (
    <>
   
    <Navbar nameofuser={name.username}
     token={gettoken()} hamburguer={hamburguer} 
     profileImage={profileImage.urlprofile}></Navbar>
    {children}
    </>
  )
}

export default HomeLayaout