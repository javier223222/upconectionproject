import { style } from '@/helpers/client_side';
import { Box, Grid, Modal, TextField } from '@mui/material'

import * as React from 'react';




const ModalOneInputs = props => {
  return (
    <div>
        <Modal onClose={props.cancel} open={props.shwoModal} >
            <Box   sx={{...style,width:"400px"}}>
                 
            <Grid className='boxName' sx={{flexGrow:1 }} container spacing={5} >

                <Grid item xs={12} >
                    <Grid container marginTop={"0.5rem"} justifyContent={"center"} spacing={1}>
                     <span>Editar {props.nameEdit}</span>
                    </Grid>
                    
                </Grid>
                <Grid   item xs={12}>
                    <Grid   container justifyContent={"center"}  spacing={1}>
                        <TextField variant="standard" 
                         placeholder={props.placeholder}
                         className='inputname'
                         defaultValue={props.defaultValue} 
                         onChange={props.onInputChange} 
                         name={props.name}></TextField>
                  
                    </Grid>
                    
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent={"end"} gap={"2rem"} spacing={2}>
                    
                         <button className='anadir' name={props.nameCancelar} onClick={props.cancel}>Cancelar</button>
                
                   {
                      props.nameOFEditfEdit==props.nameOFeditFirsContent?<></>:<button className='anadir' name={props.nameSave} onClick={props.save}>Guardar</button>
                   }
                    
                    
                    </Grid>

                </Grid>
               
            </Grid>
              

              
               
                
                
               
            </Box>
        </Modal>
      
    </div>
  )
}


export default ModalOneInputs