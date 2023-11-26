"use client"

import React, { useState } from "react";
import "@/css/register.css";
import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import register from "@/assets/register.svg"
import { useRouter } from "next/navigation";
import Background from "@/components/Background";
import Register from "@/components/Register";
import axios from "axios";



const Registro = () => {
  const [forms,setForm]=useState({username:null,email:null,password:null,nombre:null,apellido:null,apellidop:null
    ,password2:null,apellidom:null,birthday:null,sex:"M",Carrera:"Ingeniería en Software"})
  const onInputChange=(e)=>{
    const {name,value}=e.target
    setForm(x=>{return{
      ...x,
      [name]:value
    }})
  }
  const navigation=useRouter()
  const handleChange=async()=>{
    if(forms.password!=forms.password2){
      alert("Las contraseñas no coinciden")
      return
    }else if(!forms.apellidop==null||!forms.apellidom||!forms.nombre||!forms.username||!forms.email||!forms.password||!forms.password2||!forms.birthday){
     alert("Hay campos vacios")
  }
  else{
   axios.post(`http://localhost:80/api/v1/user`,{
    username:forms.username,nombre:forms.nombre,apellidop:forms.apellidop,apellidom:forms.apellidom,
    correo:forms.email,fechanacimiento:new Date(forms.birthday),sexo:forms.sex,password:forms.password,
    namemajor:forms.Carrera
   })
   navigation.push("/Login")

  
  }
}

  return (
    <div>
      <div>
        <Background></Background>
        <Register handleChange={handleChange} onInputChange={onInputChange}></Register>
      </div>
    </div>



    // <div className="container">
    //   <div className="element">
    //     <Image src={register} className="registerImg"></Image>
    //   </div>
    //   <div className="element">
    //     <RegisterForm handleChange={handleChange}></RegisterForm>
    //   </div>
    // </div>
  );
};

export default Registro;