'use client'
import React from "react";
import "@/css/forum.css"
import { useRouter } from "next/navigation";

const ForumsChart = (props) => {
    const navigation =useRouter()
    const redirectFror=()=>{
        navigation.push(`http://localhost:3000/user/forums/${props.idforo}`)
    }
    return (
        <div onClick={redirectFror} className="forum">
                <h1>{props.name}</h1>
        </div>
    )
};

export default ForumsChart;
