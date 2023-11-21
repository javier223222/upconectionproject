import { style } from '@/helpers/client_side'
import { Box, Grid, Modal } from '@mui/material'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Image from 'next/image'
import ModalShowUseUser from './ModalShowUseUser'

const ModalShowMoreImgOFUser = ({nextImages,images,getMoreImages,close,openwin,onlyviewOne,bolShowSec,urlOnlyToshow,showMenext,showMeBefore,closeShowOne}) => {
  return (
    <Box>
        <Modal open={openwin}  onClose={close}>
            <Box sx={{...style,width:"32%",height:"30%"}}>
                <div id='moreImages' style={{overflow:"auto",height:"26%",width:"100%"}}>
                    <InfiniteScroll
                    hasMore={true}  
                    next={async()=>getMoreImages()}
                    scrollableTarget="moreImages"
                     dataLength={images.length}>
                    <Grid

                 container
                 direction="row"
                 justifyContent="center"
                 spacing={12}
                 alignItems="flex-start">
                    {
                        images.map((x,i)=>{
                            return <Grid key={i}  xs={3}  item><Image onClick={()=>onlyviewOne(i)} width={"80"} height={"80"} src={x.urlfile}></Image></Grid>
                        })
                    }
                    
                   
                    

                 </Grid>
                    </InfiniteScroll>
                </div>
               
            </Box>
        </Modal>
        <ModalShowUseUser shwomodal={bolShowSec} closeAll={closeShowOne} imageOFshow={urlOnlyToshow} beforeImg={showMeBefore} nextImg={showMenext} ></ModalShowUseUser>
    </Box>
  )
}



export default ModalShowMoreImgOFUser