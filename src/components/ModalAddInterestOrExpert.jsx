'use client'
import { style } from '@/helpers/client_side';
import { Box, Grid, Modal, TextField } from '@mui/material'

import * as React from 'react';


const ModalAddInterestOrExpert = props => {

  return (
    <div>
        <Modal onClose={props.cancel} open={props.shwoModal} >
            <Box   sx={{...style,width:"400px"}}>
                 
            <Grid className='boxName' sx={{flexGrow:1 }} container spacing={5} >

                <Grid item xs={12} >
                    <Grid container marginTop={"0.5rem"} justifyContent={"center"} spacing={1}>
                     <span> {props.experOrIntere?`Añadir experto en `:`Añadir interes en`}</span>
                    </Grid>
                    
                </Grid>
                <Grid   item xs={12}>
                    <Grid   container justifyContent={"center"}  spacing={1}>
                        <select  className='inputname notonline' name='optionsSelect' onChange={props.onInputChange} >
                           {props.options.map((x,i)=>{
                             return <option key={i} value={x.idineterestorexpert} >{x.namefininteorexpert}</option>
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
                    <Grid container justifyContent={"end"} gap={"2rem"} spacing={2}>
                    
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


export default ModalAddInterestOrExpert