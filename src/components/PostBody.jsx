import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import Image from 'next/image'
import { getAnyProfile, getProfile } from '@/apiconections'


const Post = ({imageuse,username,contentOfPublication,idpublication,token}) => {
  const [imagePublication,setImagePublication]=useState({image:null,idpublicacion:idpublication,tokenp:token})

  useEffect(()=>{
    getImages()
  },[])
  const getImages=async()=>{
    
    const res=await getAnyProfile(`http://localhost:80/publications/getmediapublications?idpublicacion=${imagePublication.idpublicacion}`,token)
    setImagePublication(x=>{
      return {...x,image:res.result.length!=0?res.result[0].urlfile:null}
    
    })
  }
    
  return (
    <Paper  sx={{
        p: 2,
        margin: 'auto',
        width: '50%',
      
        flexGrow: 1,
       
     
      }}   elevation={4}>
     
     <Grid container spacing={2}>
        <Grid item  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start"  >
          <Image style={{borderRadius:"50px"}} width={"60"} height={"60"} src={imageuse!=null||imageuse!=undefined?imageuse:acountCircle}></Image>
          <h4> {username}</h4>

                  
        </Grid>
        <Grid  item  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start" >
           <p>{contentOfPublication}</p>
        </Grid>

        <Grid 
        item   container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          {
            imagePublication.image!=null?<Image width={"400"} height={"400"} src={imagePublication.image}></Image>:<></>
          }
        </Grid>

     </Grid>
     
    </Paper>
  )
}



export default Post