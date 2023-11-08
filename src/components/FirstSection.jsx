'use client'
import React, { useEffect, useState } from 'react'
import FriendsContainer from './FriendsContainer'
import DescriptionProfile from './DescriptionProfile'
import ContainerImages from './ContainerImages'
import { postConection } from '@/apiconections'


const FirstSection = props => {
    const [elemets,setElements]=useState({
        urlImageProfile:"",
        portImage:"",
        description:"",
        expert:[],
        images:[],
        pages:0,
        uploadImage:null,
        token:'',
        modalUpdataImage:false,
        modalShowImgaes:false,
        modalconfirm:false,
        opciones:false
    })
    const addImage=async()=>{
        const formData = new FormData()
        formData.append('imagenprofile',elemets.uploadImage)
        formData.append('type','Profile')
        const res=await postConection("profile/profileimage",elemets.token,formData)

        console.log(res)
        
    }
    
    const showImage=()=>{
        setElements(x=>{return{...x,modalShowImgaes:!x.modalShowImgaes}})
    }
    const shownUpdateImage=()=>{
        setElements(x=>{return{...x,modalUpdataImage:!x.modalUpdataImage}})
    }
    const modalConfig=()=>{
        setElements(x=>{return{...x,modalconfirm:!x.modalconfirm}})
    }
    const showOptions=()=>{
        setElements(x=>{return{...x,opciones:!x.opciones}})
    }
    const updateImage=(e)=>{
        setElements(x=>{return{...x,uploadImage:e.target.files[0]}})
    }

    

    useEffect(()=>{
        setElements(x=>{return{...x,urlImageProfile:props.imageProfiles}})
        setElements(x=>{return{...x,portImage:props.portImage}})
        setElements(x=>{return{...x,description:props.description}})
        setElements(x=>{return{...x,expert:props.experts}})
        setElements(x=>{return {...x,images:props.allImage.result}})
        setElements(x=>{return {...x,pages:props.allImage.totalpages}})
        setElements(x=>{return {...x,token:props.token}})
        
       
    },[])

    
  return (
 
 <div className='profilesection'>
        <FriendsContainer></FriendsContainer>
        <DescriptionProfile elemetsre={elemets.opciones} selectOption={showOptions} username={props.username} 
         name={props.name} apelldiop={props.apelldiop} apellidoM={props.apellidoM}
         expertorinterest={elemets.expert}
          profileDescription={elemets.description}
           portImage={elemets.portImage}  urlimage={elemets.urlImageProfile}  ></DescriptionProfile>
        <ContainerImages allImage={elemets.images}></ContainerImages>
     
 </div>
   
  )
}


export default FirstSection