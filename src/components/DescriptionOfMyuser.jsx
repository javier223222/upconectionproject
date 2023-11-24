'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import editImage from "../assets/edit.svg"
import EditBox from './EditBox'
import { postProfile,updateProfile,getProfileClientSide } from '@/helpers/client_side'
import { Box, Grid, TextField } from '@mui/material'


const Description = props => {

    const [description,setDescription]=useState({description:null,editDescription:false,boxEdit:false,edittextdescription:null,token:null})
    useEffect(()=>{
        setDescription(x=>{
          return{
            ...x,
            description:props.description,
            edittextdescription:props.description==null?'':props.description,
            token:props.token
          }
        })
    },[])

    const editDescription=()=>{
        setDescription(x=>{
          return{
            ...x,
            editDescription:!x.editDescription
          }
        })
    
    }


   const swhoEditBox=()=>{
    setDescription(x=>{
      return{
        ...x,
        boxEdit:!x.boxEdit
      }
    })

   } 

    const onInputChange=(e)=>{
      const {name,value}=e.target
      console.log(name,value)
      setDescription(x=>{
        return{
          ...x,
          [name]:value
        }
      })
    }
    const headers=  {
      "Authorization": description.token
    }
   const save=async()=>{
     swhoEditBox()
     if(description.description==null){
      updateDescription(description.edittextdescription)
    const res= await postProfile("profile/profiledescription",{description:description.description},headers)
    const resTwo= await getProfileClientSide("profile/profiledescription",headers)
    setAny("description",resTwo.description.description)


     }else{
      updateDescription(description.edittextdescription)
      const res= await updateProfile("profile/profiledescription",{description:description.edittextdescription},headers)
      const resTwo= await getProfileClientSide("profile/profiledescription",headers)
      setAny("description",resTwo.description.description)

      
     }

   }
   
   const close=()=>{
    swhoEditBox()
    const value=description.description==null?'':description.description
    setAny("edittextdescription",value)

   }
  

  const updateDescription=(value)=>{
    setDescription(x=>{

      return{
        ...x,
        description:value
      }
    
    })
  } 

  const setAny=(name,value)=>{
    setDescription(x=>{
      return{
        ...x,
        [name]:value
      }
    })
  }
  return (
    <div>
   {
    !description.boxEdit?<div  onMouseOver={editDescription} onMouseOut={editDescription} className={props.class}>
      
    <div className='descriptioContainer'>
    <p>{description.description==null?'no profile description':description.description}</p>
    {

      description.editDescription?<div className='imageEditDescription'><Image src={editImage} onClick={swhoEditBox} ></Image></div>:<div className='imageEditDescription'></div>
    }
    </div>
  
 
   
  
    
</div>:<></>
   }
    

    {
      description.boxEdit ?<Box>
        <Grid sx={{flexGrow:1}} container spacing={3}>
          <Grid item xs={12}>
            <Grid container justifyContent={"start"} spacing={1}>
              <TextField variant="standard" 
                         className='inputmajor'
                         name="edittextdescription"
                          defaultValue={description.edittextdescription}
                         onChange={onInputChange}>

              </TextField>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent={"start"}  gap={"2rem"} spacing={1}>
              <button className='anadir' onClick={close}>cancelar</button>
              <button className='anadir' onClick={save}>guardar</button>
            </Grid>
          </Grid>
        </Grid>
      </Box>:<></>
    }
    </div>

    
  )
}


export default Description