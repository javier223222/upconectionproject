'use client'

import React, { useEffect, useState } from 'react'
import ExpertOrInterest from './ExpertOrInterest'
import { deleteProfile, getProfileClientSide, postProfile } from '@/helpers/client_side'
import ModalAddInterestOrExpert from './ModalAddInterestOrExpert'



const ContainerExpOrInt = props => {

    const [interestOrExpert,setInterestOrExpert]=useState(props.interestOrExpertArray)
    const [token,setToken]=useState(props.token)
    const [expertOrInter,setIntOrExpe]=useState(props.interestOrExpertceroOne)
    const [add,setShowAdd]=useState({
      showAdd:false,
      options:props.optionsSelect,
      optionsSelect:props.optionsSelect.length!=0?props.optionsSelect[0].idineterestorexpert:""
    })

    const headers=  {
      "Authorization": token
    }
    const showAdd=()=>{
      setShowAdd(x=>{
        return{
          ...x,
          showAdd:!x.showAdd
        }
      })

    }
    const cancel=()=>{
      showAdd()
    }

     const deleteInterestOrExpert=async (idinterest)=>{


      const deleteIn=await deleteProfile(`profile/profilegetinteresofexpert?idinterest=${idinterest}`,headers)
      const expertsOrInterest=await getProfileClientSide(`profile/profilegetinteresofexpert/expertofus?expertOr=${expertOrInter}`,headers)








     setInterestOrExpert(expertsOrInterest.result)

        
        
        
     }
     const addExpertOrInteres=async()=>{
        if(expertOrInter){
          const first=add.options[0].idineterestorexpert
          const neA=add.optionsSelect
          setShowAdd(x=>{
            return{
              ...x,
              optionsSelect:first
            }})
          const addnew=await postProfile("profile/profilegetinteresofexpert",{idinterest:neA,
          expert:1},headers)
          const expertsOrInterest=await getProfileClientSide(`profile/profilegetinteresofexpert/expertofus?expertOr=${expertOrInter}`,headers)
         setInterestOrExpert(expertsOrInterest.result)
         
          
        }else{
          const first=add.options[0].idineterestorexpert
          const neA=add.optionsSelect
          setShowAdd(x=>{
            return{
              ...x,
              optionsSelect:first
            }})

          const addnew=await postProfile("profile/profilegetinteresofexpert",{idinterest:neA,
          expert:0},headers)
          const expertsOrInterest=await getProfileClientSide(`profile/profilegetinteresofexpert/expertofus?expertOr=${expertOrInter}`,headers)

          setInterestOrExpert(expertsOrInterest.result)

         

       
        
        }
        showAdd()
     }
     const onInputChange=(e)=>{
      const {name,value}=e.target
      setShowAdd(x=>{
        return{
          ...x,
          [name]:value
        }
      })
    }

  return (
    <div className={`boxexpertOrInteres   ${props.class}`}>
        <h5 className='boxexpertOrinteresTitle'>{props.interestOrExpert}</h5>
       
        <div className='interestOrExperts'>
            {interestOrExpert!=[]? interestOrExpert.map((x,i)=>{ return <ExpertOrInterest key={i} deleteInterestOrExpert={deleteInterestOrExpert}  idinterestwo={x.idselectexperorinterest} interesttwo={x.namefininteorexpert}></ExpertOrInterest>}):<></>}
        </div>
        <div className='anadicontainer'>
 
 <button className='anadir' onClick={showAdd}>Añadir</button>
    <ModalAddInterestOrExpert save={addExpertOrInteres} experOrIntere={expertOrInter} onInputChange={onInputChange} options={add.options} cancel={cancel} shwoModal={add.showAdd}></ModalAddInterestOrExpert>
 </div>
    </div>
  )
}



export default ContainerExpOrInt