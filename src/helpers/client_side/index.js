
import axios from "axios"




export const getProfileClientSide=async (url,headers)=>{

    const res=await axios.get(`http://localhost:80/${url}`,{
        headers
    })
    return res.data
  
    
  } 
  
  
 export const updateProfile=async(url,data,headers)=>{
    const res=await axios.patch(`http://localhost:80/${url}`,data,{
        headers
    })


    return res.data
  
 } 

export const postProfile=async(url,data,headers)=>{
    const res=await axios.post(`http://localhost:80/${url}`,data,{
        headers
    })

    return res.data
}

export const deleteProfile=async(url,headers)=>{
    const res=await axios.delete(`http://localhost:80/${url}`,{
        headers
    })

    return res.data
}
export const style = {
    position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '1px solid rgb(219, 219, 219)',
      borderRadius: '8px',
      outline: "none",
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    }

export const stylestwo={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
   
    borderRadius: '8px',
    outline: "none",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}