'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ShowOrUpdateImg from './ShowOrUpdateImg'
import ModalShowImage from './ModalShowImage'
import ModalShowAddImage from './ModalShowAddImage'
import { getProfileClientSide, postProfile } from '@/helpers/client_side'

const PortImage = (props) => {
    const [image,setimage]=useState(null)
    useEffect(()=>{
     setimage(props.portImage)
    },[])
    const [edit,setEdit]=useState({showoptions:false,modalShowImage:false,openEditImage:false,image:null,imageToShow:null,token:props.token
    })

    const headers=  {
      "Authorization": edit.token
    }
    
   const openModalShowImage=()=>{
        setEdit(x=>{
            return{
                ...x,
                modalShowImage:!x.modalShowImage
            }
        })
   }
   const openAndCloseOptions=()=>{
    openModalShowImage()
    openOptions()
   }

    const openOptions=()=>{
        setEdit(x=>{
            return{
                ...x,
                showoptions:!x.showoptions
            }
        })
    }
    const cancel=()=>{
        openEditImage()
        setEdit(x=>{
          return{
              ...x,
              image:null,
              imageToShow:null,
          }
      })


    }

    const saveNeImage=async()=>{
      
      setimage(edit.imageToShow)
    
      const formData = new FormData();
      formData.append("imagenprofile",edit.image)
      cancel()
      formData.append("type","Port")

      const addNewImage=await postProfile("profile/profileimage",formData,headers)
      const getImageProfile=await getProfileClientSide("profile/profileimage?type=Port",headers)

      setimage(getImageProfile.urlprofile)

    }
    const openEditImage=()=>{
        setEdit(x=>{
            return{
                ...x,
                openEditImage:!x.openEditImage
            }
        })
    }
    const openEditAndclose=()=>{
      openEditImage()
      openOptions()
    }
   const onInputChange=(e)=>{
     const {name,files}=e.target
      setEdit(x=>{
          return{
              ...x,
              image:files[0],
              imageToShow:URL.createObjectURL(files[0]),
          }
      })
   }

  return (
    <>
   
    <div className='portImageContainer'>
        {
            image==null?<div onClick={openOptions} className='css-eiir0b'></div>:<Image onClick={openOptions} className='imagePort' width={"500"} height={"250"} src={image} alt='profile port image'></Image>
        }
       
     
        
    </div>
    {
      edit.showoptions?<ShowOrUpdateImg openUpdate={openEditAndclose} openShow={openAndCloseOptions} type="Portada"></ShowOrUpdateImg>:<div ></div>
    } 
    <ModalShowImage type={1} close={openModalShowImage} image={image} open={edit.modalShowImage}></ModalShowImage>
    <ModalShowAddImage type={1} onInputChange={onInputChange} 
    nameEdit="Foto de portada" imageToShow={edit.imageToShow} nameOFEditfEdit={edit.image} 
    shwoModal={edit.openEditImage} name="image" save={saveNeImage}  cancel={cancel}></ModalShowAddImage>

    </>
  )
}

export default PortImage