"use client"

import React from "react";
import "@/css/register.css";
import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import register from "@/assets/register.svg"
import { useRouter } from "next/navigation";



const Registro = () => {
  const navigation=useRouter()
  const handleChange=async()=>{
    navigation.push("/register/information")
  }
  return (
    <div className="container">
      <div className="element">
        <Image src={register} className="registerImg"></Image>
      </div>
      <div className="element">
        <RegisterForm handleChange={handleChange}> </RegisterForm>
      </div>
    </div>
  );
};

export default Registro;
