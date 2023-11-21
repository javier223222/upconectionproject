"use client"

import React from "react";
import "@/css/register.css";
import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import register from "@/assets/register.svg"
import { useRouter } from "next/navigation";
import Background from "@/components/Background";
import Register from "@/components/Register";



const Registro = () => {
  const navigation=useRouter()
  const handleChange=async()=>{
    navigation.push("/register/information")
  }

  return (
    <div>
      <div>
        <Background></Background>
        <Register></Register>
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