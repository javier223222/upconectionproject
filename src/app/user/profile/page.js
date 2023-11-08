
import React  from 'react'
import {cookies} from "next/headers"
import axios from 'axios'
import "@/css/Profile.css"
import FirstSection from '@/components/FirstSection'

const gettoken= ()=>{
  const cokiestore=cookies()
  const hasCokokie=cokiestore.has('tokenUser')

  return hasCokokie?cokiestore.get("tokenUser").value:undefined

  
}
const headers=  {
  "Authorization":gettoken()
}
const getImageProfile=async(type,url)=>{
  
 
  const res=await axios.post(`${process.env.API_GETIMAGEPORFILE}`,{type:type},{
    headers
  })
   return res.data
}

const getProfile=async (url)=>{

  const res=await axios.get(`${process.env.API_GETPROFILE}${url}`,{
      headers
  })
  return res.data

}


const Profile = async (props) => {
  let  imageProfiles= []
  let  portImage=[]
  let  description=[]
  let  experts=[]
  let  images=[]
  let name=null
  
     imageProfiles= await getProfile("profile/profileimage?type=Profile")
  //   portImage=await getImageProfile("Port")
     description=await getProfile("profile/profiledescription")
  //  experts=await getProfile("profile/profilegetinteresofexpert/expertofus?expertOr=1")
     images=await getProfile("profile/getimagesprofile?page=1&limit=4")
     name=await getProfile("profile/getInformation")
     console.log(name)
  //   console.log(imageProfiles)
  //   console.log(portImage)
   console.log(description)
  //   console.log(experts)
  //   console.log(images)
 
 

  return (
    <div className='profilesection'>
    <FirstSection 
    token={gettoken()}
    allImage={images}
     experts={experts?.result?experts.result:[]} 
     description={description?.description?description.description.description:''} 
     imageProfiles={imageProfiles?.urlprofile?imageProfiles.urlprofile:""} 
     portImage={portImage?.urlprofile?portImage.urlprofile:""}
     username={ name.success? name.username:''} 
     name={name.success? name.name:''} apelldiop={name.success?name.apellidop:''} apellidoM={name.success?name.apellidom:''}></FirstSection>
     
    </div>
  )
}

export default Profile