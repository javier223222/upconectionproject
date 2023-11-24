import React from "react";
import Image from "next/image";
import profile from "@/assets/profile.jpg"
const BubbleL = (props) =>{
    return(
        <div className="bubble-left">
            <Image  src={profile} className="foto"/> 
        </div>
    )
}
export default BubbleL;