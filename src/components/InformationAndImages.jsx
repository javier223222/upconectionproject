'use client'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import acountCircle from '@/assets/acountcircle.svg'
import React from 'react'
import SocialMedia from './SocialMedia'
import sqlImage from "@/assets/sql.svg"
import flutterImage from "@/assets/flutter.svg"
import springImage from "@/assets/spring.svg"
import { useRouter } from 'next/navigation'

const InformationAndImages = props => {

    


  return (
    <Box sx={
      {
        width: '100%',
      }
    }>
      <Grid className='imageascontainer'  container direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={7} >
        
          <Grid  container direction={"row"} alignItems={"center"} justifyContent={"center"} xs={1} item spacing={0.1}>
          {
            props.imagesSucces?<Image className='profilei' src={props.imagenprofile} height={"80"} width={"80"}></Image>:<Image className='profilei'  height={"80"} width={"80"} src={acountCircle}></Image>
          }
          </Grid>
         <Grid item container direction={"row"} alignItems={"center"} justifyContent={"center"} xs={10} spacing={1}>
         {
            props.imagesSuccespro?<Image  className='back' src={props.imagenport} height={"300"} width={"300"}></Image>:<div className='back css-eiir0b' ></div>
          }
         </Grid>
         <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"} xs={1} item >
              <h2>{props.username}</h2>
              <Grid direction={"row"}>
              <span>{props.name} {props.apellidop} {props.apellidoM}</span>
              </Grid>
              
              
         </Grid>
          
        
      </Grid>
      <Grid className='imageascontainer' container direction={"row"} alignItems={"start"} justifyContent={"center"} spacing={0.1}   >
        <Grid item  xs={6} container direction={"row"} alignItems={"center"} justifyContent={"center"}>
           {props.description!=null?<span>{props.description}</span>:<span>no hay descripcion</span>}
        </Grid>
        <Grid item   xs={6} container direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <span>{props.namemajor} {props.numbermajor}</span>
        </Grid>
        <Grid item  xs={6} container direction={"row"} alignItems={"center"} justifyContent={"end"}>
        
        
          </Grid>
         
      </Grid>
 

      <Grid container  justifyContent="space-evenly"
  alignItems="center" direction="column" spacing={2} marginTop={"0.5rem"} gap={"0.7rem"} >
    {
      props.experts!=0? <Grid className='expertoContainer' container   item>
      <Grid item container spacing={1}>
         <h4>Experto en:</h4>
      </Grid>
    <Grid item   container
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start" gap={"0.7rem"} marginBottom={"0.2rem"} spacing={0.5}>
        { props.experts.length!=0 ? props.experts.map((x,i)=>{return <Grid xs={4} className='borderPink' key={i} item>
          {x.namefininteorexpert} {x.namefininteorexpert=="Lenguaje sql"?<Image width={"37"} height={"25"} src={sqlImage}></Image>:<></>}  {x.namefininteorexpert=="Flutter"?<Image width={"37"} height={"25"} src={flutterImage}></Image>:<></>}  {x.namefininteorexpert=="spring"?<Image width={"37"} height={"25"} src={springImage}></Image>:<></>}
           </Grid>}):<Grid item></Grid>
        }
      </Grid>
    </Grid>:<></>
    }


    {
     props.interests.length!=0 ?  <Grid className='expertoContainer' container   item>
     <Grid item container spacing={1}>
      <h4>Le Interesa :</h4>
     </Grid>
     <Grid   item   container
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start" gap={"0.7rem"} marginBottom={"0.2rem"} spacing={0.5}>
 {
   props.interests.length!=0 ? props.interests.map((x,i)=>{return <Grid xs={4} className='borderPink' key={i} item>
   {x.namefininteorexpert} {x.namefininteorexpert=="Lenguaje sql"?<Image width={"37"} height={"25"} src={sqlImage}></Image>:<></>}  {x.namefininteorexpert=="Flutter"?<Image width={"37"} height={"25"} src={flutterImage}></Image>:<></>}  {x.namefininteorexpert=="spring"?<Image width={"37"} height={"25"} src={springImage}></Image>:<></>}
    </Grid>}):<Grid item></Grid>
 }

     </Grid>
   </Grid>:<></>
    }

    {
      props.hobbies.length !=0?<Grid className='expertoContainer'  container   item >
      <Grid item container spacing={1}>
      <h4>Hobbies:</h4>
      </Grid>
    <Grid item   container
direction="row"
justifyContent="space-evenly"
alignItems="flex-start" gap={"0.7rem"} marginBottom={"0.2rem"} spacing={0.5}>
   {
        props.hobbies.length!=0 ? props.hobbies.map((x,i)=>{return <Grid  xs={4} className='borderPink'  key={i} item>{x.namehobbie}</Grid>}):<Grid item></Grid>
     }
  </Grid>
    
    </Grid>:<></>
    }
   

     


    {
      props.socialmedia.length!=0?<Grid className='expertoContainer'  container   item>
      <Grid item container spacing={1}>
        <h4>Redes sociales</h4>
      </Grid>
    <Grid  item   container
direction="row"
justifyContent="space-evenly"
alignItems="flex-start" gap={"0.7rem"} marginBottom={"0.2rem"} spacing={0.5}>
   {
        props.socialmedia.length!=0 ? props.socialmedia.map((x,i)=>{return <SocialMedia urlSocialMediatwo={x.usrlsocialmedia} onlyshows={true} nameSocialMedia={x.nameofsocialmedia}></SocialMedia>}):<Grid item></Grid>

}
  
  </Grid>
   
    
   
    </Grid>:<></>
    }
      

      
      </Grid>

      
          
       
      
    </Box>
  )
}



export default InformationAndImages