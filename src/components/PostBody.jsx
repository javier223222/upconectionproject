import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import Image from 'next/image'
import { getAnyProfile, getProfile } from '@/apiconections'
import ModalPost from './ModalPost'
import likeImg from "@/assets/like.svg"
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Post = ({imageuse,username,contentOfPublication,idpublication,token,tipodecategorios,nameexpertoOrExpert}) => {
  const [imagePublication,setImagePublication]=useState({image:null,idpublicacion:idpublication,likes:[],tokenp:token,iduser:'',
  liked:false,contentMesage:null,defaultMe:"",
  showALLPubli:false,
  buttonOrEnviar:false})
  
  useEffect(()=>{
    
    getLikes()
    getImages()
    getIdUser()
   
    
  },[])
  const navigation=useRouter()
  const openModal=()=>{
    setImagePublication(x=>{
      return {
        ...x,
        showALLPubli:!x.showALLPubli
      }
    })
  }
  const addComment=async()=>{
     if(imagePublication.contentMesage==null){
      alert("no se puede agregar un comentario vacio")
     }else{
      const res=await axios.post("http://localhost:80/publications/addcomment",{
        idpublicacion:imagePublication.idpublicacion,
        comment:imagePublication.contentMesage
      },{
        headers:{
          Authorization:imagePublication.tokenp
        }
      })
      console.log(res.data)
      setImagePublication(x=>{
        return {
          ...x,
          contentMesage:null
        }
      })
      navigation.refresh()
     }
     
  }
   
  const onInputChange=(e)=>{
    const {name,value}=e.target
    setImagePublication(x=>{
      return{
        ...x,
        [name]:value
       
      }
    })
  }

  const getIdUser=async()=>{
    const res=await getAnyProfile(`http://localhost:80/profile/getIdByToken`,token)
    setImagePublication(x=>{
      return{
        ...x,
        iduser:res.iduser
      }
    })
    const nuevolike=await imagePublication.likes.find(x=>x.iduser==res.iduser)
    if(nuevolike){
      setImagePublication(x=>{
        return{
          ...x,
          liked:true
        }
      })
    }else{
      setImagePublication(x=>{
        return{
          ...x,
          liked:false
        }
      })
    }
    await getLikes()
    
   
  }
  const findlike=async()=>{
    const nuevolike=await imagePublication.likes.find(x=>x.iduser==imagePublication.iduser)
    if(nuevolike){
      setImagePublication(x=>{
        return{
          ...x,
          liked:true
        }
      })
    }else{
      setImagePublication(x=>{
        return{
          ...x,
          liked:false
        }
      })
    }

  }
  const getLikes=async()=>{
    const res=await getAnyProfile(`http://localhost:80/publications/likesofpublications?idpublicacion=${imagePublication.idpublicacion}`,token)
    setImagePublication(x=>{
      return{
        ...x,
        likes:res.rows
      }
    })
   await findlike()

  }
  const addLike=async()=>{
    const res=await axios.patch("http://localhost:80/publications/addLike",{
      idpublicacion:imagePublication.idpublicacion
    },{
      headers:{
        Authorization:imagePublication.tokenp
      }
    })
  
    await getLikes()
    await findlike()

   
  }


  const getImages=async()=>{
    
    const res=await getAnyProfile(`http://localhost:80/publications/getmediapublications?idpublicacion=${imagePublication.idpublicacion}`,token)
    setImagePublication(x=>{
      return {...x,image:res.result.length!=0?res.result[0].urlfile:null}
    
    })
  }
  const openIntab=()=>{
    if(imagePublication.showALLPubli==false){
      openModal()
    }
  }
    
  return (
    <div style={{width:"100%"}}>
    <Paper   sx={{
        p: 2,
        margin: 'auto',
        width: '50%',
      
        flexGrow: 1,
       
     
      }}   elevation={4}>
     
     <Grid   container spacing={2}>
        <Grid item  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start"  >
          <Image onClick={()=>openIntab()}  style={{borderRadius:"50px"}} width={"60"} height={"60"} src={imageuse!=null||imageuse!=undefined?imageuse:acountCircle}></Image>
          <h4 onClick={()=>openIntab()} > {username}</h4>
          <Grid item  
           container 
           direction={"row"}
           justifyContent={"flex-end"}
           gap={"1rem"}
          >
            <h2 onClick={()=>openIntab()} >{nameexpertoOrExpert}</h2>
            <h2 onClick={()=>openIntab()} >{tipodecategorios}</h2>


          </Grid>
          <Grid item 
         container 
         direction={"row"}
         justifyContent={"flex-end"}
         
          
        >
     
      <Image   src={likeImg} onClick={async()=>addLike()}></Image>:
        
        
        

        </Grid>
                  
        </Grid>
       
        <Grid  item  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start" >
           <p onClick={()=>openIntab()} >{contentOfPublication}</p>
        </Grid>

        <Grid 
        item   container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          {
            imagePublication.image!=null ? 
            /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))(.doc|.DOC|.pdf|.PDF)$/.test(imagePublication.image) ?<iframe onClick={()=>openIntab()}  src={imagePublication.image} width="400" height="400"></iframe>
            :
            <Image onClick={()=>openIntab()}  width={"400"} height={"400"} src={imagePublication.image}></Image>:<></>
          }
        </Grid>
        <Grid item container>
          <input  defaultValue={imagePublication.defaultMe} name='contentMesage' onChange={onInputChange} placeholder='escribe un comentario'>
          </input>
          <button onClick={addComment}>
            agregar
          </button>
        </Grid>

     </Grid>
     
    </Paper>
    <ModalPost
    numerOfLikes={imagePublication.likes.length}
     nameexpertoOrExpert={nameexpertoOrExpert} 
     tipodecategorios={tipodecategorios}
      contentOfPublication={contentOfPublication} 
      imagePublication={imagePublication.image} 
      imageuse={imageuse} 
      username={username}
       open={imagePublication.showALLPubli} 
       close={openModal}
        imagenOfPublication={imagePublication} token={imagePublication.tokenp} idPublication={imagePublication.idpublicacion}   ></ModalPost>
    </div>
  )
}



export default Post