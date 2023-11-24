'use client'

import Image from 'next/image'
import React, { useState ,useEffect} from 'react'
import accountcircle from '../assets/acountcircle.svg'
import ModalShowImage from './ModalShowImage'
import ModalShowAddImage from './ModalShowAddImage'
import ShowOrUpdateImg from './ShowOrUpdateImg'
import { getProfileClientSide, postProfile } from '@/helpers/client_side'
import { useRouter } from 'next/navigation'

const ProfileImage = (props) => {

     const [image,setimage]=useState(props.profileImage)
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
   const navigation =useRouter()
   const openAndCloseOptions=()=>{
  
    openOptions()
    navigation.push("http://localhost:3000/user/chatt")
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
      formData.append("type","Profile")

      const addNewImage=await postProfile("profile/profileimage",formData,headers)
      const getImageProfile=await getProfileClientSide("profile/profileimage?type=Profile",headers)

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
      navigation.push("http://localhost:3000/user/friends")
      openOptions()
    }
    const showProfile=()=>{
      openOptions()
      navigation.push("http://localhost:3000/user/profile")
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
   const shwoforos=()=>{
    openOptions()
    navigation.push("http://localhost:3000/user/forums")
   }
  return (
    <>
    
    <div className='profileimagecontainer'>

        <Image onClick={openOptions} src={image==null?accountcircle:image} alt='profile image' className='profile' width={"50"} height={"50"}></Image>
        <span>{
          props.nameofuser
          }</span>
    </div>
    {
      edit.showoptions?<ShowOrUpdateImg shwoforos={shwoforos} showProfile={showProfile} openUpdate={openEditAndclose} openShow={openAndCloseOptions} type="Perfil"></ShowOrUpdateImg>:<div ></div>
    } 
    <ModalShowImage type={0} close={openModalShowImage} image={image} open={edit.modalShowImage}></ModalShowImage>
    <ModalShowAddImage type={0} onInputChange={onInputChange} 
    nameEdit="Foto de perfil" imageToShow={edit.imageToShow} nameOFEditfEdit={edit.image} 
    shwoModal={edit.openEditImage} name="image" save={saveNeImage}  cancel={cancel}></ModalShowAddImage>

    </>
  )
}

export default ProfileImage