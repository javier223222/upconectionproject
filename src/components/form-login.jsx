import React from 'react'
import Form from './form'
import img from "@/assets/formImg.svg"
import Image from 'next/image'
import "@/css/formlogin.css"

const Form_login = (props) => {
  return (
    <div className="container">
    <div className="element">
      <Image alt='register image' src={img} className="registerImg"></Image>
    </div>
    <div className="element">
     <Form handleSubmit={props.handleSubmit} onInputChnage={props.onInputChnage}/>
    </div>
  </div>
  )
}

export default Form_login