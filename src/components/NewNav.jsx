import React from 'react'
import "@/css/newNav.css"
import Image from 'next/image'
import icon from "@/assets/ConnectAyuda.svg"

export default function NewNav() {
  return (
    <div className='nav'>
        <Image src={icon} alt='icon' className='icon'/>
    </div>
  )
}
