import React from "react";
import Image from "next/image";
import profile from "@/assets/profile.jpg"

const BubbleR = (props) =>{
    return(
        <div className="bubble-right">
            <Image alt="bubble-image"  src={profile} className="foto"/> 
        </div>
    )
}
export default BubbleR;