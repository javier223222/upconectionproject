'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import editImage from "../assets/edit.svg"
import { Box, Grid, TextField } from '@mui/material'
import { getProfileClientSide, updateProfile } from '@/helpers/client_side'
const MajorAndNumberMajor = (props) => {
    const [major,setMajor]=useState({namejor:props.namejor, numbermajor:props.numbermajor,
      adminEdit:props.adminEdit,editImage:false,editInput:false,editnumbermajor:props.numbermajor,token:props.token})
    const showEditImage=()=>{
        setMajor(x=>{
            return{
                ...x,
                editImage:!x.editImage
            }
        })
    }
    const headers=  {
      "Authorization": major.token
    }

    const showInputUpdate=()=>{
      showEditImage()
      setMajor(x=>{
        return{
          ...x,
          editInput:!x.editInput
        }
      })

    }
    const onInputChange=(e)=>{
      const {name,value}=e.target
      setMajor(x=>{
        return{
          ...x,
          [name]:value
        }
      })
    }
    const saveNumberMajor=async(e)=>{
      e.preventDefault()
      showInputUpdate()
      if(major.editnumbermajor>10||major.editnumbermajor<1){
        alert("ingrese un numero valido")
        return 
      }
      setMajor(x=>{
        return{
          ...x,
          numbermajor:x.editnumbermajor
        }
      
      })
      
      const updatesemester=await updateProfile("profile/updatesemester",{semester:major.editnumbermajor},headers)
     
      const res=await getProfileClientSide("profile/getInformation",headers) 
      setMajor(x=>{
        return{
          ...x,
          numbermajor:res.numersemster
        }
      
      })

    
    }
    const cancelar=()=>{
      showInputUpdate()
      setMajor(x=>{
        return{
          ...x,
          editnumbermajor:x.numbermajor
        }
      
      })
    }

  return (
    <div style={{height:"20"}}  >


      {
        !major.editInput?
           <div onMouseOver={showEditImage} onMouseOut={showEditImage}  className='majorandnummContainer'>

           <h5 >{major.namejor}</h5>
  <h5 >{major.numbermajor}</h5>

    {
      major.editImage?<div className='showedirma'> <Image src={editImage} onClick={showInputUpdate} ></Image> </div>:<div className='showedirma'></div>
    }

    
    </div>:<></>
      }
      {
        major.editInput?<Box  >
          <Grid sx={{flexGrow:1}} container spacing={3} >
            <Grid item xs={12}>
              <Grid container justifyContent={"end"} spacing={1}>
                <TextField variant="standard" 
                         className='inputmajor'
                         defaultValue={major.numbermajor} 
                         onChange={onInputChange} 
                         name="editnumbermajor"
                         type='number'></TextField>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent={"end"} gap={"2rem"}   spacing={1}>
                <button className='anadir' onClick={cancelar}>cancelar </button>
                <button className='anadir' onClick={saveNumberMajor}>guardar</button>
              </Grid>
            </Grid>
          </Grid>


        </Box>
        
        
        
        :<></>

      }
     
        
     
    </div>
  )
}

export default MajorAndNumberMajor