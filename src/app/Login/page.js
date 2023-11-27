'use client'
import React, { useState } from 'react'
import "@/css/login.css"
import Cuadros from '@/components/Cuadros'
import Form_login from '@/components/form-login'

import axios from 'axios'
import { useRouter } from 'next/navigation'

function Login() {

 const navigate=useRouter()

  // const {emailousuario,password, onInputChange,onResetForm}=useForm({emailousuario:null,password:null})
  const [elements,setElementes]=useState({emailousuario:null,password:null})
  const onInputChange=(e)=>{
    const {name,value}=e.target
    setElementes(x=>{return{
      ...x,
      [name]:value
    }})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(elements.password + elements.emailousuario)
 


  const res=await axios.post("http://localhost:80/user/v1/login",{
      usernameoremail:elements.emailousuario,passworduser:elements.password
    }, { withCredentials: true })

    if(res.data.success){
      navigate.replace("/user")
    }
   
  }
  return (
    <div>
<Cuadros/>
<Form_login onInputChnage={onInputChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Login