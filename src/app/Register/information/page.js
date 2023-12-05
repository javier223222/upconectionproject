"use client"


import React from "react";
import "@/css/register.css";
import Image from "next/image";
import register from "@/assets/register.svg"
import RegisterFormDos from "@/components/RegisterFormDos";
import { useRouter } from "next/navigation";





const OtherData = () => {
    const navigation=useRouter()
    const handleChange=async()=>{
      navigation.push("@/app/login/page")
    }
  return (
    <div className="container">
      <div className="element">
        <Image alt="sing up img" src={register} className="registerImg"></Image>
      </div>
      <div className="element">
        <RegisterFormDos></RegisterFormDos>
      </div>
    </div>
  );
};

export default OtherData;