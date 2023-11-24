import { Grid } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import { getAnyProfile } from '@/apiconections'

const ComentPost = (props) => {
    const [data,setData]=useState({username:props.username,token:props.token,userImage:null})
    useEffect(()=>{
       getImages()
    },[])
    const getImages=async()=>{
        const res=await getAnyProfile(`http://localhost:80/profile/profileimage?type=Profile&username=${data.username}`,data.token)
        setData(x=>{
            return {
                ...x,
                userImage:res.urlprofile
            }
        })
       
    }
    


    
  return (
<Grid  item container
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              
              >
                <Image width={"60"} height={"60"} src={data.userImage!=null?data.userImage:acountCircle}></Image>
                <h4>{props.username}</h4>
                <p>{props.connent_Of_Comment}</p>
                <h4>{props.created_at}</h4>


              </Grid>
  )
}

export default ComentPost