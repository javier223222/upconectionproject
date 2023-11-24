'use client'
import Image from 'next/image'
import React from 'react'
import ProfileImage from './ProfileImage'
import { useRouter } from 'next/navigation'


const Navbar = props => {
  const navigation=useRouter()
 
   
  return (
  <div className='fathercontainer' >

   
 

<div className='hamburguer'>
       <Image onClick={()=>{navigation.push("http://localhost:3000/user")}} src={props.hamburguer} className='imagenav' alt='hamburguer menu'  ></Image>
 
    </div>
   

    <input  type="text"  ></input>   
  
    <nav className=''>
    <ProfileImage
     nameofuser={props.nameofuser} 
     token={props.token}
      profileImage={props.profileImage!=null?props.profileImage:null}></ProfileImage>
  
</nav>

</div>
  )
}


export default Navbar