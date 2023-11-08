'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import OptionsImage from './OptionsImage'
import Modal from './Modal'
import ModalContinue from './ModalContinue'
import axios from 'axios'
import ModalImage from './ModalImage'

const ProfileImage = props => {
    const [element,setElement]=useState({
        profileImage:'',
        show:false,
        image:null,
        modal:false,
        anotherModal:false,
        token:props.token,
        profileImageModal:false
    })
    const showElections=()=>{
        setElement(x=>{
            return{
                ...x,
                show:!x.show
            }
        })
    }
    const showallimage=()=>{
        setElement(x=>{
            return{
                ...x,
                profileImageModal:!x.profileImageModal
            }
        })
    }
    useEffect(()=>{
     setElement(x=>{
        return{
            ...x,
            profileImage:props.profileImage?props.profileImage:''
        }
     })
     setElement(x=>{return{
        ...x,
        token:props.token
       }})

       console.log(props.token)
    },[])

    const uploadImage=(e)=>{
         setElement(x=>{
             return{
                 ...x,
                 image:e.target.files[0]
             }
         })
         console.log(e.target.files[0])
    }
    const handelSubmit=async()=>{
 

     
        const formData=new FormData()
        formData.append('imagenprofile',element.image)
        console.log(element.token)
        formData.append('type','Profile')
        const res=await axios.post(`http://localhost:80/profile/profileimage`,formData,{
            headers:{
                "Authorization":element.token
            }
        })
        console.log(res.data)
      

        const resr=await axios.get(`http://localhost:80/profile/profileimage?type=Profile`,{
            headers:{
              "Authorization":element.token
            }
          })

          console.log(resr.data)
          if(resr.data?.urlprofile){
            setElement(x=>{return{
                ...x,
                profileImage:resr.data
            }})
          }
          close()
   

    }
    const close=()=>{
        setElement(x=>{
            return{
                ...x,
                modal:false,
                image:null
            }
        })
    }

    const closeAnotherModal=()=>{
        setElement(x=>{
            return{
                ...x,
                anotherModal:!x.anotherModal
            }
        })
    }

    const addImage=()=>{
        setElement(x=>{return{
            ...x,
            show:false,
            modal:true
        }})
    }
    const closeAll=()=>{
        closeAnotherModal()
        close()
        
    }

    
    
  return (
    <>
    <div className='containerImgPro'>

   
    <Image onClick={showElections} src={element.profileImage==''?acountCircle:element.profileImage.urlprofile} 
    className='imageuser'  width={"60"} height={"60"} alt='profile-image' ></Image>
     <span className='spanuser'>{props.nameofuser?props.nameofuser:''}</span>

    </div>
    <div>

    {
        element.show?
       <OptionsImage showallimage={showallimage} addImage={addImage} containsImage={element.profileImage!=''?true:false}></OptionsImage>
        :<></>
    }
    {
        element.modal?<Modal handelSubmit={handelSubmit} closeAnotherModal={closeAnotherModal} close={close} uploadImage={uploadImage} image={element.image}></Modal>:<></>
    }
    {
        element.anotherModal?<ModalContinue closeAll={closeAll} closedd={closeAnotherModal} close={close} ></ModalContinue>:<></>
    }
    {
        element.profileImageModal?<ModalImage closeImage={showallimage} img={element.profileImage.urlprofile}></ModalImage>:<></>
    }

     </div>
     </>
  )
}



export default ProfileImage