
import Image from 'next/image'
import React from 'react'
import edit from "@/assets/edit.svg"

const ProfileDescription = props => {
 
  return (

    <>
    {
      props.showBoxEdit?<div ><textarea name='editdescription'  defaultValue={props.editdescription} 
      onChange={props.inputadd}></textarea> <button onClick={props.addOrUpDescription}>Agregar</button>
       <button onClick={props.abortUpdate}>Cancelar</button> </div>:
      <div onMouseOut={props.openEdit} onMouseOver={props.openEdit}>
      <span   >
        {props.profileDescription!=[]?props.profileDescription:'no description'} 
        </span>
        {props.editimagede? 
        <Image alt='' onClick={props.evChangeBox} src={edit} ></Image> :<></>}
        </div>
    }
    
    </>
  )
}



export default ProfileDescription