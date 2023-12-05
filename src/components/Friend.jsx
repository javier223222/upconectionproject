import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import { useRouter } from 'next/navigation'
const Friend = (props) => {
    const navigation=useRouter()
    const [username,setUsername]=useState(null)
    useEffect(()=>{
        setUsername(props.username)
    },[])
    const redirect=()=>{
      navigation.push(`${username}`)
    }

    
  return (
    <div className='friend' >
        <div onClick={redirect}>
            <Image alt='' src={props.imgaeFriend==null?acountCircle:props.imgaeFriend}  width={"80"} height={"80"}></Image>
        </div>
        <div>
            <div onClick={redirect}><h3 >{props.username}</h3></div>
            <div onClick={redirect}> 
                <p>{`${props.name} ${props.apellidp} ${props.apellidom}`}</p>
            </div>
        </div>
    </div>
  )
}

export default Friend