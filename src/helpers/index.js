import {cookies} from "next/headers"
import axios from 'axios'





export const gettoken= ()=>{
    const cokiestore= cookies()
    const hasCokokie= cokiestore.has('tokenUser')
  
    return hasCokokie?cokiestore.get("tokenUser").value:undefined
  
    
  }
  const headers=  {
    "Authorization": gettoken()
  }
export const getProfile=async (url)=>{

    const res=await axios.get(`${process.env.API_GETPROFILE}${url}`,{
        headers
    })
    return res.data
  
  }  


  