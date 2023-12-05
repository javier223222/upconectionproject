import { Grid } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import { getAnyProfile } from '@/apiconections'
import { useRouter } from 'next/navigation'

const ComentPost = (props) => {
  const navigation=useRouter()
    const [data,setData]=useState({username:props.username,token:props.token,userImage:null})
    useEffect(()=>{
       getImages()
    },[])
    const getImages=async()=>{
        const res=await getAnyProfile(`http://18.116.19.145/profile/profileimage?type=Profile&username=${data.username}`,data.token)
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
              
              ><div className='alinear-imagen-whit-coments'>
                
                <Image alt='profileCommentImg' onClick={()=>{navigation.push(`http://localhost:3000/user/${props.username}`)}} width={"60"} height={"60"} src={data.userImage!=null?data.userImage:acountCircle}></Image>
                <div className='contenedor-de-publicaiones-modal'>
                <div className='alinear-objetos'>
                <h4 onClick={()=>{navigation.push(`http://localhost:3000/user/${props.username}`)}} className='comentario-modal'> {props.username}</h4>
                <p className='comentario-modal'> {props.connent_Of_Comment}</p>
               
                </div>
                <h4 className='alejate'>{props.created_at}</h4>

                </div>
              </div>

          


              </Grid>
  )
}

export default ComentPost