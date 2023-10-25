import React from 'react'
import Form from './form'
import img from "@/assets/formImg.svg"
import Image from 'next/image'
import "@/css/formlogin.css"

const Form_login = (props) => {
  return (
    <div className="container">
    <div className="element">
      <Image src={img} className="registerImg"></Image>
    </div>
    <div className="element">
     <Form/>
    </div>
  </div>
  )
}

export default Form_login