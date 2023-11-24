'use client'

import { Grid } from '@mui/material'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Post from './PostBody'
import { getAnyProfile } from '@/apiconections'

const PostContainer = ({token,username,allpublication,allapuntes,totalPagesPubl,totalPagesApu,pagepu,pageApu,imagende}) => {
  const [publication, setPublication] = useState({whShow:false,allPublications:allpublication,
    allApuntes:allapuntes,totalPagePublications:totalPagesPubl,
    totalPagesApuntes:totalPagesApu,pageApuntes:pagepu,pagesPublic:pageApu,usernameoFmy:username,
    tokenOfmy:token
  })
  const getMorePublications=async()=>{
   
    if(!publication.whShow){
      if(publication.pagesPublic<publication.totalPagePublications){
        const res=await getAnyProfile(`http://localhost:80/publications/?type=Publicacion&idcategoria=1&page=${parseInt(publication.pagesPublic)+1}&limit=4&username=${username}`,publication.tokenOfmy)
        setPublication(x=>{
          return {
            ...x,
            allPublications:[...x.allPublications,...res.result],
            pagesPublic:parseInt(res.page)
            
          }
        })
      }else{
        return
      }
      
    }else{
      if(publication.pageApuntes<publication.totalPagesApuntes){
        const res=await getAnyProfile(`http://localhost:80/publications/?type=Apunte&idcategoria=2&page=${parseInt(publication.pageApuntes)+1}&limit=4&username=${username}`,publication.tokenOfmy)
      
        setPublication(x=>{
          return {
            ...x,
            allApuntes:[...x.allApuntes,...res.result],
            pageApuntes:parseInt(res.page)
            
          }
        })
      }else{
        return
      }
    
    }
  }
  const changeColor = () => {
    setPublication(x=>{
      return {
        ...x,
        whShow:!x.whShow
      }
    })
  }
  return (
    <div id='allcontent' style={{height:"100%"}}>
       <InfiniteScroll dataLength={!publication.whShow?publication.allPublications.length:publication.allApuntes.length}
     hasMore={true}  
     next={async()=>getMorePublications()}
    
     
    ></InfiniteScroll>
            <Grid  container
   direction="row"
   justifyContent="center"
   style={{cursor:"pointer"}}
  spacing={12}  gap={"17%"} marginTop={"-5rem"} >
     <Grid  item>
      {
        !publication.whShow?<span style={{color:!publication.whShow?'#5654A8':"black"}}>Publicaciones</span>:<span onClick={changeColor} style={{color:!publication.whShow?'#5654A8':"black"}}>Publicaciones</span>
      }
        
     </Grid>
     <Grid  item>
     {
        publication.whShow?<span style={{color:publication.whShow?'#5654A8':"black"}}>Apuntes</span>:<span onClick={changeColor} style={{color:publication.whShow?'#5654A8':"black"}}>Apuntes</span>
      }
     </Grid>
    
     


   </Grid>
   <div></div>
   <div></div>
     <Grid sx={{visibility:"hidden"}}  container
   direction="row"
   justifyContent="center"
  spacing={12}  gap={"17%"} marginTop={"-5rem"} >
     <Grid  item>
      {
        !publication.whShow?<span style={{color:!publication.whShow?'#5654A8':"black"}}>Publicaciones</span>:<span onClick={changeColor} style={{color:!publication.whShow?'#5654A8':"black"}}>Publicaciones</span>
      }
        
     </Grid>
     <Grid  item>
     {
        publication.whShow?<span style={{color:publication.whShow?'#5654A8':"black"}}>Apuntes</span>:<span onClick={changeColor} style={{color:publication.whShow?'#5654A8':"black"}}>Apuntes</span>
      }
     </Grid>
    
     


   </Grid>
   <Grid sx={{visibility:"hidden"}}  container
   direction="row"
   justifyContent="center"
  spacing={12}  gap={"17%"} marginTop={"-5rem"} >
     <Grid  item>
      {
        !publication.whShow?<span style={{color:!publication.whShow?'#5654A8':"black"}}>Publicaciones</span>:<span onClick={changeColor} style={{color:!publication.whShow?'#5654A8':"black"}}>Publicaciones</span>
      }
        
     </Grid>
     <Grid   item>
     {
        publication.whShow?<span style={{color:publication.whShow?'#5654A8':"black"}}>Apuntes</span>:<span onClick={changeColor} style={{color:publication.whShow?'#5654A8':"black"}}>Apuntes</span>
      }
     </Grid>
    
     


   </Grid>
   <Grid  container
  direction="column"
  justifyContent="center"
  alignItems="center" 
  gap={"1.4rem"}
   >
   

   
    {
      !publication.whShow?<>
      
      {
        publication.allPublications.length!=0?publication.allPublications.map((x,i)=>{
          return <Post  idpublication={x.idpublicacion} 
           contentOfPublication={x.cuerpodelapublicacion} tipodecategorios={x.tipoDecategoria} nameexpertoOrExpert={x.namefininteorexpert}  token={publication.tokenOfmy} imageuse={imagende} username={publication.usernameoFmy} ></Post>
        }):<></>
      }
    </>:<></>
    }

     {

      publication.whShow?<>
      
      {
        publication.allApuntes.length!=0?publication.allApuntes.map((x,i)=>{
          return <Post idpublication={x.idpublicacion} tipodecategorios={x.tipoDecategoria}  nameexpertoOrExpert={x.namefininteorexpert} token={publication.tokenOfmy} contentOfPublication={x.cuerpodelapublicacion} imageuse={imagende} username={publication.usernameoFmy} ></Post>
        }):<></>
      }
      </>:<></>
    }
  
    

   </Grid>
   
    </div>
 
  )
}



export default PostContainer