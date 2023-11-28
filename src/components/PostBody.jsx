import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import acountCircle from '@/assets/acountcircle.svg'
import Image from 'next/image'
import { getAnyProfile, getProfile } from '@/apiconections'
import ModalPost from './ModalPost'
import likeImg from "@/assets/like.svg"
import axios from 'axios'
import deleteImg from "@/assets/delete.svg"
import { useRouter } from 'next/navigation'

const Post = ({imageuse,username,contentOfPublication,idpublication,token,tipodecategorios,nameexpertoOrExpert,admin,deletePubli}) => {
  const [imagePublication,setImagePublication]=useState({image:null,idpublicacion:idpublication,likes:[],tokenp:token,iduser:'',
  liked:false,contentMesage:null,defaultMe:"",
  showDelete:false,
  showALLPubli:false,
  buttonOrEnviar:false,admine:admin})
  
  useEffect(()=>{
    
    getLikes()
    getImages()
    getIdUser()
   
    
  },[])
  const navigation=useRouter()
  const showDelete=()=>{
    setImagePublication(x=>{
      return{
        ...x,
        showDelete:!x.showDelete
      }
    
    })
  }
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
      const res=await axios.post("http://18.116.19.145/publications/addcomment",{
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
    const res=await getAnyProfile(`http://18.116.19.145/profile/getIdByToken`,token)
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
    const res=await getAnyProfile(`http://18.116.19.145/publications/likesofpublications?idpublicacion=${imagePublication.idpublicacion}`,token)
    setImagePublication(x=>{
      return{
        ...x,
        likes:res.rows
      }
    })
   await findlike()

  }
  const addLike=async()=>{
    const res=await axios.patch("http://18.116.19.145/publications/addLike",{
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
    
    const res=await getAnyProfile(`http://18.116.19.145/publications/getmediapublications?idpublicacion=${imagePublication.idpublicacion}`,token)
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
    <div onMouseOver={showDelete} onMouseOut={showDelete} style={{width:"100%"}}>
    <Paper   sx={{
        p: 2,
        margin: 'auto',
        width: '50%',
      
        flexGrow: 1,
       
     
      }}   elevation={4}>
     
     <Grid   container spacing={2}>
        <Grid item   container
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
         {
          imagePublication.admine?imagePublication.showDelete?<Image onClick={async()=>deletePubli(imagePublication.idpublicacion)}  src={deleteImg} ></Image>:<></>:<></>
         } 
     
      <Image   src={likeImg} onClick={async()=>addLike()}></Image>
        
        
        

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
          <div className='centrar-comentsandbutton'>
          <input className='comentario'  defaultValue={imagePublication.defaultMe} name='contentMesage' onChange={onInputChange} placeholder='escribe un comentario'>
          </input>
          <button className='enviar-comentario' onClick={addComment}>
          <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.455 9.8834L7.063 4.1434C6.76535 3.96928 6.40109 3.95274 6.08888 4.09916C5.77667 4.24558 5.55647 4.53621 5.5 4.8764C5.5039 4.98942 5.53114 5.10041 5.58 5.2024L7.749 10.4424C7.85786 10.7903 7.91711 11.1519 7.925 11.5164C7.91714 11.8809 7.85789 12.2425 7.749 12.5904L5.58 17.8304C5.53114 17.9324 5.5039 18.0434 5.5 18.1564C5.55687 18.4961 5.77703 18.7862 6.0889 18.9323C6.40078 19.0785 6.76456 19.062 7.062 18.8884L18.455 13.1484C19.0903 12.8533 19.4967 12.2164 19.4967 11.5159C19.4967 10.8154 19.0903 10.1785 18.455 9.8834V9.8834Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
          </div>
         
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