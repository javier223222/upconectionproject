import React, { useState } from 'react'
import PortImage from './PortImage'
import PerfilImage from './PerfilImage'
import Image from 'next/image'
import ProfileDescription from './ProfileDescription'
import ExperTOrAprendi from './ExperTOrAprendi'
import accountbox from '@/assets/accountbox.svg' 
import upload from "@/assets/upload.svg"
import edit from "@/assets/edit.svg"
import HobbiesContainer from './HobbiesContainer'
const DescriptionProfile = props => {
  const [elemets,setElements]=useState({
    edit:false,
    imageedittext:false,
    editdescriuption:false
  })
  const showedit=()=>{
    update("edit")
  }
  const showeditimage=()=>{
    update("imageedittext")
  }
  const update=(name)=>{
   setElements(x=>{
      return{
        ...x,
        [name]:!x[name]
      }
   })
  }
  const showboxedit=()=>{
    update("editdescriuption")
  }
  return (
    <div className='descriptionProfile' >
        <Image alt='profileImg' onClick={props.updatePort}  src={props.portImage} width={"800"} height={"200"} ></Image>
        <PerfilImage onClick={props.selectOption} urlimage={props.urlimage}></PerfilImage>
        <div>
           <h1>{props.username?props.username:''}</h1>
          
           <div onMouseOut={props.showeditwo} onMouseOver={props.showeditwo}>{props.major}
           {
            props.showupd?<div><input type='number' name='editsemester' defaultValue={props.semesteredit}
             onChange={props.inputadd} placeholder='Ingrese el semestre'></input> <button onClick={props.updateAddSemester}>actualizar</button> <button onClick={props.closesemester}>cancelar</button></div>:<p>{props.semester}</p>
           }  {
            props.edit&&!props.showupd?<Image alt='updatesemester' onClick={props.updatesemester} src={edit}></Image>:''
           } </div>
           
                     
        
          <div>
            {props.username?<>{props.editnametwo?<></>:<span  onMouseOut={props.showIconName} onMouseOver={props.showIconName} >{props.name} {props.nameshoweditdc?<Image  alt='' onClick={props.showInputNam}   src={edit}></Image>:''}  </span>}
                           {props.editapellidoPtwo?<></>:<span   onMouseOut={props.showIconApeA} onMouseOver={props.showIconApeA} >{props.apelldiop} {props.apellidopshowedittwo?<Image alt='' id='editapellidoP' src={edit} onClick={props.showInputApeP}   ></Image>:''}  </span>}
                           {props.editApellidoMtwo?<></> : <span  onMouseOut={props.showIconApeM} onMouseOver={props.showIconApeM}  >{props.apellidoM} {props.apellidomeditwo?<Image alt='' id='editApellidoM' onClick={props.showInputApelliM}   src={edit}></Image>:''} </span>}</>:''}
             <>
               {props.editnametwo?<div>
                <input type='text'
                 name='neName'
                  defaultValue={props.nename} 
                  onChange={props.inputadd}
                   placeholder='Ingrese su nombre'></input>
                    <button   onClick={props.updateName}>Actualizar</button> <button  onClick={props.cancelarUpNa}>Cancelar</button></div>:''}
               {props.editapellidoPtwo?<div><input type='text' name='neApellidoP' 
               defaultValue={props.neapelldiop} onChange={props.inputadd} placeholder='Ingrese su apellido paterno'></input> 
               <button   onClick={props.updateApellidoP}>Actualizar</button> <button  onClick={props.canceUpdaApe}>Cancelar</button></div>:''}
                {props.editApellidoMtwo?<div><input
                 type='text' name='neApellidoM'
                  defaultValue={props.neapellidoM} onChange={props.inputadd} placeholder='Ingrese su apellido materno'></input>
                   <button   onClick={props.updateApellidoM} >Actualizar</button> <button  onClick={props.closeUpdaM}>Cancelar</button></div>:''}

               
               </>
                            
          </div>
         </div>
        <ProfileDescription editimagede={props.editimagede}
         profileDescription={props.profileDescription}
          openEdit={props.openEdit} 
          showBoxEdit={props.showBoxEdit} 
          evChangeBox={props.evChangeBox}
          editdescription={props.editdescription}
          inputadd={props.inputadd}
          addOrUpDescription={props.addOrUpDescription}
          abortUpdate={props.abortUpdate}
          ></ProfileDescription>
       <ExperTOrAprendi  showModalExperAdd={props.showModalExperAdd}
        showIconEditExp={props.showIconEditExp}
         iconEditExp={props.iconEditExp} 
         editIcon={edit}
          expertorinterest={props.expertorinterest}
           expertorinterestti="Experto"
           
           showIconEditDelete={props.showIconEditDeleteEx}
           editIconDelet={props.editIconDeletEx}
           deleteExperOrIn={props.deleteExpert}
           ></ExperTOrAprendi>

<ExperTOrAprendi showModalExperAdd={props.showModalExperInterest}
         
        showIconEditExp={props.showIconEditInterest}
         iconEditExp={props.iconEditInterest} 
         
         editIcon={edit}
          expertorinterest={props.expertorinterestInterest}
           expertorinterestti="Interes" 
           
           showIconEditDelete={props.showIconEditDeleteAp} 
           deleteExperOrIn={props.deleteInte}
           editIconDelet={props.editIconDeletAp}></ExperTOrAprendi>
           <HobbiesContainer editAreaOpen={props.editAreaOpen}
            iconAdd={props.iconAdd}
             changeIconAdd={props.changeIconAdd}
              deleteHobbie={props.deleteHobbie}
               hobbies={props.hobbies} token={props.token}
               onChangeInput={props.inputadd} 
               abortHobbie={props.abortHobbie} addHobbie={props.addHobbie} 
               changeButtonDelete={props.changeButtonDelete}
               openDeleteButton={props.openDeleteButton} editAres={props.editAres}></HobbiesContainer>

       {
            props.elemetsre?<div>    {
              props.urlimage?<div onClick={props.modalshowImage}><Image src={accountbox} alt='accountbox'></Image>
              <p> Ver foto de perfil</p></div>:<></>
            }
            <div onClick={props.showUpdate}>
              <Image src={upload} alt='upload'></Image>
             <p>Actualizar Imagen</p>
            </div>
            
   </div>:<></>
        }
         {
            props.elemetsretwo!=false?<div>    {
              props.urlimagetwo?<div onClick={props.modalshowImagetwo}><Image src={accountbox} alt='accountbox'></Image>
              <p> Ver foto de portada</p></div>:<></>
            }
            <div onClick={props.showUpdatetwo}>
              <Image src={upload} alt='upload'></Image>
             <p>Actualizar Imagen</p>
            </div>
            
   </div>:<></>
        }

    </div>
  )
}



export default DescriptionProfile