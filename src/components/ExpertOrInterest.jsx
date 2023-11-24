
import React, { useState } from 'react'
import deleteicon from "../assets/delete.svg"
import Image from 'next/image'

const ExpertOrInterest = ({idinterestwo,interesttwo,deleteInterestOrExpert}) => {
    const [interest,setInterest]=useState({idinterest:idinterestwo,interest:interesttwo,showDelete:false})
    const change=()=>{
        setInterest(x=>{
            return {
                ...x,
                showDelete:!x.showDelete
            }
        })
    }

    
    
  return (
    <div className='containerexper' onMouseOut={change} onMouseOver={change} >
<div className='interesname'>
        <p >{interest.interest}</p>

</div>

        {
          interest.showDelete ?<div className='imagecontainer'><Image onClick={async()=>deleteInterestOrExpert(interest.idinterest)} src={deleteicon}></Image></div>:<div className='imagecontainer'></div>
        }
        
    </div>
  )
}



export default ExpertOrInterest