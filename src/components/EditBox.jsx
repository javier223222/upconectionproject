import React from 'react'

const EditBox = (props) => {
  return (
    <div >
        <textarea defaultValue={props.description} name={props.name} onChange={props.onInputChange} className='editbox'></textarea>
        <div>
            <button onClick={props.save} className='anadirdescr'>Guardar</button>
            <button onClick={props.close} className='anadirdescr' >Cancelar</button>
        </div>
    </div>
  )
}

export default EditBox