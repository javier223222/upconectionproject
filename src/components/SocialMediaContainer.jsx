'use client'

import React, { useState } from 'react'
import Hobbies from './Hobbies'
import SocialMedia from './SocialMedia'
import ModalOneInputs from './ModalOneInputs'
import ModalAddSocialMedia from './ModalAddSocialMedia'
import { deleteProfile, getProfileClientSide, postProfile, updateProfile } from '@/helpers/client_side'


const SocialMediaContainer = props => {
    const [socialmedias,setSocialmedias]=useState({socialmedias:props.socialmedias,showMoDall:false,token:props.token,
      socialMediaOptions:props.socialMediaOptions,optionsSelect:props.socialMediaOptions[0].idsocialmedia,urlSocialMedia:'',editOpne:false})

    const openModal=()=>{
        setSocialmedias(x=>{
            return{
                ...x,
                showMoDall:!x.showMoDall
            }
        })
    }
    const headers=  {
      "Authorization": socialmedias.token
    }
    const cancel=()=>{
       openModal()

       setSocialmedias(x=>{
        return{
            ...x,
            urlSocialMedia:'',
            optionsSelect:x.socialMediaOptions[0].idsocialmedia
        
       }})
    }
    const onInputChange=(e)=>{
      const {name,value}=e.target
        setSocialmedias(x=>{
            return{
                ...x,
                [name]:value
            }
        })
    }
    const save=async()=>{
       try{
         if(socialmedias.urlSocialMedia==''){
           alert("Ingrese la url de la red social")
           openModal()
           return
         }
         const addSocialMedia=await postProfile("profile/socialmedia",{idoption:socialmedias.optionsSelect,link:socialmedias.urlSocialMedia},headers)
         const getSocialMedias=await getProfileClientSide("profile/socialmedia",headers)
          setSocialmedias(x=>{
            return{
              ...x,
              socialmedias:getSocialMedias.result,
              urlSocialMedia:'',
              optionsSelect:x.socialMediaOptions[0].idsocialmedia
            }
          })

       }catch(e){
        alert("Esta red social ya existe")
       }

       openModal()
    }
    const deleteSocialMedia=async(idinteresOf)=>{
      const deleteSocialMedia=await deleteProfile(`profile/socialmedia?idsocialmedia=${idinteresOf}`,headers)
      const getSocialMedias=await getProfileClientSide("profile/socialmedia",headers)
      setSocialmedias(x=>{
        return{
          ...x,
          socialmedias:getSocialMedias.result
        }
      })


    }

    const openEdit=()=>{
      setSocialmedias(x=>{
        return{
          ...x,
          editOpne:!x.editOpne
        }
      })

    }
    const edit=(idinteresOf)=>{
      openEdit()
      setSocialmedias(x=>{
        return{
          ...x,
          optionsSelect:idinteresOf
        }
      })

    }
  
   const closeEdit=()=>{
    openEdit()
    setSocialmedias(x=>{
      return{
        ...x,
        urlSocialMedia:'',
        optionsSelect:x.socialMediaOptions[0].idsocialmedia
      }
    })
   }
   const UpdateSocialMedia=async()=>{
           const update=await updateProfile("profile/socialmedia",{idsocialmedia:socialmedias.optionsSelect,nelink:socialmedias.urlSocialMedia},headers)

            const getSocialMedias=await getProfileClientSide("profile/socialmedia",headers)

            setSocialmedias(x=>{
              return{
                ...x,
                socialmedias:getSocialMedias.result,
                
              }
            })

            setSocialmedias(x=>{
              return{
                ...x,
                urlSocialMedia:'',
                optionsSelect:x.socialMediaOptions[0].idsocialmedia
              }
            })
            closeEdit()
   }
  return (
    <div className={`boxexpertOrInteres   ${props.class}`}>
    <h5 className='boxexpertOrinteresTitle'>Redes sociales:</h5>
    <div className='interestOrExperts'>
     
      {
        socialmedias.socialmedias!=[]?socialmedias.socialmedias.map(x=>{ return  <SocialMedia updateLink={edit} deleteInteres={deleteSocialMedia} idsocialmediatwo={x.idsocialmediofuser} urlSocialMediatwo={x.usrlsocialmedia} nameSocialMedia={x.nameofsocialmedia}></SocialMedia>}):<></>
      } 
    
    
    </div>
    {props.adminEdit?   <div className='anadicontainer'>

<button className='anadir' onClick={openModal}>Añadir</button>

</div>:<></>}
<ModalAddSocialMedia save={save} name="urlSocialMedia" onInputChange={onInputChange} 
options={socialmedias.socialMediaOptions}  cancel={cancel} shwoModal={socialmedias.showMoDall}></ModalAddSocialMedia>
<ModalOneInputs save={UpdateSocialMedia} cancel={closeEdit} nameOFEditfEdit={socialmedias.urlSocialMedia} nameOFeditFirsContent=""  shwoModal={socialmedias.editOpne} placeholder="Agregar la nueva url" name="urlSocialMedia" onInputChange={onInputChange} ></ModalOneInputs>
 
</div>
  )
}


export default SocialMediaContainer