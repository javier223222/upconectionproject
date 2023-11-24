import React from "react";
import Image from "next/image";
import profile from "@/assets/profile.jpg"
import imageProfileSho from "@/assets/acountcircle.svg"
import { useRouter } from "next/navigation";
const BubbleL = (props) =>{
    const navigation=useRouter()
    const redirectProfile=()=>{
        navigation.push(`/user/${props.username}`)
    }
    const exists=props.urlfile!=null
    console.log(/^.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$/.test(props.media))
    return(
        <div className="bubble-left">
            <Image onClick={redirectProfile}  src={props.image!=null?props.image:imageProfileSho} width={"80"} height={"80"} className="foto"/> 
            <p>{props.username}</p>
             <p>{props.content}</p>
             {
                props.media!=null?
                    /^.*\.(doc|DOC|pdf|PDF)$/.test(props.media)?<iframe src={`${props.media}`}></iframe>:<Image src={props.media} alt="mi image" width={"100"} height={"200"}></Image>
                :<></>
             }
             
          
                
              

                
             
        </div>
    )
}
export default BubbleL;