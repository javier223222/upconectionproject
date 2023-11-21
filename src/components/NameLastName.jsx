'use client'

import React, { useEffect, useState } from 'react'
import NameOfUser from './NameOfUser'
import ModalOneInputs from './ModalOneInputs'
import { getProfileClientSide, updateProfile } from '@/helpers/client_side'


const NameLastName = (props) => {
    const [names,setNames]=useState({
        name:null,
        apellidp:null,
        apellidoM:null,
        nameOFEdit:null,
        nameOFEditfEdit:null,
        nameOFeditFirsContent:null,
        firstModal:false,
        secondModal:false,

        token:null

    })
    useEffect(()=>{
        setNames(x=>{
            return{
                ...x,
                name:props.name,
                apellidp:props.apellidp,
                apellidoM:props.apellidoM,
                token:props.token
            }
           
            
        })
    },[])
    const headers=  {
        "Authorization": names.token
      }

    const showModal=(e)=>{
        const {id}=e.target
        changeModal("firstModal")
       if(id=="name"){
        setNames(x=>{
            return{
                ...x,
                nameOFEdit:"Nombre",
                nameOFEditfEdit:names.name,
                nameOFeditFirsContent:names.name
            }
        })

       }else if(id=="apellidop"){
        setNames(x=>{
            return{
                ...x,
                nameOFEdit:"Apellido Paterno",
                nameOFEditfEdit:names.apellidp,
                nameOFeditFirsContent:names.apellidp
            }
        })
       }else{
         
        setNames(x=>{
            return{
                ...x,
                nameOFEdit:"Apellido Materno",
                nameOFEditfEdit:names.apellidoM,
                nameOFeditFirsContent:names.apellidoM
            }
        })
       }


    }
   
    const cancelUpdate=()=>{
        changeModal("firstModal")
        setNames(x=>{
            return{
                ...x,
                nameOFEdit:null,
                nameOFEditfEdit:null,
                nameOFeditFirsContent:null,
            }
        })
    }
    const changeModal=(name)=>{
        setNames(x=>{
            return{
                ...x,
                [name]:!x[name]
            }
        })
    }
    const onInputChange=(e)=>{
        const {name,value}=e.target
        setNames(x=>{
            return{
                ...x,
                [name]:value
            }
        })
    }
    const save=async()=>{
        
     if(names.nameOFEdit=="Nombre"){
        const saveName=await updateProfile("profile/updateusername",{name:names.nameOFEditfEdit},headers)
        const res=await getProfileClientSide("profile/getInformation",headers)
        setNames(x=>{
            return{
                ...x,
                name:res.name
            }
        })

        setNames(x=>{
            return{
                ...x,
                name:x.nameOFEditfEdit,
                nameOFEdit:null,
                nameOFEditfEdit:null,
                nameOFeditFirsContent:null,
            }
        })
       
      
     }else if(names.nameOFEdit=="Apellido Paterno"){
        const saveApellidp=await updateProfile("profile/updateapellidop",{apeliidop:names.nameOFEditfEdit},headers)
        const res=await getProfileClientSide("profile/getInformation",headers)
        setNames(x=>{
            return{
                ...x,
                apellidp:res.apellidop
            }
        })

        setNames(x=>{
            return{
                ...x,
                apellidp:x.nameOFEditfEdit,
                nameOFEdit:null,
                nameOFEditfEdit:null,
                nameOFeditFirsContent:null,
            }
        })
     }else{
       const saveApellidm=await updateProfile("profile/updateapellidom",{apeliidom:names.nameOFEditfEdit},headers)
       const res=await getProfileClientSide("profile/getInformation",headers)
        setNames(x=>{
            return{
                ...x,
                apellidoM:res.apellidom
            }
        })
        
        setNames(x=>{
            return{
                ...x,
                apellidoM:x.nameOFEditfEdit,
                nameOFEdit:null,
                nameOFEditfEdit:null,
                nameOFeditFirsContent:null,
            }
        })

     }
     changeModal("firstModal")
    }
  return (
    <div className='name'>
        <NameOfUser name={names.name}    idselect="name"   showModal={showModal}></NameOfUser>
        <NameOfUser name={names.apellidp}   idselect="apellidop"  showModal={showModal}></NameOfUser>
        <NameOfUser name={names.apellidoM}   idselect="apellidom"  showModal={showModal}></NameOfUser>
       <ModalOneInputs name={"nameOFEditfEdit"} 
       defaultValue={names.nameOFEditfEdit}
       nameOFEditfEdit={names.nameOFEditfEdit}
       save={save}
       onInputChange={onInputChange} 
       nameOFeditFirsContent={names.nameOFeditFirsContent} nameEdit={names.nameOFEdit} cancel={cancelUpdate} shwoModal={names.firstModal}></ModalOneInputs>
     
    </div>

  )
}

export default NameLastName