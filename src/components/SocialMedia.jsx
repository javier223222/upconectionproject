'use client'
import React, { useState } from 'react'
import deleteicon from "../assets/delete.svg"
import Image from 'next/image'
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import Link from 'next/link'
import twitter from "../assets/twitter.svg"
import tiktok from "../assets/tiktok.svg"
import edit from "../assets/edit.svg"
const SocialMedia = ({idsocialmediatwo,nameSocialMedia,deleteInteres,urlSocialMediatwo,updateLink,onlyshows}) => {
    const [interest,setInterest]=useState({idsocialmedia:idsocialmediatwo,namesocialmedia:nameSocialMedia,
        urlSocialMedia:urlSocialMediatwo,
        showDelete:false})
    const change=()=>{
      if(onlyshows==true){

      }else{
        setInterest(x=>{
          return {
              ...x,
              showDelete:!x.showDelete
          }
      })
      }
       
    }

   
    
  return (
    <div className='containerexper' onMouseOut={change} onMouseOver={change} >
      {
        interest.namesocialmedia=="facebook"?<Link href={interest.urlSocialMedia}><Image src={facebook}  ></Image> </Link>:<></>
      }
      {
        interest.namesocialmedia=="instagram"?<Link href={interest.urlSocialMedia}><Image src={instagram}  ></Image> </Link>:<></>
      }
      {
        interest.namesocialmedia=="twitter"?<Link href={interest.urlSocialMedia}><Image src={twitter}  ></Image> </Link>:<></>
      }
      {
        interest.namesocialmedia=="tiktok"?<Link href={interest.urlSocialMedia}><Image src={tiktok}  ></Image> </Link>:<></>
      }

  

    {
      interest.showDelete ?<div className='imagecontainer'><Image onClick={async()=>deleteInteres(interest.idsocialmedia)} src={deleteicon}></Image></div>:<div className='imagecontainer'></div>
    }
    {
      interest.showDelete ?<div className='imagecontainer'><Image onClick={()=>updateLink(interest.idsocialmedia)} src={edit}></Image></div>:<div className='imagecontainer'></div>
    }
    
</div>
  )
}


export default SocialMedia