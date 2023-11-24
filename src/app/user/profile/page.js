
import React  from 'react'
import {cookies} from "next/headers"
import axios from 'axios'
import "@/css/Profile.css"
import FriendContainer from '@/components/FriendContainer'
import { getProfile, gettoken } from '@/helpers'


import PortImage from '@/components/PortImage'
import ProfileImage from '@/components/ProfileImage'
import Username from '@/components/Username'
import NameLastName from '@/components/NameLastName'
import Description from '@/components/DescriptionOfMyuser'
import ContainerExpOrInt from '@/components/ContainerExpOrInt'
import MajorAndNumberMajor from '@/components/MajorAndNumberMajor'
import ContainerHobbies from '@/components/ContainerHobbies'
import SocialMediaContainer from '@/components/SocialMediaContainer'
import ContainerImages from '@/components/ContainerImages'
import AddPublication from '@/components/AddPublication'
import { Grid } from '@mui/material'
import PostContainer from '@/components/PostContaainer'
import ImagesUsersameCon from '@/components/ImagesUsersameCon'
import FriendsContainerUser from '@/components/FriendsContainerUser'


const Profile = async (props) => {
  let  imageProfiles= []
  let  portImage={}
  let  description=[]
  let  experts=[]
  let  images=[]
  let hobbies=[]
  let name=null
  let optionsOfExpeOrIn=[]
  let interests=[]
  let socialmedia=[]
  let socialMediasOptions=[]
  
  const friend=await getProfile(`friends/?page=1&limit=2`)
    const res=await axios.get(`${process.env.GETALLSELECTEXI}`,{headers:{"Authorization": gettoken()}})
    hobbies=await getProfile("profile/hobbie")
    imageProfiles= await getProfile("profile/profileimage?type=Profile")
    portImage=await  getProfile("profile/profileimage?type=Port")
      description=await getProfile("profile/profiledescription")
    experts=await getProfile("profile/profilegetinteresofexpert/expertofus?expertOr=1")
      images=await getProfile("profile/getimagesprofile?page=1&limit=4")
      name=await getProfile("profile/getInformation")
      socialMediasOptions=await getProfile("profile/getsocialmediaoptions")
      optionsOfExpeOrIn=res.data
      interests=await getProfile("profile/profilegetinteresofexpert/expertofus?expertOr=0")
      socialmedia=await getProfile("profile/socialmedia")
      const posts=await getProfile(`publications/?type=Publicacion&idcategoria=1&page=1&limit=4`,gettoken())
   const apuntes=await getProfile(`publications/?type=Apunte&idcategoria=2&page=1&limit=4`,gettoken())

     
   //   console.log(imageProfiles)
    console.log(portImage)
    
    console.log(description)
    console.log( gettoken())
    console.log(name)
     console.log(experts)
     console.log(optionsOfExpeOrIn)
   //   console.log(images)
  
  console.log(name.apellidom)
  
  console.log(friend)
 
    
  console.log(name)
  //   console.log(imageProfiles)
   console.log(portImage)
   console.log(description)
   console.log( gettoken())
   console.log(name)
    console.log(experts)
    console.log(optionsOfExpeOrIn)
    console.log(interests)
    console.log(socialmedia)
  //   console.log(images)

  return (
    <div className='principalcontainer' >
      <div className='personaldatain'>
        
      {
    friend.result.length!=0? <Grid className='friendContainer'  item >
    <FriendsContainerUser token={gettoken()} username={name.username}  page={parseInt(friend.page)} totalPages={parseInt(friend.totalpages)} freinds={friend.result}></FriendsContainerUser>
  </Grid>:<Grid></Grid>
  }
        
        <div className='PersonalDataInformation'>
          <PortImage token={gettoken()} portImage={portImage.success? portImage.urlprofile:null} ></PortImage>
          <div className='informationandProfileConta'>
          <ProfileImage token={gettoken()} profileImage={imageProfiles.success?imageProfiles.urlprofile:"https://res-console.cloudinary.com/drquhxacx/media_explorer_thumbnails/5709ab75c74c53bf84d155dd918c1a2c/detailed"} ></ProfileImage>
          <Username  username={name.username}></Username>
          
          
          </div>

          <NameLastName token={gettoken()} name={name.name} apellidp={name.apellidop} apellidoM={name.apellidom}></NameLastName>
         <div className='aditionalInformation'>
          
         <Description token={gettoken()} class="description" description={description.description!=[]?description.description.description:null}></Description>
          <MajorAndNumberMajor token={gettoken()} namejor={name.namemajor} numbermajor={name.numersemster} adminEdit={true}></MajorAndNumberMajor>
         </div>
          
    
          
         
          <div className='containerssBox'>
          <AddPublication optionSelect={optionsOfExpeOrIn.result} token={gettoken()} username={name.username} imageuse={imageProfiles.urlprofile}>
        
        </AddPublication>
          <ContainerExpOrInt optionsSelect={optionsOfExpeOrIn.result} token={gettoken()} interestOrExpertceroOne={1} interestOrExpertArray={experts.result} interestOrExpert="Experto en :  "></ContainerExpOrInt>
          <ContainerExpOrInt optionsSelect={optionsOfExpeOrIn.result} token={gettoken()} interestOrExpertceroOne={0} interestOrExpertArray={interests.result} interestOrExpert="Interes en :  "></ContainerExpOrInt>
          <ContainerHobbies token={gettoken()} hobbies={hobbies.result} adminEdit={true}></ContainerHobbies>
          <SocialMediaContainer socialMediaOptions={socialMediasOptions.result} token={gettoken()} socialmedias={socialmedia.result} adminEdit={true} ></SocialMediaContainer>
         
          </div>
          
        </div>
        <div className='imagescontainer'>
        {
    images.result.length!=0? <Grid className="imagesAllContainer" item >
    <ImagesUsersameCon username={name.username} token={gettoken()} images={images?.result?images.result:[]} 
    pages={images?.page?parseInt(images.page):0} 
    totalPages={images?.totalpages?parseInt(images.totalpages):0}  ></ImagesUsersameCon>
  </Grid>:<Grid></Grid>

  }
          
        </div>

      </div>
      



      {
   posts.result.length!=0||apuntes.result.length!=0? 
    <Grid  sx={{flexGrow:1}} container spacing={2}>
           <Grid  item xs={12} >

<PostContainer username={name.username} token={gettoken()} 
allpublication={posts.result}
 allapuntes={apuntes.result} totalPagesPubl={posts.totalpages} totalPagesApu={apuntes.totalpages}
  pageApu={apuntes.page} pagepu={posts.page} imagende={imageProfiles.urlprofile} >


</PostContainer>
</Grid>
    </Grid>:<></>
    
  }

     
       
    </div>
  )
}

export default Profile