
import { style } from '@/helpers/client_side'
import { Box, Grid, Modal } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import clip from "@/assets/clip.svg";
const ModalAddPublications = (props) => {
  return (
    <Box>
        <Modal open={props.open} onClose={props.close} >
            <Box  sx={{...style}}>

                <Grid container
  direction="row"
  justifyContent="center"
  alignItems="flex-start"  xs={12}>
                    <h3>Agregar publicacion</h3>
                    

                </Grid>
                <Grid  container
  direction="row"
  justifyContent="start"
  alignItems="center" xs={12}>
                <Grid xs={6} item>

                   <Image src={props.imageuse!=null||props.imageuse!=undefined?props.imageuse:acountCircle} >
                  </Image>
                </Grid>
                <Grid xs={2} container direction={"column"} item>

                   <Grid item><h4 >{props.username}</h4></Grid>
                   <Grid item><select onChange={props.onInputChange} name='select'><option value={1}>Publicacion</option> <option value={2}>Apunte</option> </select></Grid>

                </Grid>
              
               

              
                 
                </Grid>
                {
                    props.select==2?<Grid item contatiner  direction="row"
                    justifyContent="start"
                    alignItems="center" xs={12}  >
                        <Grid item>
                          <select onChange={props.onInputChange} name='typeOfpublication'>
                               {
                                props.optionSelect.map((x,i)=>{
                                     return <option key={i} value={x.idineterestorexpert}>{x.namefininteorexpert}</option>
                                })
                               }

                          </select>
                        </Grid>
                        <Grid item>
                            
                            <input  onChange={props.onInputChange} name='tipoDecategoria'></input>
                        </Grid>
                    </Grid>:<></>
                }


                <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center" xs={12} >
        <Grid item>
    <textarea onChange={props.onInputChange}  name='cuerpoPublicacion' placeholder={"Escribe algo"}></textarea>
          </Grid>
                    
                </Grid >
                <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center" xs={12} >

    <Grid item>
    {
                    props.file!=null?/^.*\.(doc|DOC|pdf|PDF)$/.test(URL.createObjectURL(props.file))?<iframe src={ URL.createObjectURL(props.file)} ></iframe>:<Image width={"300"} height={"150"} src={ URL.createObjectURL(props.file)}></Image>:<></>
                }
        </Grid>
  </Grid>

                <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center" xs={12} >
                {
                    props.text!=""?<Grid  item><button onClick={props.addpub}>
                        Publicar
                    </button></Grid>:<></>
                }
                 <input onChange={props.onInputFileChange} type="file" name="file" id="file-upload" style={{ width: "0.1px",
 height: "0.1px",
 opacity: 0,
 overflow: "hidden",
 position: "absolute",
 zindex: -1}}></input>
                <label htmlFor="file-upload" className="custom-file-upload">
                 <Image src={clip} width={"40"} height={"40"}></Image>
                </label>
              


                </Grid>
             
            </Box>
        </Modal>
    </Box>
  )
}

export default ModalAddPublications