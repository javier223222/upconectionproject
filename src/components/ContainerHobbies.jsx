'use client'
import React, { useState } from 'react'
import Hobbies from './Hobbies'
import ModalOneInputs from './ModalOneInputs'
import { deleteProfile, getProfileClientSide, postProfile } from '@/helpers/client_side'


const ContainerHobbies = props => {
    const [interestOrExpert,setInterestOrExpert]=useState({hobbies:props.hobbies,showMoDall:false,token:props.token,nameHobbie:""})

    const openModal=()=>{
      setInterestOrExpert(x=>{
          return{
              ...x,
              showMoDall:!x.showMoDall
          }
      })
  }
  const headers=  {
    "Authorization": interestOrExpert.token
  }
  const onInputChange=(e)=>{

    const {name,value}=e.target
    setInterestOrExpert(x=>{
        return{
            ...x,
            [name]:value
        }
    })
  }

  const cancel=()=>{
    openModal()
    setInterestOrExpert(x=>{
      return{
        ...x,
        nameHobbie:""
      }
    })
  }
  const add=async()=>{
    const addhobbie=await postProfile("profile/hobbie",{namehobbie:interestOrExpert.nameHobbie},headers)
    const getHobbies=await getProfileClientSide("profile/hobbie",headers)
    const element={namehobbie:interestOrExpert.nameHobbie}
    setInterestOrExpert(x=>{
      return{
        ...x,
        hobbies:x.hobbies.push(x=>[...x,element]),
        
      }
    })

    setInterestOrExpert(x=>{
      return{
        ...x,
        hobbies:getHobbies.result,
        nameHobbie:""
      }
    })
    openModal()
  }
  const deleteHobbie=async(idhobbierOf)=>{
    console.log(idhobbierOf)
    const delethobbie=await deleteProfile(`profile/hobbie?idhobbiesof=${idhobbierOf}`,headers)
    const getHobbies=await getProfileClientSide("profile/hobbie",headers)
    setInterestOrExpert(x=>{
      return{
        ...x,
        hobbies:getHobbies.result
      }
    })


  }

  return (
    <div className={`boxexpertOrInteres   ${props.class}`}>
        <h5 className='boxexpertOrinteresTitle'>Hobbies:</h5>
        <div className='interestOrExperts'>
          {
            interestOrExpert.hobbies!=[]?interestOrExpert.hobbies.map(x=>{ return  <Hobbies deleteInteres={deleteHobbie} idhobbieof={x.idhobbiesof} 
              nameHobbieof={x.namehobbie} ></Hobbies>}):<></>
          }
        </div>
        {props.adminEdit?   <div className='anadicontainer'>
 
 <button className='anadir' onClick={openModal}>Añadir</button>
 </div>:<></>}
      <ModalOneInputs save={add} onInputChange={onInputChange} nameOFEditfEdit={interestOrExpert.nameHobbie} nameOFeditFirsContent="" name="nameHobbie"  placeholder="Ingrese un hobbie" shwoModal={interestOrExpert.showMoDall} cancel={cancel}></ModalOneInputs>
    </div>
  )
}



export default ContainerHobbies