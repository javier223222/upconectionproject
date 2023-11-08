import axios from "axios"



export const getProfile=async (url,token)=>{

    const res=await axios.get(`${process.env.API_GETPROFILE}${url}`,{
        headers:{
            "Authorization":token
        }
    })
    return res.data
  
  }

export const postConection = async (url,token,data) => {
    const res = await axios.post(`${process.env.API_GETIMAGEPORFILE}${url}`,data, {
        headers:{
            "Authorization":token
        }
    })
    return res.data
}
