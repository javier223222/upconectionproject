import { Grid } from '@mui/material'
import React from 'react'
import {cookies, headers} from "next/headers"
import axios from 'axios'
import AddPublication from '@/components/AddPublication'
import PostOfMyFriendsContainer from '@/components/PostOfMyFriendsContainer'

const getTokenofme=()=>{
  const cokiestore= cookies()
  const hasCokokie= cokiestore.has('tokenUser')
  return hasCokokie?cokiestore.get("tokenUser").value:undefined

}



const HomepageUser = async (props) => {
  let optionsOfExpeOrIn=[]
  let name=null
  let  imageProfiles= []
  let publicationsOFmyFriends=[]
  const res=await axios.get(`http://18.116.19.145/profile/profileimage?type=Profile`,{
    headers:{
     Authorization:getTokenofme()
    }
    
  })
  imageProfiles=res.data
  const restwo=await axios.get('http://18.116.19.145/profile/profilegetinteresofexpert',{
    headers:{
      Authorization:getTokenofme()
    }
  }) 
  optionsOfExpeOrIn=restwo.data

  const resThree=await axios.get('http://18.116.19.145/profile/getInformation',{
    headers:{
      Authorization:getTokenofme()
    }
  })
  const resFour=await axios.get(`http://18.116.19.145/publications/friendsPublications?limit=5&page=1`,{
    headers:{
     Authorization:getTokenofme()
    }
})
console.log(resFour.data)
  name=resThree.data
  publicationsOFmyFriends=resFour.data
  return (
    <div>
         <Grid 
           marginTop={"1rem"}
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start" >
              <Grid item xs={12} >
              <AddPublication optionSelect={optionsOfExpeOrIn.result} token={getTokenofme()} username={name.username} imageuse={imageProfiles.urlprofile}>
        </AddPublication>

                </Grid>

         </Grid>

         <Grid 
          container 
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={12}
          gap={"2rem"}
         >
          <PostOfMyFriendsContainer allPublicationOfMyfriend={publicationsOFmyFriends.result}
           page={publicationsOFmyFriends.currentPage} tokenU={getTokenofme()}>

          </PostOfMyFriendsContainer>



          

         </Grid>

    </div>
  )
}



export default HomepageUser