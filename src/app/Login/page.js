'use client'
import React from 'react'
import "@/css/login.css"
import Cuadros from '@/components/Cuadros'
import Form_login from '@/components/form-login'
import { useForm } from '@/hooks/useForm'
import axios from 'axios'

function page() {

  const {emailousuario,password, onInputChange,onResetForm}=useForm({emailousuario:null,password:null})
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(password)
 


  const res=await axios.post("https://connection-back.onrender.com/user/v1/login",{
      usernameoremail:emailousuario,passworduser:password
    }, { withCredentials: true })

    console.log(res.data)
   
  }
  return (
    <div>
<Cuadros/>
<Form_login onInputChnage={onInputChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default page