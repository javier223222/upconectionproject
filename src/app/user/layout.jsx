import React from 'react'
import "@/css/Navbar.css"

import hamburguer from "@/assets/menu.svg"
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
  const res=await axios.get(`${process.env.API_GETIMAGEPORFILE}?type=Profile`,{
    headers:{
      "Authorization":gettoken()
    }
  })
   return res.data
}

const HomeLayaout =async ({children}) => {

   const profileImage=await getImageProfile()
   const name=await getProfile("profile/getInformation",gettoken())
  console.log(gettoken())

  return (
    <>
   
    <Navbar nameofuser={name?.name?name.name:null} token={gettoken()} hamburguer={hamburguer} profileImage={profileImage?.urlprofile?profileImage:null}></Navbar>
    {children}
    </>
  )
}

export default HomeLayaout