import Image from 'next/image'
import React from 'react'
import menu from "@/assets/menu.svg"
const FriendItem = (props) => {
  return (
    <div>
        <div className='fp' >
            <Image alt='' className='fpi' src={props.imageFriend?props.imageFriend:menu}></Image>
            <p>{props.namefriend}</p>
            
        
        </div> 
    </div>
  )
}

export default FriendItem