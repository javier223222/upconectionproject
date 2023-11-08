import Image from 'next/image'
import React from 'react'
import ProfileImage from './ProfileImage'


const Navbar = props => {
    console.log("ddd")
    console.log(props.token)
  return (
    <nav className='navbar   d-flex'>
    <div></div>
    <Image src={props.hamburguer} alt='hamburguer menu'  ></Image>

  <div className='containersearch'>

    <input type="search"></input>   
  </div>
 
  <ProfileImage nameofuser={props.nameofuser} token={props.token} profileImage={props.profileImage?.urlprofile?props.profileImage:null}></ProfileImage>
  
</nav>
  )
}


export default Navbar