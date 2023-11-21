import Image from 'next/image'
import React from 'react'
import ProfileImage from './ProfileImage'


const Navbar = props => {
   
  return (
  <div className='fathercontainer' >

   
 

<div className='hamburguer'>
       <Image src={props.hamburguer} className='imagenav' alt='hamburguer menu'  ></Image>
 
    </div>
    <input type="text"></input>   
  
    <nav className=''>
    <ProfileImage
     nameofuser={props.nameofuser} 
     token={props.token}
      profileImage={props.profileImage?.urlprofile?props.profileImage:null}></ProfileImage>
  
</nav>

</div>
  )
}


export default Navbar