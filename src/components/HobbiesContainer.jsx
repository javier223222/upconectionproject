import axios from 'axios'
import React, { useEffect,useState } from 'react'
import add from "@/assets/add.svg"
import Image from 'next/image'

const HobbiesContainer = props => {
    
    
    const hobbies=props.hobbies.map(x=><div onMouseOut={props.changeButtonDelete} onMouseOver={props.changeButtonDelete}  ><p>{x.namehobbie}</p> {props.openDeleteButton? <button name={`${x.idhobbiesof}`} onClick={props.deleteHobbie}>Eliminar</button>:<></>}</div>)
    
    
     
   


   

    
  return (
    <>
   
    <div onMouseOut={props.changeIconAdd} onMouseOver={props.changeIconAdd} >
        <span>Hobbies</span>
        {hobbies}
         {props.iconAdd?<Image src={add} onClick={props.editAres}></Image>:<></>}
         
        
    </div>
    {props.editAreaOpen?<div><input name='nameHobbie' onChange={props.onChangeInput} placeholder='Ingrese  su Hobbie'></input><button onClick={props.abortHobbie}>Cancelar</button><button onClick={props.addHobbie}>Agregar</button></div>:<></>}
    </>
  )
}



export default HobbiesContainer