import { Grid } from '@mui/material'
import React from 'react'
import accountbox from "../assets/accountbox.svg"
import uploaad from "../assets/upload.svg"
import Image from 'next/image'

const ShowOrUpdateImg = props => {
  return (
    <div className={`boxshowimageOrUPDATE   ${props.class} `}>
        <Grid  sx={{flexGrow:1}}  container spacing={2}>
            <Grid item xs={12} >
                <Grid container gap={"0.5rem"} justifyContent={"start"}  >
                <Image onClick={props.openShow} src={accountbox}></Image>
                <p onClick={props.openShow}>Ver foto de {props.type}</p>
                
                </Grid>
            </Grid>
            <Grid item xs={12} >
                <Grid container  gap={"0.5rem"} justifyContent={"start"} >

                    
                    <Image onClick={props.openUpdate} src={uploaad}></Image>
                    <p onClick={props.openUpdate}>Actualizar foto de {props.type}</p>
                </Grid>

            </Grid>
        </Grid>
    </div>
  )
}



export default ShowOrUpdateImg