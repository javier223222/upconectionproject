
import { style } from '@/helpers/client_side';
import { Box, Grid, Modal, TextField } from '@mui/material'
import Image from 'next/image';

import * as React from 'react';

const ModalShowAddImage = props => {
  return (
    <div>
        <Modal onClose={props.cancel} open={props.shwoModal} >
            <Box   sx={{...style,width:"800px"}}>
                 
            <Grid className='boxName' sx={{flexGrow:1 }} container spacing={5} >

                <Grid item xs={12} >
                    <Grid container marginTop={"0.5rem"} justifyContent={"center"} spacing={1}>
                     <span>Editar {props.nameEdit}</span>
                    </Grid>
                    
                </Grid>
                <Grid   item xs={12}>
                    <Grid   container justifyContent={"center"}  spacing={1}>
                        {
                             props.nameOFEditfEdit==null? <label htmlFor='addimage'>
                             <span>Añadir</span>
                           </label>:<label htmlFor='addimage'><Image alt='' src={props.imageToShow} className={props.type?'imageShowtwo':'profile'} width={"400"} height={"250"}></Image></label>
                        }
                        <input variant="standard" 
                         placeholder={props.placeholder}
                         className='inputnameaddfile'
                         type='file'
                         id='addimage'
                         defaultValue={props.defaultValue} 
                         onChange={props.onInputChange} 
                         accept='image/*'
                         name={props.name}></input>
                         
                  
                    </Grid>
                    
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent={"end"} gap={"2rem"} spacing={2}>
                    
                         <button className='anadir' name={props.nameCancelar} onClick={props.cancel}>Cancelar</button>
                
                   {
                      props.nameOFEditfEdit==null?<></>:<button className='anadir' name={props.nameSave} onClick={props.save}>Guardar</button>
                   }
                    
                    
                    </Grid>

                </Grid>
               
            </Grid>
              

              
               
                
                
               
            </Box>
        </Modal>
    </div>
  )
}


export default ModalShowAddImage