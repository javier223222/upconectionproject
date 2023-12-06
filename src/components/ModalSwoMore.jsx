import { style } from '@/helpers/client_side';
import { Box, Grid, Modal, TextField } from '@mui/material'
import Image from 'next/image';
import close from '@/assets/close.svg';
import * as React from 'react';
import acountCircle from '@/assets/acountcircle.svg'
import { useRouter } from 'next/navigation';
import InfiniteScroll from 'react-infinite-scroll-component';

const ModalSwoMore = props => {
  const navigation=useRouter()

  const redirect=(username)=>{
    navigation.push(`${username}`)
  }
  return (
    <div>
       
        <Modal  open={props.open} onClose={props.close} >
         
          <Box  sx={{...style,width:"40%",height:props.totalPages>2?"44%":"50%"}}>
            <Grid xl={12} lg={12} md={12} sm={12} xs={12}    container
  direction="row"
  justifyContent="flex-end"
  alignItems="flex-start">
            
            <Grid item  ><Image alt='' onClick={props.close} style={{cursor:"pointer"}} src={close}></Image> </Grid> 
          
           
           
            </Grid>

            <Grid  container
  direction="row"
  spacing={2}
  justifyContent="center"
  alignItems="flex-start">
             <Grid item>
              <h2 style={{color:"#050505"}}>
                <span>Amigos de {props.username}</span>
              </h2>
             </Grid>


            </Grid>
            {
              props.totalPages>2?
              
              <div id='infiniteScroll' style={{overflow:"auto",height:"17%"}}>
                <InfiniteScroll 
                dataLength={props.allImages.length}
                next={props.getNew}

                hasMore={true}
                
                scrollableTarget="infiniteScroll">
                
                
                <Grid 
              
              xs={12}
              container
              className='friendMenstWo'
              
              direction="row"
              justifyContent="end"
              alignItems="center"
              spacing={0.2}  >
                {
                props.allImages.length!=0?props.allImages.map((x,i)=>{
                  return <Grid key={i} gap={"0.4rem"} item xl={6} justifyContent={"center"} container     >
                     <Image alt=''  className='bordeim' onClick={()=>redirect(x.username)} src={x.urlfile!=null?x.urlfile:acountCircle} width={"80"} height={"80"}></Image>
            <Grid  >
            <h3 onClick={()=>redirect(x.username)}>{x.username}</h3>
            <p onClick={()=>redirect(x.username)}>{`${x.name} ${x.apellidop} ${x.apellidom}`}</p>
            </Grid>
                  </Grid>
                }):<></>
              }
                
               
                 
             
                 
                
              </Grid>
                </InfiniteScroll>
                
              </div>
             :<Grid container
              direction="row"
              className='friendMenstWo'
              xs={12}
              style={{overflowY:"auto",height:"50%"}}
              justifyContent="center"
              alignItems="center"
              spacing={0.2}>{
                props.allImages.length!=0?props.allImages.map((x,i)=>{
                  return <Grid key={i}  gap={"0.6rem"} item xl={6} justifyContent={"center"} container     >
                     <Image alt=''  className='bordeim' onClick={()=>redirect(x.username)} src={x.urlfile!=null?x.urlfile:acountCircle} width={"80"} height={"80"}></Image>
            <Grid  >
            <h3 onClick={()=>redirect(x.username)}>{x.username}</h3>
            <p onClick={()=>redirect(x.username)}>{`${x.name} ${x.apellidop} ${x.apellidom}`}</p>
            </Grid>
                  </Grid>
                }):<></>
              }</Grid>
            }

            


          </Box>
        </Modal>

    </div>
  )
}


export default ModalSwoMore