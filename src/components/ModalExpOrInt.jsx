import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import close from '@/assets/close.svg'
const ModalExpOrInt = props => {
    const [elemestSelect,setElementSelect]=useState([])
   
    useEffect(()=>{
       setElementSelect(props.elemestSelect.map(x=><option value={x.idineterestorexpert}>{x.namefininteorexpert}</option>))
       console.log(props.elemestSelect)
    },[])
  return (
    <>
    <div className='darkBGtwo'  />

    <div className='centered' >
    <Image src={close} onClick={props.closeImage} ></Image>
    <div className='modalthree '  >
    <div>
        <div><span>Agregar {props.nameExpOrInt} en</span></div>
        <select name={`${props.NameORexpert}`} defaultValue={props.defaultValue} onChange={props.changeSelectexpeOr}>
            
            {elemestSelect}
        </select>
        <button onClick={props.expertOrInter}>Agregar</button>
    </div>
    
    </div>

    </div>
   
   

  
   
    </>

)
}


export default ModalExpOrInt