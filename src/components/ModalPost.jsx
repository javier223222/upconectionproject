import { style } from '@/helpers/client_side'
import { Box, Grid, Modal } from '@mui/material'
import close  from "@/assets/close.svg"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import acountCircle from '@/assets/acountcircle.svg'
import { getAnyProfile } from '@/apiconections'
import ComentPost from './ComentPost'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const ModalPost = props => {
    const [comments,SetImages]=useState({allComments:[],idPublication:props.idPublication,token:props.token,message:''})
    const navigation=useRouter()
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
          
            const res=await axios.post("http://18.116.19.145/publications/addcomment",{
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
        const res=await getAnyProfile(`http://18.116.19.145/publications/comments?idpublicacion=${comments.idPublication}`,comments.token)
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
            <Box sx={{...style,width:"800px", height:"600px", overflow:"auto"}}>
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
                       <Image alt='' onClick={()=>{navigation.push(`http://3.21.236.240:3000/user/${props.username}`)}} style={{borderRadius:"50px"}} width={"60"} height={"60"} src={props.imageuse!=null||props.imageuse!=undefined?props.imageuse:acountCircle}></Image>
          <h4 onClick={()=>{navigation.push(`http://3.21.236.240:3000/user/${props.username}`)}} > {props.username}</h4>
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
            <Image alt='' width={"400"} height={"400"} src={props.imagePublication}></Image>:<></>
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
              return <div key={i} className='contenedor-de-publicaiones-modal'>

                <ComentPost created_at={x.created_at} token={comments.token} username={x.username} connent_Of_Comment={x.connent_Of_Comment} />
              </div>

            }):<></>
          }
        </Grid>
        <Grid  
        item container
        >
          <div className='centrar-comentsandbutton'>
          <input className='comentario' name='message' onChange={onInputChange} placeholder='agregar un comentario'></input>
            <button className='enviar-comentario' onClick={addMessage} > <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.455 9.8834L7.063 4.1434C6.76535 3.96928 6.40109 3.95274 6.08888 4.09916C5.77667 4.24558 5.55647 4.53621 5.5 4.8764C5.5039 4.98942 5.53114 5.10041 5.58 5.2024L7.749 10.4424C7.85786 10.7903 7.91711 11.1519 7.925 11.5164C7.91714 11.8809 7.85789 12.2425 7.749 12.5904L5.58 17.8304C5.53114 17.9324 5.5039 18.0434 5.5 18.1564C5.55687 18.4961 5.77703 18.7862 6.0889 18.9323C6.40078 19.0785 6.76456 19.062 7.062 18.8884L18.455 13.1484C19.0903 12.8533 19.4967 12.2164 19.4967 11.5159C19.4967 10.8154 19.0903 10.1785 18.455 9.8834V9.8834Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
          </div>
       
        
        </Grid>
     

              </Grid>
            </Box>
        </Modal>
    </div>
  )
}



export default ModalPost