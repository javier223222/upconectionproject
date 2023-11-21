import Image from 'next/image'
import React from 'react'


const PerfilImage = props => {
  return (
    <div><Image onClick={props.onClick} src={props.urlimage} width={"300"} height={"300"} alt='profile image '></Image></div>
  )
}



export default PerfilImage