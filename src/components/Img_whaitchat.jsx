import React from 'react'
import Image from 'next/image'
import picture from  "@/assets/Remote-meeting.svg";
import "@/css/chatfriends.css"

const Img_whaitchat = () => {
  return (
    <div className="containerImg-chat">
    <Image alt='' className='wait' src={picture}></Image>
    </div>
  )
}

export default Img_whaitchat