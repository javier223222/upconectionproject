'use client'
import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import Image from 'next/image'
import ModalAddPublications from './ModalAddPublications'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AddPublication = props => {

    const [add,setAdd]=useState({open:false,token:props.token,username:props.username,select:1,typeOfprivacy:1,cuerpoPublicacion:"",file:null,
    tipoDecategoria:null,typeOfpublication:props.optionSelect[0]})
    const onInputChange=(e)=>{
        const {name,value}=e.target
        setAdd(x=>{
            return {
                ...x,
                [name]:value
            }
        })
    }
    const navigation=useRouter()
    const addPublication=async()=>{
        let formData = new FormData();
        if(add.file!=null){
          formData.append("filesPublication", add.file);
        }
        if(add.select==2){
          formData.append("typeofPulicacion",add.typeOfpublication)
          formData.append("tipoDecategoria",add.tipoDecategoria)

        }
    
        formData.append("cuerpodelapublicacion", add.cuerpoPublicacion);
        formData.append("idtypeofprivacy", add.typeOfprivacy);
        formData.append("idcategoria", add.select);
      
      
        const res = await axios.post(
          "http://18.116.19.145/publications/",
          formData,
          {
            headers:{
                Authorization:add.token
            }
          }
        );
        console.log(res);
        setAdd(x=>{
            return {
                ...x,
                file:null,
                cuerpoPublicacion:"",
                select:1,
                typeOfprivacy:1,
            }
        })
        openModal()
        navigation.refresh()
      }
    
    const onInputFileChange=(e)=>{
        const {name,files}=e.target
        setAdd(x=>{
            return {
                ...x,
                [name]:files[0]
            }
        })
    }
    const openModal=()=>{
        setAdd(x=>{
            return {
                ...x,
                open:!x.open
            }
        })
        
        setAdd(x=>{
            return {
                ...x,
                select:1,
                typeOfprivacy:1,
            }
        
        })
    }

  return (
    <Paper  sx={{
        p: 2,
        margin: 'auto',
        width: '95%',
      
        flexGrow: 1,
       
     
      }}   elevation={4}>
     
     <Grid container spacing={2}>
        <Grid item  container
  direction="row"
  justifyContent="start"
  alignItems="flex-start" spacing={3}  >
    <Grid  item>
    <Image onClick={openModal} style={{borderRadius:"50px"}} width={"60"} height={"60"} src={props.imageuse!=null||props.imageuse!=undefined?props.imageuse:acountCircle}></Image>
    </Grid>
    <Grid  marginTop={"1rem"}   item>
     <span onClick={openModal} >Necesitas Publicar  tus apuntes?</span>
    </Grid>     
           

                  
        </Grid>
       

        

     </Grid>
     <ModalAddPublications optionSelect={props.optionSelect} select={add.select} addpub={addPublication} onInputFileChange={onInputFileChange} file={add.file}  text={add.cuerpoPublicacion} onInputChange={onInputChange} username={props.username} open={add.open} close={openModal} >

     </ModalAddPublications>
     
    </Paper>
  )
}



export default AddPublication