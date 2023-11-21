import { style } from '@/helpers/client_side'
import { Box, Grid, Modal } from '@mui/material'
import Image from 'next/image'
import arrowNext from "@/assets/arrownext.svg"
import arrowPrev from "@/assets/arrowBack.svg"
import React from 'react'


const ModalShowUseUser = ({imageOFshow,shwomodal,closeAll,currentpage,nextImg,beforeImg}) => {
  return (
   <Box  >
     <Modal   open={shwomodal} onClose={closeAll}>
        <Box sx={{outline:"none"}} >
        <Grid container direction={"row"}>
        <Grid item container
  direction="row"
  justifyContent="flex-start"
  height={"100%"}
  alignItems="center">
    {
     currentpage==0?<></>:<Grid item><Image onClick={beforeImg} src={arrowPrev}></Image></Grid>
    }
        
        </Grid>
        <Grid  container
  direction="row"
  justifyContent="flex-end"
  height={"100%"} 
  alignItems="end">
        <Grid item><Image  onClick={nextImg} src={arrowNext}></Image></Grid>
        </Grid>

        </Grid>
      
        <Image src={imageOFshow}  className='imagetoshowd' width={"600"} height={"400"} style={{...style}}>

        </Image>
    
        </Box>
        
     </Modal>
   </Box>
  )
}



export default ModalShowUseUser