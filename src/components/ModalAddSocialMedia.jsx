import { style } from '@/helpers/client_side';
import { Box, Grid, Modal, TextField } from '@mui/material'

import * as React from 'react';


const ModalAddSocialMedia = (props) => {
  return (
    <div>
         <Modal onClose={props.cancel} open={props.shwoModal} >
            <Box   sx={{...style,width:"400px"}}>
                 
            <Grid className='boxName' sx={{flexGrow:1 }} container spacing={4} >

                <Grid item xs={12} >
                    <Grid container marginTop={"0.5rem"} justifyContent={"center"} spacing={1}>
                     <span> Añadir red social </span>
                    </Grid>
                    
                </Grid>
                <Grid   item xs={12}>
                    <Grid   container justifyContent={"center"}  spacing={1}>
                        <select  className='inputname notonline' name='optionsSelect' onChange={props.onInputChange} >
                           {props.options.map(x=>{
                             return <option value={x.idsocialmedia} >{x.nameofsocialmedia}</option>
                           })}

                        </select>
                        {/* <TextField variant="standard" 
                         className='inputname'
                         defaultValue={props.defaultValue} 
                         onChange={props.onInputChange} 
                         name={props.name}></TextField> */}
                  
                    </Grid>
                    
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent={"center"}  spacing={2}>
                        <TextField 
                        
                        variant="standard" 
                         placeholder='Ingrese la url de la red social'
                         className='inputname'
                         defaultValue={props.defaultValue} 
                         onChange={props.onInputChange} 
                         name={props.name}
                         ></TextField>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent={"end"} gap={"2rem"} spacing={1}>
                    
                         <button className='anadir' name={props.nameCancelar} onClick={props.cancel}>Cancelar</button>
                
                         <button className='anadir' name={props.nameSave} onClick={props.save}>Guardar</button>
                   
                    
                    
                    </Grid>

                </Grid>
               
            </Grid>
            </Box>
        </Modal>
    </div>
  )
}

export default ModalAddSocialMedia