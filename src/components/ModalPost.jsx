import { style } from '@/helpers/client_side'
import { Box, Grid, Modal } from '@mui/material'
import close  from "@/assets/close.svg"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import acountCircle from '@/assets/acountcircle.svg'
import { getAnyProfile } from '@/apiconections'
import ComentPost from './ComentPost'
import axios from 'axios'


const ModalPost = props => {
    const [comments,SetImages]=useState({allComments:[],idPublication:props.idPublication,token:props.token,message:''})

    useEffect(()=>{
      getMessagges()
    },[])
    const onInputChange=(e)=>{
        const {name,value}=e.target
        SetImages(x=>{
            return {
                ...x,
                [name]:value
            }
        })
    }
    const addMessage=async()=>{
        if(comments.message==null){
            alert("no se puede agregar un comentario vacio")
        }else{
          
            const res=await axios.post("http://localhost:80/publications/addcomment",{
                idpublicacion:comments.idPublication,
                comment:comments.message
              },{
                headers:{
                  Authorization:comments.token
                }
              })

            SetImages(x=>{
                return {
                    ...x,
                    message:null
                }
            })

           await getMessagges()
        }
    }

    const getMessagges=async()=>{
        const res=await getAnyProfile(`http://localhost:80/publications/comments?idpublicacion=${comments.idPublication}`,comments.token)
        SetImages(x=>{
            return {
                ...x,
                allComments:res.comments
            }
        
        })
        console.log(res)
    }
  return (
    <div>
        <Modal onClose={props.close} open={props.open}>
            <Box sx={{...style,width:"800px"}}>
              <Grid container 
              item
              spacing={2}
               >
                <Grid item container>
                    <h1>Publicacion de {props.username}</h1>
                </Grid>
                <Grid item 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                >
                       <Image style={{borderRadius:"50px"}} width={"60"} height={"60"} src={props.imageuse!=null||props.imageuse!=undefined?props.imageuse:acountCircle}></Image>
          <h4> {props.username}</h4>
          <Grid item  
           container 
           direction={"row"}
           justifyContent={"flex-end"}
           gap={"1rem"}
          >
            <h2>{props.nameexpertoOrExpert}</h2>
            <h2>{props.tipodecategorios}</h2>


          </Grid>
                 
                </Grid>
                <Grid  item  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start" >
           <p>{props.contentOfPublication}</p>
        </Grid>
                <Grid 
        item   container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          {
            props.imagePublication!=null ? 
            /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))(.doc|.DOC|.pdf|.PDF)$/.test(props.imagePublication) ?<iframe src={props.imagePublication} width="400" height="400"></iframe>
            :
            <Image width={"400"} height={"400"} src={props.imagePublication}></Image>:<></>
          }
        </Grid>
        <Grid
        item
        container


        >

       <h4>{props.numerOfLikes}</h4> 
       <p>Likes</p>

        </Grid>
        <Grid   item container
        direction={"column"}
        >
          {
            comments.allComments.length!=0?comments.allComments.map((x,i)=>{
              return <ComentPost created_at={x.created_at} token={comments.token} username={x.username} connent_Of_Comment={x.connent_Of_Comment} />

            }):<></>
          }
        </Grid>
        <Grid  
        item container
        >
            <input name='message' onChange={onInputChange} placeholder='agregar un comentario'></input>
            <button onClick={addMessage} >Agregar comentario</button>
        
        </Grid>
     

              </Grid>
            </Box>
        </Modal>
    </div>
  )
}



export default ModalPost